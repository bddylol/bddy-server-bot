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

process.on("uncaughtException", (e) => {
  //@ts-ignore
  client.channels.cache.get("1081932588161187851").send({
    embeds: [
      new EmbedBuilder()
        .setTitle("Uncaught Exception")
        //@ts-ignore
        .setDescription(`${codeBlock(e)}`)
        .setColor("Red")
    ]
  });
});
process.on("unhandledRejection", (e) => {
  //@ts-ignore
  client.channels.cache.get("1081932588161187851").send({
    embeds: [
      new EmbedBuilder()
        .setTitle("Unhandled Rejection")
        //@ts-ignore
        .setDescription(`${codeBlock(e)}`)
        .setColor("Red")
    ]
  });
});
process.on("uncaughtExceptionMonitor", (e) => {
  //@ts-ignore
  client.channels.cache.get("1081932588161187851").send({
    embeds: [
      new EmbedBuilder()
        .setTitle("Uncaught Expection Monitor")
        //@ts-ignore
        .setDescription(`${codeBlock(e)}`)
        .setColor("Red")
    ]
  });
});
process.on("warning", (e) => {
  //@ts-ignore
  client.channels.cache.get("1081932588161187851").send({
    embeds: [
      new EmbedBuilder()
        .setTitle("Warning")
        //@ts-ignore
        .setDescription(`${codeBlock(e)}`)
        .setColor("Yellow")
    ]
  });
});
process.on("exit", (e) => {
  //@ts-ignore
  client.channels.cache.get("1081932588161187851").send({
    embeds: [
      new EmbedBuilder()
        .setTitle("Exit")
        //@ts-ignore
        .setDescription(`${codeBlock(e)}`)
        .setColor("Red")
    ]
  });
});

client.login(process.env.DISCORD_TOKEN);
