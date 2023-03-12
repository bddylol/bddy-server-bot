require("dotenv/config");
import { Client, codeBlock, EmbedBuilder } from "discord.js";
import ClientReady from "./events/ClientReady";
import CreateUserOnAnyAction from "./events/CreateUserOnAnyAction";
import InteractionCreate from "./events/InteractionCreate";
import MemberAdded from "./events/MemberAdded";
import { CreateUserInDB } from "./util/sql";

const client = new Client({
  intents: 3276799,
  ws: {
    properties: {
      browser: "Discord iOS"
    }
  }
});

ClientReady(client);
MemberAdded(client);
InteractionCreate(client);
CreateUserOnAnyAction(client);

client.login(process.env.DISCORD_TOKEN);
