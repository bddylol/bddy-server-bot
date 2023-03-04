import {
  CommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder
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
          .setDescription("Multipurpose bot for bddy's server")
          .addFields([
            {
              name: "Developer",
              value: "bddy#5683"
            },
            {
              name: "Library",
              value: `discord.js ${require("../../package.json").dependencies[
                "discord.js"
              ].replace("^", "")}`
            },
            {
              name: "Latest Commit",
              value: `${gitCommit}`
            }
          ])
          .setTimestamp()
      ]
    });
  }
};
