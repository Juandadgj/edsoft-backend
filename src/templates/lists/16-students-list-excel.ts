import { institution } from '@prisma/client';

export function studentsListExcelTemplate(
  data: any[],
  institution: institution,
): string {
  return `<html>
  <head>
    <style>
      body {
        transition: opacity ease-in 0.2s;
      }
      body[unresolved] {
        opacity: 0;
        display: block;
        overflow: hidden;
        position: relative;
      }
    </style>
    <title>Lista de Estudiantes</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <style>
      H1.SaltoDePagina {
        page-break-after: always;
      }

      @media print {
        body {
          margin: 0;
          padding-bottom: 60px;
        }

        .footer-print {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
          font-size: 12px;
          border-top: 1px solid #000;
          padding: 10px 0;
          background-color: white;
          page-break-before: always;
        }
      }

      @media screen {
        .footer-print {
          display: none;
        }
      }
    </style>

    <style type="text/css">
      body,td,th {
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 9px;
      }
      h1 {
        font-size: 10px;
      }
      h2 {
        font-size: 11px;
      }
      .pie {
        font-size: 10px;
        font-weight:bold;
      }
      .cabeza {
        font-size: 12px;
      }
    </style>
  </head>
  <body bottommargin="0" leftmargin="0" rightmargin="0" topmargin="0">
    <table align="center" width="650" border="0">
      <tbody>
        <tr>
          <td valign="top">
            <table width="100%">
              <tbody>
                <tr height="80" border="0">
                  <td align="center" width="">
                    <font size="4">${institution.name}</font><br />
                    <center>
                      Lista de Estudiantes
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
            <br /><br />
            <table width="100%" border="1" cellpadding="3" cellspacing="0">
              <tbody>
                <tr>
                  <td><center><b>#</b></center></td>
                  <td><center><b>Nombre</b></center></td>
                  <td><center><b>Identificación</b></center></td>
                  <td><center><b>Tipo ID</b></center></td>
                  <td><center><b>Curso</b></center></td>
                  <td><center><b>Email</b></center></td>
                </tr>
                ${data
                  .map(
                    (student, index) => `
                  <tr>
                    <td><center>${index + 1}</center></td>
                    <td>${student.name} ${student.last_name}</td>
                    <td>${student.identification}</td>
                    <td><center>${student.type_id}</center></td>
                    <td>${student.course?.name}</td>
                    <td>${student.email}</td>
                  </tr>
                `,
                  )
                  .join('')}
              </tbody>
            </table>
            <br />
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}
