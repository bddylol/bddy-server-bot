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
    .setName("User Balance")
    .setType(ApplicationCommandType.User),
  async execute(interaction: UserContextMenuCommandInteraction) {
    const member = interaction.targetUser;
    if (member?.bot)
      return await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Error")
            .setDescription("You cannot view a bots balance")
            .setColor(Colors.Red)
        ],
        ephemeral: true
      });

    const userMoney = await prisma.user.findFirst({
      where: { discord_id: member?.id },
      select: { money: true }
    });

    const formatted = await userMoney?.money?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`${member.username}'s Balance`)
          .setDescription(`Balance: ${formatted}`)
          .setColor(Colors.Green)
      ],
      ephemeral: true
    });
  }
};
