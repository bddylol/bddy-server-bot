import { Message, Client, Interaction, Events } from "discord.js";
import { CreateUserInDB } from "../util/sql";

export default (client: Client): void => {
  client.on(Events.InteractionCreate, async (interaction: Interaction) => {
    try {
      // @ts-ignore
      await CreateUserInDB(interaction.member).then((x) =>
        console.log("[TEST] " + x)
      );
    } catch (e) {
      console.log("[DB-ERR]", e);
    }
  });
  client.on(Events.MessageCreate, async (msg: Message) => {
    try {
      // @ts-ignore
      await CreateUserInDB(msg.member).then((x) => console.log("[TEST] " + x));
    } catch (e) {
      console.log("[DB-ERR]", e);
    }
  });
};
