import {
  Client,
  Events,
  GuildMember,
  TextChannel,
  EmbedBuilder,
  Colors
} from "discord.js";

export default (client: Client): void => {
  client.on(Events.GuildMemberAdd, async (member: GuildMember) => {
    const WELCOME_CHANNEL_ID = "1081663785225437265";
    const RULES_CHANNEL_ID = "1077343081994657833";
    const ANNOUNCEMENTS_CHANNEL_ID = "1077343359171039343";

    // @ts-ignore
    const channel: TextChannel = await member.guild.channels.fetch(
      WELCOME_CHANNEL_ID
    );

    await channel.send({
      embeds: [
        new EmbedBuilder()
          .setTitle("👋 Member Joined")
          .setDescription(
            `Welcome to **${member.guild.name}**, <@${member.user.id}>!\n\nMake sure to read the rules in <#${RULES_CHANNEL_ID}> and check out <#${ANNOUNCEMENTS_CHANNEL_ID}> for updates!`
          )
          .setColor(Colors.Blurple)
      ]
    });
  });
};
