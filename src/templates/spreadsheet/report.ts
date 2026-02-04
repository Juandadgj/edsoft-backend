import { ReportDictionary } from 'src/modules/exports/dto/deliverable.dto';

function report(group, data, report_options: ReportDictionary) {
  return `
  <html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin:0;
        font-family: 'Arial', sans-serif;
        font-size: 10px;
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
        width: 650px;
        margin-left: auto;
        margin-right: auto;
      }
      th,
      td {
        border: 1px solid black;
        padding: 6px;
        text-align: center;
        font-size: 10px;
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
      p {
        margin-top: 0px;
        margin-bottom: 0px;
      }
      .table_header tr, .table_header td {
        border: none;
      }
    </style>
  </head>
  <body>
    <div>
      <header
        style="display: flex; justify-content: center; align-items: center"
      >
        <div>
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-logo-design-template-b3bfdceb55d1cbc48f1ce50fd4e1ef24_screen.jpg?ts=1629941736"
            alt="Header Image"
          />
        </div>
        <h1>Institucion Educativa San Marcos Mañana</h1>
      </header>
      <table border="0" cellpadding="3" cellspacing="0"  style="border: none;">
        <tbody class="table_header">
          <tr>
            <td>Est: <b>${data.student}</b></td>
            <td>Grado: <b>${group.level}-${group.sublevel} ${
              group.working_time
            }</b></td>
            <td>Per: <b>1 año 2023</b></td>
            <td>Usuario: <b>e2651658465164</b></td>
          </tr>
        </tbody>
      </table>
      <table border="0" cellpadding="3" cellspacing="0" style="border: none;">
        <tbody class="table_header">
          <tr>
          ${
            report_options.average_general
              ? `
          <td>
          <p>Promedio: <b>${data.average}</b></p>
          </td>
          `
              : ``
          }
          ${
            report_options.average_group
              ? `
          <td>
          <p>Promedio del curso: <b>5</b></p>
          </td>
          `
              : ``
          }
          ${
            report_options.position
              ? `
          <td>
          <p>Puesto en el curso: <b>${data.position}</b></p>
          </td>
          `
              : ``
          }
          <td>Puesto en el curso: <b>13</b></td>
          </tr>
        <tbody>
      </table>
      <div></div>
      <br />
      ${data.courses.map(
        (course) => `
      <table style="margin-top: 10px; margin-bottom: 10px">
        <tr>
          <td>Area: <b>Ciencias Naturales y educacion Ambiental</b></td>
          ${
            report_options.average_area
              ? `
          <td>Promedio: <b>Alto (4)</b></td>
          `
              : ``
          }
        </tr>
      </table>
      <table>
        <tr>
          <th>
            Asig:
            <b> ${course.name}</b>
          </th>
          ${
            report_options.professor_course
              ? `
          <td>
            Doc: <b>${course.teacher}</b>
          </td>
          `
              : ``
          }
          <td width="20%">CG: <b>Alto ( 4 )</b></td>
          ${
            report_options.absences
              ? `
          <td width="15%">Fallas: <b>0</b></td>
          `
              : ``
          } ${
            report_options.hour
              ? `
          <td width="10%">I.H: <b>${course.hour}</b></td>
          `
              : ``
          }
        </tr>
      </table>
      <div
        style="
          margin: 2px;
          width: 650px;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <p>1.AAAAAAAA</p>
        </div>
      </div>
      <table>
        ${
          report_options.all_qualifications
            ? `
        <tr>
          <td><b>Todos los periodos</b></td>
          <td>Per.1 : <b>${course.score1 ? course.score1 : '-'}</b></td>
          <td>Per.2 : <b>${course.score2 ? course.score2 : '-'}</b></td>
          <td>Per.3 : <b>${course.score3 ? course.score3 : '-'}</b></td>
          <td>Per.4 : <b>${course.score4 ? course.score4 : '-'}</b></td>
          <td>Promedio : <b>4</b></td>
        </tr>
        `
            : `
        <tr>
          ${
            report_options.qualification_per1
              ? `
          <td>Per.1 : <b>${course.score1 ? course.score1 : '-'}</b></td>
          `
              : ``
          } ${
            report_options.qualification_per2
              ? `
          <td>Per.2 : <b>${course.score2 ? course.score2 : '-'}</b></td>
          `
              : ``
          } ${
            report_options.qualification_per3
              ? `
          <td>Per.3 : <b>${course.score3 ? course.score3 : '-'}</b></td>
          `
              : ``
          } ${
            report_options.qualification_per4
              ? `
          <td>Per.4 : <b>${course.score4 ? course.score4 : '-'}</b></td>
          `
              : ``
          } ${
            report_options.average_per
              ? `
          <td>Promedio : <b>4</b></td>
          `
              : ``
          }
        </tr>
        `
        }
      </table>
      `,
      )}
      <div
        style="
          width: 650px;
          margin-top: 40px;
          margin-right: auto;
          margin-left: auto;
        "
      >
        <p><b>Observacion</b></p>
        <hr />
        <hr style="margin-top: 40px" />
      </div>
      <div
        style="
          width: 650px;
          display: flex;
          justify-content: center;
          margin-top: 40px;
          margin-left: auto;
          margin-right: auto;
        "
      >
        ${
          report_options.showRectorSignature
            ? `
        <div style="width: 33%; text-align: center; margin-inline: 10px">
          <hr />
          <p><b>Hoyos Yepes Olga Ines</b></p>
          <p>Rector</p>
        </div>
        `
            : ``
        } ${
          report_options.showSecretarySignature
            ? `
        <div style="width: 33%; text-align: center; margin-inline: 10px">
          <hr />
          <p><b>Hoyos Yepes Olga Ines</b></p>
          <p>Secretario(a)</p>
        </div>
        `
            : ``
        } ${
          report_options.showGroupProfessorSignature
            ? `
        <div style="width: 33%; text-align: center; margin-inline: 10px">
          <hr />
          <p><b>Hoyos Yepes Olga Ines</b></p>
          <p>Profesor de grupo</p>
        </div>
        `
            : ``
        }
      </div>
    </div>
  </body>
</html>

`;
}

export default report;
