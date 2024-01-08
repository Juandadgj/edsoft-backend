import {
  GenerateStudentsListInput,
  GenerateStudentsListInput2,
  GenerateReportAreaInput,
} from 'src/shared/interfaces/graphql';
import { ReportService } from './report.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver('Report')
export class ReportResolver {
  constructor(private readonly reportsService: ReportService) {}

  @Query('generateReport')
  async generateReport(
    @Args('generateStudentsListInput')
    generateStudentsListInput: GenerateStudentsListInput,
  ) {
    const pdfBuffer = await this.reportsService.generateReport(
      generateStudentsListInput,
    );

    // Convert the PDF buffer to a base64-encoded string
    const base64Pdf = pdfBuffer.toString('base64');
    return { report_content: base64Pdf };
  }

  @Query('generateReport2')
  async generateReport2(
    @Args('generateStudentsListInput2')
    generateStudentsListInput2: GenerateStudentsListInput2,
  ) {
    console.log('ID FROM RESOLVER: ', generateStudentsListInput2);

    const pdfBuffer = await this.reportsService.generateReport2(
      generateStudentsListInput2,
    );

    // Convert the PDF buffer to a base64-encoded string
    const base64Pdf = pdfBuffer.toString('base64');

    // return base64Pdf;
    return { report_content: base64Pdf };
  }

  @Query('generateReportArea')
  async generateReportArea(
    @Args('generateReportAreaInput')
    generateReportAreaInput: GenerateReportAreaInput,
  ) {
    const pdfBuffer = await this.reportsService.generateReportArea(
      generateReportAreaInput,
    );
    const base64Pdf = pdfBuffer.toString('base64');
    return { report_content: base64Pdf };
  }
}
