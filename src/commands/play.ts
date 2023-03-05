//@ts-nocheck
import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors
} from "discord.js";
import ytdl from "ytdl-core";
import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  NoSubscriberBehavior,
  AudioPlayerStatus
} from "@discordjs/voice";
import yts, { VideoSearchResult } from "yt-search";

export default {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Play music")
    .addStringOption((o) =>
      o.setName("song").setDescription("Song Name").setRequired(true)
    ),
  async autocomplete(interaction: AutocompleteInteraction) {},
  async execute(interaction: CommandInteraction) {
    if (!interaction?.member?.voice?.channel) {
      return await interaction.reply({
        content: "You must be in a voice channel to use this command",
        ephemeral: true
      });
    }
    const song = interaction.options.getString("song");
    const video: VideoSearchResult = await yts(song).then((e) => e.videos[0]);
    const embed = new EmbedBuilder()
      .setTitle("🎶 Music")
      .setColor(Colors.Green);
    const connection = await joinVoiceChannel({
      channelId: interaction.member.voice.channel.id,
      guildId: interaction.guildId,
      adapterCreator: interaction.guild.voiceAdapterCreator
    });

    const YTDLVideo = await ytdl(video.url, { filter: "audioonly" });

    const stream = createAudioResource(YTDLVideo);

    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause
      }
    });

    connection.subscribe(player);
    player.play(stream);
    embed.setDescription(
      `Now playing **[${video.title}](${video.url})** \`${video.duration}\` `
    );
    embed.setThumbnail(video.thumbnail);
    interaction.reply({
      embeds: [embed]
    });

    player.on("error", (error) => {
      interaction.followUp(
        `Error: ${error.message} with resource ${error.resource.metadata.title}`
      );
      player.play(getNextResource());
    });

    player.on(AudioPlayerStatus.Idle, () => {
      interaction.channel.send({
        embeds: [
          new EmbedBuilder()
            .setTitle("🎶 Music")
            .setDescription(`Finished playing ${video.title}`)
            .setColor(Colors.Green)
        ]
      });
    });
  }
};
