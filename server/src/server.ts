import { PrismaClient } from '.prisma/client';
import Fastify from 'fastify';

const prisma = new PrismaClient();

const app = Fastify();

app.get('/habits', async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http server running!');
  });
