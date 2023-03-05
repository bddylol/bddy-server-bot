import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors
} from "discord.js";
import { prisma } from "../util/sql";

export default {
  data: new SlashCommandBuilder()
    .setName("work")
    .setDescription("Work to earn money!"),
  async execute(interaction: CommandInteraction) {
    // @ts-ignore
    const amount = Math.floor(Math.random() * 20000);
    const messages = [
      `You worked as a cashier and earned ${amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })}`,
      `You worked as a janitor and earned ${amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })}`,
      `You worked as a waiter and earned ${amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })}`,
      `You worked as a cook and earned ${amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })}`
    ];
    const embed = new EmbedBuilder().setTitle("Work").setColor(Colors.Green);

    embed.setDescription(messages[Math.floor(Math.random() * messages.length)]);

    const userMoney = await prisma.user.findFirst({
      where: { discord_id: interaction.user?.id },
      select: { money: true }
    });
    console.log(userMoney);
    await prisma.user.update({
      where: { discord_id: interaction.user?.id },
      select: { money: true },
      // @ts-ignore
      data: { money: userMoney?.money + amount }
    });

    await interaction.reply({
      embeds: [embed]
    });
  }
};
