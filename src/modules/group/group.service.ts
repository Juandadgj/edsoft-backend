import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import {
  CreateGroupInput,
  FilterGroupInput,
  UpdateGroupInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class GroupService {
  async create(id_institution: string, createGroupInput: CreateGroupInput) {
    return await clients[id_institution].group.create({
      data: createGroupInput,
    });
  }

  async findAll(id_institution: string, filterGroupInput: FilterGroupInput) {
    return await clients[id_institution].group.findMany({
      where: filterGroupInput,
    });
  }

  async findOne(id_institution: string, id_group: number) {
    return await clients[id_institution].group.findUnique({
      where: { id_group: id_group },
    });
  }

  async update(id_institution: string, updateGroupInput: UpdateGroupInput) {
    return await clients[id_institution].group.update({
      where: { id_group: updateGroupInput.id_group },
      data: updateGroupInput,
    });
  }

  async delete(id_institution: string, id_group: number) {
    return await clients[id_institution].group.delete({
      where: { id_group: id_group },
    });
  }
}
