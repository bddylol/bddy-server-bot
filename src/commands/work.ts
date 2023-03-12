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
    .setName("work")
    .setDescription("Work to earn money!"),
  async execute(interaction: CommandInteraction) {
    const userCooldowned = await cooldown.getUser(interaction.user.id);
    if (userCooldowned) {
      const timeLeft = msToMinutes(userCooldowned.msLeft, false);
      return await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Cooldown")
            .setDescription(
              `You are on cooldown for ${timeLeft.minutes} minutes and ${timeLeft.seconds} seconds`
            )
            .setColor(Colors.Red)
        ]
      });
    }
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

    await cooldown.addUser(interaction.user.id);
  }
};
