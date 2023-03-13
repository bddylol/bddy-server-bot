//@ts-nocheck
import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors,
  BaseInteraction,
  Interaction,
  PermissionFlagsBits,
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  ContextMenuCommandInteraction,
  MessageContextMenuCommandInteraction,
  UserContextMenuCommandInteraction
} from "discord.js";

import { prisma } from "../util/sql";

export default {
  data: new ContextMenuCommandBuilder()
    .setName("Grant VIP")
    .setType(ApplicationCommandType.User),
  async execute(interaction: UserContextMenuCommandInteraction) {
    if (!interaction.member?.permissions.has(PermissionFlagsBits.ManageRoles)) {
      return await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Error")
            .setDescription("You do not have permission to use this command")
            .setColor(Colors.Red)
        ],
        ephemeral: true
      });
    }
    const member = interaction.targetMember;
    await member?.roles.add("1082028789707575437");
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Success")
          .setDescription(
            "Successfully granted VIP to " + member?.user.toString()
          )
          .setColor(Colors.Green)
      ],
      ephemeral: true
    });

    try {
      await member?.user.send({
        embeds: [
          new EmbedBuilder()
            .setTitle("You have been granted VIP!")
            .setDescription(
              "You have been granted VIP by " + interaction.user.toString()
            )
            .setColor(Colors.Green)
        ]
      });
    } catch (e) {}
  }
};
