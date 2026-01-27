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
import { AbsenceService } from './absence.service';
import { CreateAbsenceDto } from './dto/create-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';
import { FilterAbsenceDto } from './dto/filter-absence.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('absences')
export class AbsenceController {
  constructor(private readonly absenceService: AbsenceService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createAbsenceDto: CreateAbsenceDto,
  ) {
    return this.absenceService.create(id_institution, createAbsenceDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
    @Query() filterAbsenceDto: FilterAbsenceDto,
  ) {
    return this.absenceService.findAll(id_institution, filterAbsenceDto);
  }

  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateAbsenceDto: UpdateAbsenceDto,
  ) {
    return this.absenceService.update(id_institution, updateAbsenceDto);
  }

  @Delete(':id_absence')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_absence', ParseIntPipe) id_absence: number,
  ) {
    return this.absenceService.delete(id_institution, id_absence);
  }
}
