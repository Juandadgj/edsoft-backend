import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class ReportService {

  async generateReport(htmlContent: string) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.setContent(htmlContent);

      // Generate PDF
      const pdf = await page.pdf({
        path: 'mypdf',
        format: 'A4',
        // printBackground: true
      });

      await browser.close();

      return pdf;
    } catch (error) {
      throw error;
    }
  }
}
