import {
  Controller,
  Get,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ReportService } from './report.service';
import {
  GenerateStudentsListUndeterminatedDto,
  GenerateStudentsListDeterminatedDto,
  GenerateAchievementsAndIndicatorsDto,
  GenerateReportAreaDto,
  GenerateStudentEnrollmentReportDto,
  CertifiedStudentReportDto,
} from './dto/report.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('students-list-undeterminated')
  generateStudentsListUndeterminated(
    @InstitutionId() id_institution: string,
    @Query() generateStudentsListUndeterminatedDto: GenerateStudentsListUndeterminatedDto,
  ) {
    return this.reportService.generateStudentsListUndeterminated(
      generateStudentsListUndeterminatedDto,
    );
  }

  @Get('students-list-determinated')
  generateStudentsListDeterminated(
    @InstitutionId() id_institution: string,
    @Query() generateStudentsListDeterminatedDto: GenerateStudentsListDeterminatedDto,
  ) {
    return this.reportService.generateStudentsListDeterminated(
      generateStudentsListDeterminatedDto,
    );
  }

  @Get('achievements-and-indicators')
  generateAchievementsAndIndicators(
    @InstitutionId() id_institution: string,
    @Query() generateAchievementsAndIndicatorsDto: GenerateAchievementsAndIndicatorsDto,
  ) {
    return this.reportService.generateAchievementsAndIndicators(
      generateAchievementsAndIndicatorsDto,
    );
  }

  @Get('area')
  generateReportArea(
    @InstitutionId() id_institution: string,
    @Query() generateReportAreaDto: GenerateReportAreaDto,
  ) {
    return this.reportService.generateReportArea(generateReportAreaDto);
  }

  @Get('student-enrollment-i')
  generateStudentEnrollmentReportI(
    @InstitutionId() id_institution: string,
    @Query() generateStudentEnrollmentReportDto: GenerateStudentEnrollmentReportDto,
  ) {
    return this.reportService.generateStudentEnrollmentReportI(
      generateStudentEnrollmentReportDto,
    );
  }

  @Get('student-enrollment-ii')
  generateStudentEnrollmentReportII(
    @InstitutionId() id_institution: string,
    @Query() generateStudentEnrollmentReportDto: GenerateStudentEnrollmentReportDto,
  ) {
    return this.reportService.generateStudentEnrollmentReportII(
      generateStudentEnrollmentReportDto,
    );
  }

  @Get('certified-student')
  generateCertifiedStudentReport(
    @InstitutionId() id_institution: string,
    @Query() certifiedStudentReportDto: CertifiedStudentReportDto,
  ) {
    return this.reportService.generateCertifiedStudentReport(
      certifiedStudentReportDto,
    );
  }
}
