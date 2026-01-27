import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { FilterAreaDto } from './dto/filter-area.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('areas')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createAreaDto: CreateAreaDto,
  ) {
    return this.areaService.create(id_institution, createAreaDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
    @Query() filterAreaDto: FilterAreaDto,
  ) {
    return this.areaService.findAll(id_institution, filterAreaDto);
  }

  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateAreaDto: UpdateAreaDto,
  ) {
    return this.areaService.update(id_institution, updateAreaDto);
  }

  @Delete(':id_area')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_area', ParseIntPipe) id_area: number,
  ) {
    return this.areaService.delete(id_institution, id_area);
  }
}
