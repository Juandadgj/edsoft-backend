import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ScholarYearService } from './scholar-year.service';
import { CreateScholarYearDto } from './dto/create-scholar-year.dto';
import { UpdateScholarYearDto } from './dto/update-scholar-year.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('scholar-years')
export class ScholarYearController {
  constructor(private readonly scholarYearService: ScholarYearService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createScholarYearDto: CreateScholarYearDto,
  ) {
    return this.scholarYearService.create(id_institution, createScholarYearDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
  ) {
    return this.scholarYearService.findAll(id_institution);
  }

  @Get('selected')
  findSelected(
    @InstitutionId() id_institution: string,
  ) {
    return this.scholarYearService.findSelected(id_institution);
  }

  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateScholarYearDto: UpdateScholarYearDto,
  ) {
    return this.scholarYearService.update(id_institution, updateScholarYearDto);
  }

  @Put(':id_year/select')
  select(
    @InstitutionId() id_institution: string,
    @Param('id_year', ParseIntPipe) id_year: number,
  ) {
    return this.scholarYearService.select(id_institution, id_year);
  }

  @Delete(':id_year')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_year', ParseIntPipe) id_year: number,
  ) {
    return this.scholarYearService.delete(id_institution, id_year);
  }
}
