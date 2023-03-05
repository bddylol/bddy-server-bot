// import { Sequelize } from "sequelize";
import { GuildMember } from "discord.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const CreateUserInDB = async (user: GuildMember) => {
  if (await prisma?.user?.findUnique({ where: { discord_id: user.id } }))
    return console.log(`[DB] User ${user.id} already exists in the database.`);
  return await prisma.user.create({
    data: {
      discord_id: user.id
      // warnings: [{}],
      // inventory: [{}]
    }
  });
};

export { prisma, CreateUserInDB };
