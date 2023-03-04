import {
  Client,
  Events,
  GuildMember,
  TextChannel,
  EmbedBuilder,
  Colors,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
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

    await channel
      .send({
        content: `<@${member.user.id}>`,
        embeds: [
          new EmbedBuilder()
            .setTitle("👋 Member Joined")
            .setDescription(
              `Welcome to **${member.guild.name}**, <@${member.user.id}>!\n\nMake sure to read the rules in <#${RULES_CHANNEL_ID}> and check out <#${ANNOUNCEMENTS_CHANNEL_ID}> for updates!`
            )
            .setColor(Colors.Blurple)
        ]
      })
      .then((m) => m.react("👋"));
    await member.roles.add("1077345475088355338");

    try {
      await member.send({
        embeds: [
          new EmbedBuilder()
            .setTitle("👋 Welcome to the server!")
            .setDescription(
              `Welcome to **${member.guild.name}**, <@${member.user.id}>!\n\nMake sure to read the rules in <#${RULES_CHANNEL_ID}> and check out <#${ANNOUNCEMENTS_CHANNEL_ID}> for updates!`
            )
            .setColor(Colors.Blurple)
        ],
        components: [
          new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setStyle(ButtonStyle.Link)
              .setLabel("Rules")
              .setURL(
                "https://discord.com/channels/1077342825957576735/1077343081994657833"
              )
              .setEmoji("📜"),
            new ButtonBuilder()
              .setStyle(ButtonStyle.Link)
              .setLabel("Announcements")
              .setURL(
                "https://discord.com/channels/1077342825957576735/1077343359171039343"
              )
              .setEmoji("📢"),
            new ButtonBuilder()
              .setStyle(ButtonStyle.Link)
              .setLabel("General")
              .setURL(
                "https://discord.com/channels/1077342825957576735/1077343503908081724"
              )
              .setEmoji("💬")
          )
        ]
      });
    } catch (e) {
      return;
    }
  });
};
