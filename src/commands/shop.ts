import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors,
  BaseInteraction,
  Interaction,
  PermissionFlagsBits
} from "discord.js";
import { GlobalItem, GLOBAL_ITEMS, LocalItem } from "../util/GLOBAL_ITEMS";

import { prisma } from "../util/sql";

export default {
  data: new SlashCommandBuilder()
    .setName("shop")
    .setDescription("View a users inventory"),
  async execute(interaction: CommandInteraction) {
    const embed = new EmbedBuilder().setTitle(`Shop`).setColor(Colors.Green);

    //@ts-ignore

    Object.values(GLOBAL_ITEMS).forEach((value) => {
      //@ts-ignore
      const itemData: GlobalItem = value;
      embed.addFields({
        name: itemData.item_name,
        value: `Description: ${
          itemData.item_description
        }\nPrice: ${itemData.item_price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}`,
        inline: true
      });
    });

    await interaction.reply({
      embeds: [embed]
    });
  }
};
