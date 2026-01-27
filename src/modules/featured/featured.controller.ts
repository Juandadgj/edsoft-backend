import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { FeaturedService } from './featured.service';
import { CreateFeaturedDto } from './dto/create-featured.dto';
import { FilterFeaturedDto } from './dto/filter-featured.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('featured')
export class FeaturedController {
  constructor(private readonly featuredService: FeaturedService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createFeaturedDto: CreateFeaturedDto,
  ) {
    return this.featuredService.create(id_institution, createFeaturedDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
    @Query() filterFeaturedDto: FilterFeaturedDto,
  ) {
    return this.featuredService.findAll(id_institution, filterFeaturedDto);
  }

  @Delete(':id_featured')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_featured', ParseIntPipe) id_featured: number,
  ) {
    return this.featuredService.delete(id_institution, id_featured);
  }
}
