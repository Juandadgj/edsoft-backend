import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import {
  CreateAreaInput,
  FilterAreaInput,
  UpdateAreaInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class AreaService {
  async create(id_institution: string, createAreaInput: CreateAreaInput) {
    return await clients[id_institution].area.create({ data: createAreaInput });
  }

  async findAll(id_institution: string, filterAreaInput: FilterAreaInput) {
    return await clients[id_institution].area.findMany({
      where: filterAreaInput,
    });
  }

  async update(id_institution: string, updateAreaInput: UpdateAreaInput) {
    return await clients[id_institution].area.update({
      where: { id_area: updateAreaInput.id_area },
      data: updateAreaInput,
    });
  }

  async delete(id_institution: string, id_area: number) {
    return await clients[id_institution].area.delete({
      where: { id_area: id_area },
    });
  }
}
