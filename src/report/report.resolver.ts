import { GenerateStudentsListInput } from 'src/shared/interfaces/graphql';
import { ReportService } from './report.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver('Report')
export class ReportResolver {
  constructor(private readonly reportsService: ReportService) { }

  @Query('generateReport')
  async generateReport(
    @Args('generateStudentsListInput') generateStudentsListInput: GenerateStudentsListInput,
  ) {
    // Fetch data or generate HTML content as needed
    // Generate PDF using the PdfService
    console.log('ID FROM RESOLVER: ', generateStudentsListInput);

    const pdfBuffer = await this.reportsService.generateReport(generateStudentsListInput);

    // Convert the PDF buffer to a base64-encoded string
    const base64Pdf = pdfBuffer.toString('base64');
    // console.log(pdfBuffer);
    // console.log(base64Pdf);

    // return base64Pdf;
    return { report_content: base64Pdf };
  }
}
