import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';

@Injectable()
export class InstitutionService {
  async findAll() {
    return await clients['institutions'].institution.findMany();
  }
}
