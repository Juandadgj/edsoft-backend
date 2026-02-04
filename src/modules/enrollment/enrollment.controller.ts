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
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { FilterEnrollmentDto } from './dto/filter-enrollment.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { StudentEnrollmentReportDto } from '../exports/dto/deliverable.dto';

@UseGuards(AuthGuard)
@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createEnrollmentDto: CreateEnrollmentDto,
  ) {
    return this.enrollmentService.create(id_institution, createEnrollmentDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
    @Query() filterEnrollmentDto: FilterEnrollmentDto,
  ) {
    return this.enrollmentService.findAll(id_institution, filterEnrollmentDto);
  }

  @Get(':id_enrollment')
  findOne(
    @InstitutionId() id_institution: string,
    @Param('id_enrollment', ParseIntPipe) id_enrollment: number,
  ) {
    return this.enrollmentService.findOne(id_institution, id_enrollment);
  }

  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateEnrollmentDto: UpdateEnrollmentDto,
  ) {
    return this.enrollmentService.update(id_institution, updateEnrollmentDto);
  }

  @Delete(':id_enrollment')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_enrollment', ParseIntPipe) id_enrollment: number,
  ) {
    return this.enrollmentService.delete(id_institution, id_enrollment);
  }

  @Get('student-enrollment-i')
  StudentEnrollmentReportI(
    @InstitutionId() id_institution: string,
    @Query()
    StudentEnrollmentReportDto: StudentEnrollmentReportDto,
  ) {
    return this.enrollmentService.StudentEnrollmentReportI(
      StudentEnrollmentReportDto,
    );
  }

  @Get('student-enrollment-ii')
  StudentEnrollmentReportII(
    @InstitutionId() id_institution: string,
    @Query()
    StudentEnrollmentReportDto: StudentEnrollmentReportDto,
  ) {
    return this.enrollmentService.StudentEnrollmentReportII(
      StudentEnrollmentReportDto,
    );
  }
}
