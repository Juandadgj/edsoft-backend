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
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FilterCourseDto } from './dto/filter-course.dto';
import { UpdateDefinitivesDto, FilterDefinitivesDto } from './dto/definitives.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createCourseDto: CreateCourseDto,
  ) {
    return this.courseService.create(id_institution, createCourseDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
    @Query() filterCourseDto: FilterCourseDto,
  ) {
    return this.courseService.findAll(id_institution, filterCourseDto);
  }

  @Get('definitives')
  findDefinitives(
    @InstitutionId() id_institution: string,
    @Query() filterDefinitivesDto: FilterDefinitivesDto,
  ) {
    return this.courseService.findDefinitives(id_institution, filterDefinitivesDto);
  }

  @Get(':id_course')
  findOne(
    @InstitutionId() id_institution: string,
    @Param('id_course', ParseIntPipe) id_course: number,
  ) {
    return this.courseService.findOne(id_institution, id_course);
  }

  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseService.update(id_institution, updateCourseDto);
  }

  @Put('definitives')
  updateDefinitives(
    @InstitutionId() id_institution: string,
    @Body() updateDefinitivesDto: UpdateDefinitivesDto,
  ) {
    return this.courseService.updateDefinitives(id_institution, updateDefinitivesDto);
  }

  @Delete(':id_course')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_course', ParseIntPipe) id_course: number,
  ) {
    return this.courseService.delete(id_institution, id_course);
  }
}
