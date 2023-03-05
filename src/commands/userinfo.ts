import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors,
  User,
  GuildMember
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
    //@ts-ignore
    const member: GuildMember =
      interaction?.options?.getMember("user") || interaction.member;
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Blurple)
          .setTitle("User Information")
          .setThumbnail(member.user.avatarURL())
          .setDescription(`Information about ${member.user.username}`)
          .addFields([
            {
              name: "Username",
              value: member.user.username,
              inline: true
            },
            {
              name: "Discriminator",
              value: "#" + member.user.discriminator,
              inline: true
            },
            {
              name: "ID",
              value: `\`${member.user.id}\``,
              inline: true
            },
            {
              name: "Bot",
              value: member.user.bot ? "Yes" : "No",
              inline: true
            },
            {
              name: "System",
              value: member.user.system ? "Yes" : "No",
              inline: true
            },
            {
              name: "Created At",
              value: member.user.createdAt.toDateString(),
              inline: true
            },
            {
              name: "Joined At",
              value: `${
                // @ts-ignore
                member.joinedAt.toDateString() || "how did you get here?"
              }`,
              inline: true
            },
            {
              name: "Roles",
              value: `${member.roles.cache.map((role) => ` <@&${role.id}>`)}`
            }
          ])
      ]
    });
  }
};
