import { ReportService } from './report.service';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Report')
export class ReportResolver {
  constructor(private readonly reportsService: ReportService) { }

  @Query('generateReport')
  async generateReport() {
    // Fetch data or generate HTML content as needed
    const htmlContent = `<html><body><h1>Hello, this is your PDF content!</h1></body></html>`;

    // Generate PDF using the PdfService
    const pdfBuffer = await this.reportsService.generateReport(htmlContent);

    // Convert the PDF buffer to a base64-encoded string
    // const base64Pdf = pdfBuffer.toString('base64');
    console.log(pdfBuffer);

    // return base64Pdf;
    return pdfBuffer;
  }
}
