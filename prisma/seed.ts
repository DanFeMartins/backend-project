import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
 await prisma.user.createMany({
    data: [
        {
          email: 'admin1@example.com',
          senha: '1234562',
          name: 'Admin4',
        },
        {
          email: 'user1@example.com',
          senha: 'abcdef',
          name: 'User',
        },
      ],
 })
}

seed().catch(e => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
});