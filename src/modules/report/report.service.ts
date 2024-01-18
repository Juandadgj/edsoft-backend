import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
// import puppeteer2 from '../assets/image.webp';
import clients from 'src/config/clientsDB';
import {
  GenerateReportAreaInput,
  GenerateStudentsListInput,
  GenerateStudentsListInput2,
} from 'src/shared/interfaces/graphql';
import report from 'src/templates/report';
import report1 from 'src/templates/report1';
import report2 from 'src/templates/report2';

@Injectable()
export class ReportService {
  async generateReport(generateStudentsListInput: GenerateStudentsListInput) {
    try {
      const { id_group } = generateStudentsListInput;
      console.log('ID: ', id_group);
      const students = await clients['1059'].enrollment.findMany({
        where: {
          id_group,
        },
        include: {
          student: true,
        },
      });
      // console.log(students);

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      const htmlContent = report1(students);
      // <img src="../assets/image.webp" alt="Header Image"/>
      await page.setContent(htmlContent);
      // await page.emulateMediaType("screen");

      // Generate PDF
      const pdf = await page.pdf({
        path: 'mypdf',
        format: 'A4',
        margin: { left: '0.5cm', top: '1cm', right: '0.5cm', bottom: '2cm' },
        // headerTemplate: `<h1 style="color: black">Hello, this is your PDF content!</h1>`,
        // footerTemplate: `<div><span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
        // printBackground: true
      });

      await browser.close();

      return pdf;
    } catch (error) {
      throw error;
    }
  }

  async generateReport2(
    generateStudentsListInput2: GenerateStudentsListInput2,
  ) {
    try {
      const { id_group, id_course, period } = generateStudentsListInput2;
      console.log('ID: ', id_group, id_course, period);
      const students = await clients['1059'].enrollment.findMany({
        where: {
          id_group,
        },
        include: {
          student: true,
        },
      });

      const achievements = await clients['1059'].achievement.findMany({
        where: {
          id_course,
          period,
        },
      });

      const { teacher, area } = await clients['1059'].course
        .findMany({
          where: {
            id_course,
          },
          include: {
            teacher: true,
            area: true,
          },
        })
        .then((result) => result[0]);

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      const htmlContent = report2(students, achievements, teacher, area);
      await page.setContent(htmlContent);
      // await page.emulateMediaType("screen");

      // Generate PDF
      const pdf = await page.pdf({
        path: 'mypdf',
        format: 'A4',
        margin: { left: '0.5cm', top: '1cm', right: '0.5cm', bottom: '2cm' },
        // headerTemplate: `<h1 style="color: black">Hello, this is your PDF content!</h1>`,
        // footerTemplate: `<div><span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
        // printBackground: true
      });

      await browser.close();

      return pdf;
    } catch (error) {
      throw error;
    }
  }
  async generateReportArea(generateReportAreaInput: GenerateReportAreaInput) {
    const { id_group, id_student, report_options } = generateReportAreaInput;
    console.log(id_group, id_student);
    try {
      const { student } = await clients['1059'].enrollment.findFirst({
        where: {
          // id_group: 253,
          // id_student: 4186,
          id_group: id_group,
          id_student: id_student,
        },
        include: {
          student: true,
        },
      });
      const group = await clients['1059'].group.findUnique({
        where: { id_group: id_group },
      });
      const areas = await clients['1059'].area.findMany();
      const courses = await clients['1059'].course.findMany({
        where: {
          id_group: id_group,
        },
        include: {
          teacher: true,
        },
      });

      const htmlContent = report(
        student,
        group,
        areas,
        courses,
        report_options,
      );

      return htmlContent;
    } catch (error) {
      throw error;
    }
  }
}
