import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
// import puppeteer2 from '../assets/image.webp';
import clients from 'src/config/clientsDB';
import { GenerateStudentsListInput } from 'src/shared/interfaces/graphql';

@Injectable()
export class ReportService {

  async generateReport(generateStudentsListInput: GenerateStudentsListInput) {
    try {
      const { id_group } = generateStudentsListInput;
      console.log('ID: ', id_group);
      const students = await clients['1059'].enrollment.findMany({
        where: {
          id_group
        },
        include: {
          student: true
        }
      });
      // console.log(students);

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      const htmlContent = `
      <html lang="es>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              body {
                  margin: 0;
                  padding: 10px;
                  font-family: 'Arial', sans-serif;
                }
              header {
                text-align: center;
              }
              header div {
                display: flex;
                justify-content: flex-start;
              }
              header div img {
                  display: block;
                  margin: 0 auto;
                  width: 100px;
                  height: 100px;
              }
              table {
                border-collapse: collapse;
                width: 100%;
              }
              th, td {
                border: 1px solid black;
                padding: 6px;
                text-align: center;
                font-size: 14px;
              }
              th {
                background-color: #f2f2f2;
              }
              .name_td {
                text-align: left;
              }
              .name_th {
                padding: 12px;
              }
          </style>
        </head>
          <body>
            <header>
              <div>
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-logo-design-template-b3bfdceb55d1cbc48f1ce50fd4e1ef24_screen.jpg?ts=1629941736" alt="Header Image"/>
              </div>
              <h1>Institucion Educativa San Marcos Mañana</h1>
              <h3>Quinto 1 Mañana año 2023</h3>
            </header>
            <h4>Nombre del docente: ______________________________________</h4>
            <h4>Nombre de la asignatura: _________________________________</h4>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th colspan="4">Apellido y Nombre</th>
                  <th>Per. 1</th>
                  <th>Per. 2</th>
                  <th>Per. 3</th>
                  <th>Per. 4</th>
                  <th>Per. F</th>
                </tr>
              </thead>
              <tbody>
                ${students.map(({ student }, i) => {
        console.log(student.name);
        return (
          `<tr>
                        <td>${i}</td>
                        <td colspan="4" class="name_td">${student.last_name} ${student.name}</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>`
        )
      })
        }
              </tbody>
            </table>
          </body>  
        </html>`;
      // <img src="../assets/image.webp" alt="Header Image"/>
      await page.setContent(htmlContent);
      // await page.emulateMediaType("screen");

      // Generate PDF
      const pdf = await page.pdf({
        path: 'mypdf',
        format: 'A4',
        margin: { left: "0.5cm", top: "1cm", right: "0.5cm", bottom: "2cm" },
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
}
