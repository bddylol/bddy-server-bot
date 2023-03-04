require("dotenv/config");
import { Client } from "discord.js";
import ClientReady from "./events/ClientReady";
import InteractionCreate from "./events/InteractionCreate";

const client = new Client({ intents: 3276799 });

ClientReady(client);
InteractionCreate(client);

client.login(process.env.DISCORD_TOKEN);
