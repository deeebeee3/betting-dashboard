const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.event.createMany({
    data: [
      { event_name: "Football: Liverpool vs. Manchester", odds: 3.5 },
      { event_name: "LaCross: France vs. UK", odds: 4.2 },
      { event_name: "Rugby: Team England vs. Team Samoa", odds: 1.45 },
      { event_name: "Rowing: Team GB vs. Team US", odds: 2.89 },
      { event_name: "Tennis: Novak vs. Navaratalova", odds: 3.3 },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
