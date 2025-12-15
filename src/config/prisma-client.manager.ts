import { Injectable, Scope } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaClientManager {
  private clients: { [key: string]: PrismaClient } = {};

  getClient(tenantId: string): PrismaClient {
    if (!tenantId) {
      throw new Error('Tenant ID is required');
    }

    if (!this.clients[tenantId]) {
      const databaseUrl = `${process.env.DATABASE_URL}/${tenantId}`;
      this.clients[tenantId] = new PrismaClient({
        datasources: { db: { url: databaseUrl } },
      });
      console.log(`PrismaClient created for tenant: ${tenantId}`);
    }

    return this.clients[tenantId];
  }
}
