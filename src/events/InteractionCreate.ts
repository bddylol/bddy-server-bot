import { BaseInteraction, Client, Interaction, Events } from "discord.js";

export default (client: Client): void => {
  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    // @ts-ignore
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`
      );
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content:
          "There was an error while executing this command. Please try later.",
        ephemeral: true
      });
    }
  });
};
