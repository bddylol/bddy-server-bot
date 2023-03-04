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
    ),
  async execute(interaction: CommandInteraction) {
    //@ts-ignore
    if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator))
      return await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Permission Denied")
            .setDescription("You do not have permission to use this command.")
            .setColor(Colors.Red)
        ]
      });
    //@ts-ignore
    if (interaction.options.getSubcommand() === "add_money") {
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
