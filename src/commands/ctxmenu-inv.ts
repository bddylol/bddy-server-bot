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

import { prisma } from "../util/esql";
import { GLOBAL_ITEMS } from "../util/GLOBAL_ITEMS";

export default {
  data: new ContextMenuCommandBuilder()
    .setName("User Inventory")
    .setType(ApplicationCommandType.User),
  async execute(interaction: UserContextMenuCommandInteraction) {
    const member = interaction.targetUser;

    const user = await prisma.user.findFirst({
      where: { discord_id: member.id },
      select: { inventory: true }
    });

    const embed = new EmbedBuilder()
      .setTitle(`${member.username}'s Inventory`)
      .setColor(Colors.Green);

    //@ts-ignore
    if (user?.inventory?.length === 0) {
      embed.setDescription("This user has no items in their inventory");
    } else {
      //@ts-ignore
      user?.inventory?.forEach(async (item: LocalItem) => {
        //@ts-ignore
        const itemData: GlobalItem = GLOBAL_ITEMS[item.item_id];
        console.log(itemData);
        console.log(item);
        if (!itemData) {
          return await interaction.reply("hmms no item data :thinking:");
        }
        embed.addFields({
          name: itemData.item_name,
          value: `Description: ${itemData.item_description}\nAmount: ${item.item_amount}`
        });
      });
    }

    await interaction.reply({
      embeds: [embed]
    });
  }
};
