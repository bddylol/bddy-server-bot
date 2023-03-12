//@ts-nocheck
//goofy errors
import {
  CommandInteraction,
  Colors,
  SlashCommandBuilder,
  EmbedBuilder
} from "discord.js";
import { getVoiceConnection, joinVoiceChannel } from "@discordjs/voice";
export default {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Join channel"),
  async execute(interaction: CommandInteraction) {
    if (!interaction?.member?.voice?.channel) {
      return await interaction.reply({
        content: "You must be in a voice channel to use this command",
        ephemeral: true
      });
    }
    const connection = getVoiceConnection(interaction.guildId);
    if (connection) {
      return await interaction.reply({
        content: "The bot is already in a voice channel!",
        ephemeral: true
      });
    }

    await joinVoiceChannel({
      channelId: interaction.member.voice.channel.id,
      guildId: interaction.guildId,
      adapterCreator: interaction.guild.voiceAdapterCreator
    });

    const embed = new EmbedBuilder();
    embed.setDescription(
      `Joined Channel <#${interaction.member.voice.channel.id}>`
    );
    embed.setColor(Colors.Green);
    interaction.reply({
      embeds: [embed]
    });
  }
};
