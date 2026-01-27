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
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { FilterTeacherDto } from './dto/filter-teacher.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createTeacherDto: CreateTeacherDto,
  ) {
    return this.teacherService.create(id_institution, createTeacherDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
    @Query() filterTeacherDto: FilterTeacherDto,
  ) {
    return this.teacherService.findAll(id_institution, filterTeacherDto);
  }

  @Get(':id_teacher')
  findOne(
    @InstitutionId() id_institution: string,
    @Param('id_teacher', ParseIntPipe) id_teacher: number,
  ) {
    return this.teacherService.findOne(id_institution, id_teacher);
  }

  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.teacherService.update(id_institution, updateTeacherDto);
  }

  @Delete(':id_teacher')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_teacher', ParseIntPipe) id_teacher: number,
  ) {
    return this.teacherService.delete(id_institution, id_teacher);
  }
}
