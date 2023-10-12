import { PrismaClient } from '@prisma/client';

const clients = {
  'institutions': new PrismaClient({ datasources: { db: { url: `${process.env.DATABASE_URL}/edsoft_institutions` } } }),
  '1000': new PrismaClient({ datasources: { db: { url: `${process.env.DATABASE_URL}/1000` } } }),
  '1054': new PrismaClient({ datasources: { db: { url: `${process.env.DATABASE_URL}/1054` } } }),
  '1059': new PrismaClient({ datasources: { db: { url: `${process.env.DATABASE_URL}/1059` } } }),
}

export default clients;
