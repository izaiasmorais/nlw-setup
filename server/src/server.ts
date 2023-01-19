import { PrismaClient } from '.prisma/client';
import Fastify from 'fastify';
import cors from '@fastify/cors';

const prisma = new PrismaClient();

const app = Fastify();

app.register(cors);

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
