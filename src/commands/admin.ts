import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors,
  BaseInteraction,
  Interaction,
  PermissionFlagsBits
} from "discord.js";

import { prisma } from "../util/sql";

export default {
  data: new SlashCommandBuilder()
    .setName("admin")
    .setDescription("Admin Commands")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("add_money")
        .setDescription("Add money to a user")
        .addUserOption((option) =>
          option.setName("user").setDescription("The user").setRequired(true)
        )
        .addIntegerOption((option) =>
          option
            .setName("amount")
            .setDescription("The amount of money to add")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("purge")
        .setDescription("Purge x amount of messages")
        .addIntegerOption((option) =>
          option
            .setName("amount")
            .setDescription("The amount of messages to purge")
            .setRequired(true)
            .setMaxValue(99)
        )
    ),
  async execute(interaction: CommandInteraction) {
    //@ts-ignore
    if (interaction.options.getSubcommand() === "purge") {
      if (
        //@ts-ignore
        !interaction.member.permissions.has(PermissionFlagsBits.Administrator)
      )
        return await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle("Permission Denied")
              .setDescription("You do not have permission to use this command.")
              .setColor(Colors.Red)
          ]
        });
      //@ts-ignore
      const amount = interaction.options.getInteger("amount");
      //@ts-ignore
      await interaction.channel?.bulkDelete(amount);
      await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Purged Messages")
            .setDescription(`Purged ${amount} messages.`)
            .setColor(Colors.Green)
        ]
      });
    }
    //@ts-ignore
    if (interaction.options.getSubcommand() === "add_money") {
      if (
        //@ts-ignore
        !interaction.member.permissions.has(PermissionFlagsBits.Administrator)
      )
        return await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle("Permission Denied")
              .setDescription("You do not have permission to use this command.")
              .setColor(Colors.Red)
          ]
        });
      const user = interaction.options.getUser("user");
      //@ts-ignore
      const amount = interaction.options.getInteger("amount");

      const userMoney = await prisma.user.findFirst({
        where: { discord_id: user?.id },
        select: { money: true }
      });
      console.log(userMoney);
      await prisma.user.update({
        where: { discord_id: user?.id },
        select: { money: true },
        data: { money: userMoney?.money + amount }
      });
      await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Money Added")
            .setDescription(`Added ${amount} to ${user?.username}'s balance.`)
            .setColor(Colors.Green)
        ]
      });
    }
  }
};
