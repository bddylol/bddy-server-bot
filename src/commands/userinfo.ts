import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors
} from "discord.js";

import { execSync } from "child_process";

export default {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Information from a certian user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to get info from")
        .setRequired(false)
    ),
  async execute(interaction: CommandInteraction) {
    const user = interaction.options.getUser("user") || interaction.user;

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Blurple)
          .setTitle("User Information")
          .setThumbnail(user.avatarURL())
          .setDescription(`Information about ${user.username}`)
          .addFields([
            {
              name: "Username",
              value: user.username,
              inline: true
            },
            {
              name: "Discriminator",
              value: user.discriminator,
              inline: true
            },
            {
              name: "ID",
              value: user.id,
              inline: true
            },
            {
              name: "Device",
              // @ts-ignore
              value: user.presence?.clientStatus?.desktop
                ? "Desktop"
                : // @ts-ignore
                user.presence?.clientStatus?.mobile
                ? "Mobile"
                : // @ts-ignore
                user.presence?.clientStatus?.web
                ? "Web"
                : "Unknown",
              inline: true
            },
            {
              name: "Bot",
              value: user.bot ? "Yes" : "No",
              inline: true
            },
            {
              name: "Created At",
              value: user.createdAt.toDateString(),
              inline: true
            },
            {
              name: "Joined At",
              value: `${
                // @ts-ignore
                interaction?.guild?.members.cache
                  ?.get(user?.id)
                  .joinedAt.toDateString() || "how did you get here?"
              }`,
              inline: true
            }
          ])
      ]
    });
  }
};
