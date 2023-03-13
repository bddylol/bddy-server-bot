//@ts-nocheck
import { EmbedBuilder } from "@discordjs/builders";
import { Client, Colors, Events, Message } from "discord.js";

export default (client: Client): void => {
  client.on(Events.MessageDelete, (message: Message) => {
    client.channels.cache.get(LOG_CHANNEL_ID)?.send({
      embeds: [
        new EmbedBuilder()
          .setTitle("Message Deleted")
          .setDescription(
            `⚠️ Somebody deleted a message in ${message.channel.toString()}.`
          )
          .addFields({
            name: "Message Content",
            value: message.content,
            inline: true
          })
          .setColor(Colors.Red)
          .setTimestamp()
      ]
    });
  });

  client.on(
    Events.MessageUpdate,
    (oldMessage: Message, newMessage: Message) => {
      client.channels.cache.get(LOG_CHANNEL_ID)?.send({
        embeds: [
          new EmbedBuilder()
            .setTitle("Message Edited")
            .setDescription(
              `⚠️ Somebody edited a message in ${oldMessage.channel.toString()}.`
            )
            .addFields(
              {
                name: "Old Message Content",
                value: oldMessage.content,
                inline: true
              },
              {
                name: "New Message Content",
                value: newMessage.content,
                inline: true
              }
            )
            .setColor(Colors.Red)
            .setTimestamp()
        ]
      });
    }
  );

  client.on(Events.ChannelDelete, (channel) => {
    client.channels.cache.get(LOG_CHANNEL_ID)?.send({
      embeds: [
        new EmbedBuilder()
          .setTitle("Channel Deleted")
          .setDescription(`⚠️ Somebody deleted a channel.`)
          .addFields({
            name: "Channel Name",
            value: channel.name,
            inline: true
          })
          .setColor(Colors.Red)
          .setTimestamp()
      ]
    });
  });

  client.on(Events.ChannelUpdate, (oldChannel, newChannel) => {
    client.channels.cache.get(LOG_CHANNEL_ID)?.send({
      embeds: [
        new EmbedBuilder()
          .setTitle("Channel Edited")
          .setDescription(`⚠️ Somebody edited a channel.`)
          .addFields(
            {
              name: "Old Channel Name",
              value: oldChannel.name,
              inline: true
            },
            {
              name: "New Channel Name",
              value: newChannel.name,
              inline: true
            }
          )
          .setColor(Colors.Red)
          .setTimestamp()
      ]
    });
  });

  client.on(Events.ChannelCreate, (channel) => {
    client.channels.cache.get(LOG_CHANNEL_ID)?.send({
      embeds: [
        new EmbedBuilder()
          .setTitle("Channel Created")
          .setDescription(`⚠️ Somebody created a channel.`)
          .addFields({
            name: "Channel Name",
            value: channel.name,
            inline: true
          })
          .setColor(Colors.Red)
          .setTimestamp()
      ]
    });
  });
};

export const LOG_CHANNEL_ID = "1084896240644390962";
