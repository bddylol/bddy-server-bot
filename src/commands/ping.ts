import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors,
  BaseInteraction,
  Interaction,
  PermissionFlagsBits
} from "discord.js";
//import { GlobalItem, GLOBAL_ITEMS, LocalItem } from "../util/GLOBAL_ITEMS";

// import { prisma } from "../util/sql";

export default {
  data: new SlashCommandBuilder().setName("ping").setDescription("Ping"),
  async execute(interaction: CommandInteraction) {
    const embed = new EmbedBuilder()
      .setTitle(`Ping`)
      .setDescription(
        //@ts-ignore

        `Pong ${interaction.createdAt - interaction.createdTimestamp}`
      )
      .setColor(Colors.Green);

    await interaction.reply({
      embeds: [embed]
    });
  }
};
