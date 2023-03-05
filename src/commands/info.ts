import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Colors
} from "discord.js";

import { execSync } from "child_process";

export default {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Get info about the bot"),
  async execute(interaction: CommandInteraction) {
    const gitCommit = await execSync("git rev-parse --short HEAD");
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Bot Information")
          .setURL("https://github.com/buddy-codes/bddy-server-bot")
          .setDescription("Multipurpose bot for bddy's server")
          .addFields([
            {
              name: "Developer(s)",
              value:
                "[bddy#5683](https://bddy.lol/), [NeonGamerBot_QK#3388](https://saahild.com), GitHub Copilot",
              inline: true
            },
            {
              name: "Library",
              value: `discord.js ${require("../../package.json").dependencies[
                "discord.js"
              ].replace("^", "")}`,
              inline: true
            },
            {
              name: "Latest Commit",
              value: `${gitCommit}`,
              inline: true
            }
          ])
          .setTimestamp()
          .setColor(Colors.Blurple)
      ]
    });
  }
};
