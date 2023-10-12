import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import { CreateFeaturedInput, FilterFeaturedInput } from 'src/shared/interfaces/graphql';

@Injectable()
export class FeaturedService {
  async create(id_institution: string, createFeaturedInput: CreateFeaturedInput) {
    return await clients[id_institution].featured.create({data: createFeaturedInput})
  }

  async findAll(id_institution: string, filterFeaturedInput: FilterFeaturedInput) {
    return await clients[id_institution].featured.findMany({where: filterFeaturedInput})
  }

  async delete(id_institution: string, id_featured: number) {
    return await clients[id_institution].featured.delete({where: {id_featured: id_featured}})
  }
}
