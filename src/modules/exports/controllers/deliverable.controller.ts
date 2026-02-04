import { Controller, Get, Body, Query, UseGuards, Post } from '@nestjs/common';
import { DeliverableService } from '../services/deliverable.service';
import {
  ReportDictionary,
} from '../dto/deliverable.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { CertifiedStudentDictionary, CertifiedStudentReportDto } from '../dto/deliverable.dto';

@UseGuards(AuthGuard)
@Controller('exports/deliverables')
export class DeliverableController {
  constructor(private readonly deliverableService: DeliverableService) {}

  @Get('student-definitives')
  getStudentDefinitives(
    @InstitutionId() id_institution: string,
    @Query('id_student') id_student: number,
    @Query('id_group') id_group: number,
  ) {
    return this.deliverableService.getStudentDefinitives(
      id_student,
      id_group,
    );
  }

  @Get('group-definitives')
  getGroupDefinitives(
    @InstitutionId() id_institution: string,
    @Query('id_group') id_group: number,
  ) {
    return this.deliverableService.getGroupDefinitives(id_group);
  }

  @Post('certified-student')
  CertifiedStudentReport(
    @InstitutionId() id_institution: string,
    @Query() certifiedStudentReportDto: CertifiedStudentReportDto,
    @Body() certifiedStudentReportBodyDto?: CertifiedStudentDictionary,
  ) {
    return this.deliverableService.getStudentCertificate(
      certifiedStudentReportDto,
      certifiedStudentReportBodyDto,
    );
  }
}
