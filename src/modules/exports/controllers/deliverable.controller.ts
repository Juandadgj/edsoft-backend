import { Body, Controller, Post, Query, UseGuards } from '@nestjs/common';
import { DeliverableService } from '../services/deliverable.service';
import { GenerateDeliverableDto } from '../dto/deliverable.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import {
  CertifiedStudentDictionary,
  CertifiedStudentReportDto,
  GenerateReportAreaDto,
  ReportDictionary,
} from '../dto/deliverable.dto';
import report from 'src/templates/spreadsheet/report';

@Controller('reports/deliverables')
@UseGuards(AuthGuard)
export class DeliverableController {
  constructor(private readonly deliverableService: DeliverableService) {}

  @Post('configurable-reports')
  async getConfigurableReports(
    @Query() generateReportAreaDto: GenerateReportAreaDto,
    @Body() dto: ReportDictionary,
  ): Promise<any> {
    const html = await this.deliverableService.getConfigurableReports(generateReportAreaDto, dto);
    return { report_content: html };
  }

  @Post('general-grade')
  async getGeneralGrade(@Query() dto: GenerateDeliverableDto): Promise<any> {
    const html = await this.deliverableService.getGeneralGrade(dto);
    return { report_content: html };
  }

  @Post('grade-with-achievements')
  async getGradeWithAchievements(
    @Query() dto: GenerateDeliverableDto,
  ): Promise<any> {
    const html = await this.deliverableService.getGradeWithAchievements(dto);
    return { report_content: html };
  }

  @Post('grade-with-indicators')
  async getGradeWithIndicators(
    @Query() dto: GenerateDeliverableDto,
  ): Promise<any> {
    const html = await this.deliverableService.getGradeWithIndicators(dto);
    return { report_content: html };
  }

  @Post('numeric-alphabetic-all')
  async getNumericAlphabeticAll(
    @Query() dto: GenerateDeliverableDto,
  ): Promise<any> {
    const html = await this.deliverableService.getNumericAlphabeticAll(dto);
    return { report_content: html };
  }

  @Post('numeric-alphabetic-marked')
  async getNumericAlphabeticMarked(
    @Query() dto: GenerateDeliverableDto,
  ): Promise<any> {
    const html = await this.deliverableService.getNumericAlphabeticMarked(dto);
    return { report_content: html };
  }

  @Post('student-certificate')
  async getStudentCertificate(
    @Query() certifiedStudentReportDto: CertifiedStudentReportDto,
    @Body() dto: CertifiedStudentDictionary,
  ): Promise<any> {
    const html = await this.deliverableService.getStudentCertificate(
      certifiedStudentReportDto,
      dto,
    );
    return { report_content: html };
  }

  @Post('student-id-card')
  async getStudentIdCard(@Query() dto: GenerateDeliverableDto): Promise<any> {
    const html = await this.deliverableService.getStudentIdCard(dto);
    return { report_content: html };
  }
}
