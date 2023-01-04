import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {
      username: "test@e.com",
      password: "test1234",
      profile: {
        create: {
          mail: "test@e.com",
          firstname: "first",
          lastname: "last",
        },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
}
main();
