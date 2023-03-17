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
    .setName("Random User React Message")
    .setType(ApplicationCommandType.Message),
  async execute(interaction: MessageContextMenuCommandInteraction) {
    const msg = interaction.targetMessage;

    if (msg.reactions.cache.size === 0)
      return await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Error")
            .setDescription("This message has no reactions")
            .setColor(Colors.Red)
        ],
        ephemeral: true
      });

    const randomReaction = msg.reactions.cache.random();

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Random Reaction")
          .setDescription(
            `The random reaction is ${randomReaction.emoji.name} with ${randomReaction.count} reactions`
          )
          .setColor(Colors.Green)
      ]
    });
  }
};
