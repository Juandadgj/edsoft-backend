import {
  GenerateStudentsListUndeterminatedInput,
  GenerateStudentsListDeterminatedInput,
  GenerateAchievementsAndIndicators,
  GenerateReportAreaInput,
} from 'src/shared/interfaces/graphql';
import { ReportService } from './report.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver('Report')
export class ReportResolver {
  constructor(private readonly reportsService: ReportService) {}

  @Query('generateStudentsListUndeterminated')
  async generateStudentsListUndeterminated(
    @Args('generateStudentsListUndeterminatedInput')
    generateStudentsListUndeterminatedInput: GenerateStudentsListUndeterminatedInput,
  ) {
    const pdfBuffer =
      await this.reportsService.generateStudentsListUndeterminated(
        generateStudentsListUndeterminatedInput,
      );

    // Convert the PDF buffer to a base64-encoded string
    return { report_content: pdfBuffer };
  }

  @Query('generateStudentsListDeterminated')
  async generateStudentsListDeterminated(
    @Args('generateStudentsListDeterminatedInput')
    generateStudentsListDeterminatedInput: GenerateStudentsListDeterminatedInput,
  ) {
    const pdfBuffer =
      await this.reportsService.generateStudentsListDeterminated(
        generateStudentsListDeterminatedInput,
      );
    // Convert the PDF buffer to a base64-encoded string
    // return base64Pdf;
    return { report_content: pdfBuffer };
  }

  @Query('generateAchievementsAndIndicators')
  async generateAchievementsAndIndicators(
    @Args('generateAchievementsAndIndicators')
    generateAchievementsAndIndicators: GenerateAchievementsAndIndicators,
  ) {

    const pdfBuffer =
      await this.reportsService.generateAchievementsAndIndicators(
        generateAchievementsAndIndicators,
      );

    // Convert the PDF buffer to a base64-encoded string

    // return base64Pdf;
    return { report_content: pdfBuffer };
  }

  @Query('generateReportArea')
  async generateReportArea(
    @Args('generateReportAreaInput')
    generateReportAreaInput: GenerateReportAreaInput,
  ) {
    const pdfBuffer = await this.reportsService.generateReportArea(
      generateReportAreaInput,
    );
    const base64Pdf = pdfBuffer;
    return { report_content: base64Pdf };
  }
}
