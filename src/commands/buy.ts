//@ts-nocheck
import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors,
  AutocompleteInteraction
} from "discord.js";
import { prisma } from "../util/sql";
import { GlobalItem, GLOBAL_ITEMS, LocalItem } from "../util/GLOBAL_ITEMS";
export default {
  data: new SlashCommandBuilder()
    .setName("buy")
    .setDescription("Work to earn money!")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("What will you buy")
        .setAutocomplete(true)
        .setRequired(true)
    ),

  async autocomplete(interaction: AutocompleteInteraction) {
    const focusedValue = interaction.options.getFocused();
    const choices = Object.values(GLOBAL_ITEMS).map((item) => item.item_name);
    const filtered = choices.filter((choice) =>
      choice.startsWith(focusedValue)
    );
    //  console.log(focusedValue, filtered, choices);
    await interaction.respond(
      filtered.map((choice) => ({
        name: choice,
        value:
          Object.values(GLOBAL_ITEMS).find((i) => i.item_name === choice)
            ?.item_id ?? choice
      }))
    );
  },

  async execute(interaction: CommandInteraction) {
    const embed = new EmbedBuilder().setTitle("Buy");
    //@ts-ignore
    const item = interaction.options.getString("query");

    if (!item) {
      embed
        .setColor(Colors.Red)
        .setDescription("Please provide an item to buy");
      return await interaction.reply({
        embeds: [embed]
      });

      //@ts-ignore
    } else if (!GLOBAL_ITEMS[item]) {
      embed
        .setColor(Colors.Red)
        .setDescription("Please provide a valid item to buy");
      return await interaction.reply({
        embeds: [embed]
      });
    }

    const user = await prisma.user.findFirst({
      where: { discord_id: interaction.user.id }
      //   select: { money: true }
    });
    // if(!user) { }
    // @ts-ignore
    const itemData: GlobalItem = GLOBAL_ITEMS[item];

    if (user?.money < itemData.item_price) {
      embed.setColor(Colors.Red).setDescription(
        `You do not have enough money to buy this item. You need ${
          //@ts-ignore
          (itemData.item_price - (user ? user.money : {})).toLocaleString(
            "en-US",
            {
              style: "currency",
              currency: "USD"
            }
          )
        }`
      );
      return await interaction.reply({
        embeds: [embed]
      });
    }

    if (itemData.item_id == GLOBAL_ITEMS.vip.item_id) {
      await interaction.member?.roles.add("1082028789707575437");
    }

    if (itemData.item_id == GLOBAL_ITEMS.dj_pass.item_id) {
      await interaction.member?.roles.add("1082028852630540450");
    }

    embed.setDescription(
      "You have bought " +
        itemData.item_name +
        " for " +
        itemData.item_price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        }) +
        " and have " +
        (user?.money - itemData.item_price).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        }) +
        " left."
    );
    embed.setColor(Colors.Green);
    let items: LocalItem[] = user.inventory || [];
    console.log(items, user);
    if (items.find((i) => i.item_id === itemData.item_id)) {
      let index = items.indexOf(
        items.find((i) => i.item_id === itemData.item_id)
      );
      console.log(index);
    } else {
      console.log("no exist");
      items.push({
        item_id: itemData.item_id,
        item_amount: 1
      });
    }
    await prisma.user.update({
      where: { discord_id: interaction.user.id },
      data: {
        ...user,
        money: user?.money - itemData.item_price,
        inventory: items
      }
    });
    await interaction.reply({
      embeds: [embed]
    });
  }
};
