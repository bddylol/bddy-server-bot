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
    .setName("bal")
    .setDescription("View a users balance")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user").setRequired(false)
    ),
  async execute(interaction: CommandInteraction) {
    //@ts-ignore

    const user = interaction.options.getUser("user") || interaction.user;
    if (user.bot)
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
      where: { discord_id: user?.id },
      select: { money: true }
    });

    const formatted = await userMoney?.money?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`${user.username}'s Balance`)
          .setDescription(`Balance: ${formatted}`)
          .setColor(Colors.Green)
      ]
    });
  }
};
