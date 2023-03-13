//@ts-nocheck
import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors,
  BaseInteraction,
  Interaction,
  PermissionFlagsBits,
  codeBlock,
  ActivityType
} from "discord.js";

import { prisma } from "../util/sql";
import { generateDependencyReport } from "@discordjs/voice";
export default {
  data: new SlashCommandBuilder()
    .setName("moderation")
    .setDescription("View a list & execute moderation commands")
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
        .setName("warnings")
        .setDescription("View a users warnings")
        .addUserOption((option) =>
          option.setName("user").setDescription("The user").setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("warn")
        .setDescription("Warn a specified user")
        .addUserOption((option) =>
          option.setName("user").setDescription("The user").setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("reason")
            .setDescription("The reason for the warning")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("bot_status")
        .setDescription("Change the status of the bot!")
        .addStringOption((option) =>
          option
            .setName("status")
            .setDescription("New Status (text)")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("vc_check").setDescription("Check VC Depencies")
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
    const bypassRequirements = ["566766267046821888"].includes(
      interaction.user.id
    );

    if (interaction.options.getSubcommand() === "bot_status") {
      const status = interaction.options.getString("status");

      if (
        interaction.member?.permissions.has(PermissionFlagsBits.Administrator)
      ) {
        await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle("Status Changed")
              .setDescription(`Status changed to ${status}`)
              .setColor(Colors.Green)
          ],
          ephemeral: true
        });

        await interaction.client.user.setActivity({
          name: status,
          type: ActivityType.Playing
        });
      } else {
        return await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle("Permission Denied")
              .setDescription("You do not have permission to use this command.")
              .setColor(Colors.Red)
          ],
          ephemeral: true
        });
      }
    }
    if (interaction.options.getSubcommand() === "warn") {
      if (
        !interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)
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
      const reason = interaction.options.getString("reason");
      const { warnings } = await prisma.user.findFirst({
        where: { discord_id: user?.id },
        //@ts-ignore
        select: { warnings: true }
      });
      await prisma.user.update({
        where: { discord_id: user?.id },
        data: {
          warnings: [
            ...warnings,
            {
              warning_author: interaction.user.id,
              warning_reason: reason,
              warning_date: new Date(),
              warning_id: Math.floor(Math.random() * 1000000)
            }
          ]
        }
      });
      await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Warning Added")
            .setDescription(
              `Added warning to <@${user?.id}> for reason: ${reason}`
            )
            .setColor(Colors.Green)
        ]
      });
    } else if (interaction.options.getSubcommand() === "vc_check") {
      if (
        //@ts-ignore
        !interaction.member.permissions.has(
          PermissionFlagsBits.Administrator
        ) ||
        !bypassRequirements
      )
        return await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle("Permission Denied")
              .setDescription("You do not have permission to use this command.")
              .setColor(Colors.Red)
          ]
        });
      const embed = new EmbedBuilder()
        .setTitle(`Voice Depencies `)
        .setDescription(
          //@ts-ignore
          generateDependencyReport()
        )
        .setColor(Colors.Green);

      await interaction.reply({
        embeds: [embed]
      });
    }
    //@ts-ignore
    if (interaction.options.getSubcommand() === "warnings") {
      if (
        //@ts-ignore
        !interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)
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
      const userWarnings = await prisma.user.findFirst({
        where: { discord_id: user?.id },
        //@ts-ignore
        select: { warnings: true }
      });

      let warningsEmbed = new EmbedBuilder()
        .setTitle(`${user?.username}'s Warnings`)
        .setColor(Colors.Green);

      if (userWarnings?.warnings.length === 0) {
        warningsEmbed.setDescription("No warnings.");
      } else {
        userWarnings?.warnings.forEach((warning) => {
          warningsEmbed.addFields([
            {
              name: "Warning #" + warning.warning_id,
              value: `Author: <@${warning.warning_author}>\nReason: ${codeBlock(
                `${warning.warning_reason}`
              )}\nDate: <t:${Math.floor(
                Date.parse(warning.warning_date) / 1000
              )}:R>`,
              inline: true
            }
          ]);
        });
      }

      await interaction.reply({
        embeds: [warningsEmbed]
      });
    }
    //@ts-ignore
    if (interaction.options.getSubcommand() === "purge") {
      if (
        //@ts-ignore
        !interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)
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
        !interaction.member.permissions.has(
          PermissionFlagsBits.Administrator
        ) ||
        bypassRequirements
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
