//@ts-nocheck
require("dotenv/config");
import {
  Events,
  Client,
  ActivityType,
  REST,
  Routes,
  Collection
} from "discord.js";
import fs from "node:fs";
import path from "node:path";
import { prisma } from "../util/sql";

export default (client: Client): void => {
  client.on(Events.ClientReady, async () => {
    try {
      await prisma.$connect();
      console.log("[DB] Connection has been established successfully.");
    } catch (e) {
      console.log("[DB] Unable to connect to the database", e);
    }
    console.log("Client Started as " + client.user?.tag);
    // @ts-ignore
    client.commands = new Collection();

    const commandsPath = path.join(__dirname, "../commands");
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".ts"));

    const commands = [];

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      console.log(
        "[COMMANDS] Attempting to load command " + command.default?.data?.name
      );
      // console.log(command)
      // commands.push([])
      // Set a new item in the Collection with the key as the command name and the value as the exported module
      if ("data" in command.default && "execute" in command.default) {
        // @ts-ignore
        client.commands.set(command.default.data.name, command.default);
        commands.push(command.default.data.toJSON());
      } else {
        console.log(
          `[COMMANDS] The command at ${filePath} is missing a required "data" or "execute" property.`
        );
      }
    }
    //@ts-ignore
    const rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_TOKEN
    );

    (async () => {
      try {
        console.log(
          `Started refreshing ${commands.length} application (/) commands.`
        );

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
          Routes.applicationCommands(process.env.CLIENT_ID),
          { body: commands }
        );
        //@ts-ignore
        console.log(
          `Successfully reloaded ${data?.length} application (/) commands.`
        );
      } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
      }
    })();

    // console.log(`${chalk.blueBright}[LOG]${chalk.reset} Client Started as ${chalk.yellowBright}${client.user?.tag}${chalk.reset}`);
  });
};
