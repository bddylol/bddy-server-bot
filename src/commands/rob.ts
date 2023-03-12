import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors
} from "discord.js";
import { prisma } from "../util/sql";
import { CommandCooldown, msToMinutes } from "discord-command-cooldown";
import ms from "ms";

const cooldown = new CommandCooldown("work", ms("20m"));

export default {
  data: new SlashCommandBuilder()
    .setName("rob")
    .setDescription("Rob places to earn money!"),
  async execute(interaction: CommandInteraction) {}
};
