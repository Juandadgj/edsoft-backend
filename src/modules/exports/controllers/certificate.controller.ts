import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CertificateService } from '../services/certificate.service';
import {
  CertifiedStudentDictionary,
  CertifiedStudentReportDto,
  StudentEnrollmentReportDto,
} from '../dto/certificate.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('exports/certificates')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Get('student-enrollment-i')
  StudentEnrollmentReportI(
    @InstitutionId() id_institution: string,
    @Query()
    StudentEnrollmentReportDto: StudentEnrollmentReportDto,
  ) {
    return this.certificateService.StudentEnrollmentReportI(
      StudentEnrollmentReportDto,
    );
  }

  @Get('student-enrollment-ii')
  StudentEnrollmentReportII(
    @InstitutionId() id_institution: string,
    @Query()
    StudentEnrollmentReportDto: StudentEnrollmentReportDto,
  ) {
    return this.certificateService.StudentEnrollmentReportII(
      StudentEnrollmentReportDto,
    );
  }

  @Post('certified-student')
  CertifiedStudentReport(
    @InstitutionId() id_institution: string,
    @Query() certifiedStudentReportDto: CertifiedStudentReportDto,
    @Body() certifiedStudentReportBodyDto?: CertifiedStudentDictionary,
  ) {
    return this.certificateService.CertifiedStudentReport(
      certifiedStudentReportDto,
      certifiedStudentReportBodyDto,
    );
  }
}