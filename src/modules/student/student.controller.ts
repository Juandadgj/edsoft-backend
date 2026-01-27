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
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    const { id_group, ...studentData } = createStudentDto;
    return this.studentService.create(id_institution, studentData, id_group);
  }

  @Get('group/:id_group')
  findByGroup(
    @InstitutionId() id_institution: string,
    @Param('id_group', ParseIntPipe) id_group: number,
  ) {
    return this.studentService.findByGroup(id_institution, id_group);
  }

  @Get()
  find(
    @InstitutionId() id_institution: string,
    @Query() filterStudentDto: FilterStudentDto,
  ) {
    return this.studentService.find(id_institution, filterStudentDto);
  }

  @Get(':id_student')
  findOne(
    @InstitutionId() id_institution: string,
    @Param('id_student', ParseIntPipe) id_student: number,
  ) {
    return this.studentService.findOne(id_institution, id_student);
  }

  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.update(id_institution, updateStudentDto);
  }

  @Delete(':id_student')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_student', ParseIntPipe) id_student: number,
  ) {
    return this.studentService.delete(id_institution, id_student);
  }
}
