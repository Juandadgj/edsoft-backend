import 'dotenv/config';
import type { PrismaConfig } from 'prisma';
import { env } from 'prisma/config';

export default {
  schema: 'src/config/database/schema.prisma',
  migrations: {
    path: 'src/config/database/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
} satisfies PrismaConfig;
