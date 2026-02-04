import { institution, student } from '@prisma/client';
const html = String.raw;


export function generalGradeTemplate(
  student: student,
  definitives: any[],
  institution: institution,
) {
  return html`

    <html>

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

    

        <title>Imprimir</title>

    

        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

    

        <style>

          H1.SaltoDePagina {

            page-break-after: always;

          }

        </style>

    

        <style type="text/css">

          body,

          td,

          th {

            font-family: Verdana, Arial, Helvetica, sans-serif;

    

            font-size: 10px;

          }

    

          h1 {

            font-size: 10px;

          }

    

          h2 {

            font-size: 11px;

          }

    

          .pie {

            font-size: 10px;

    

            font-weight: bold;

          }

    

          .cabeza {

            font-size: 12px;

          }

        </style>

      </head>

    

      <body bottommargin="0" leftmargin="0" rightmargin="0" topmargin="0">

        <table align="center" width="650">

          <tbody>

            <tr>

              <td valign="top">

                <table width="100%">

                  <tbody>

                    <tr height="80">

                      <td align="center" valign="middle">

                        <img

                          src="../../fotos/1002/logo.jpg"

                          width="70"

                          height="80"

                        />

                      </td>

    

                      <td align="center" width="90%">

                        <font size="4">${institution.name}</font><br />

    

                        <center>

                          Programa para el Desarrollo Integral de Niños y Niñas<br />

    

                          CRA 24 Nº 20 - 65 Tel 2954011 San Marcos- Sucre<br />

    

                          Email: gimnsanjorge@hotmail.com<br />

    

                          <br />

                        </center>

                      </td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Est: <strong>${student.last_name} ${ student.name }</strong>

                      </td>

    

                      <td>Grado: <strong>Noveno A Mañana</strong></td>

    

                      <td>Per: <strong>1 año 2022</strong></td>

    

                      <td>Usuario: <strong>e1104417395</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                ${definitives.map((d) => renderSubjectTable(d))}

    

                <br />

    

                <b>Observación</b>

    

                <hr />

    

                <br />

    

                <hr />

    

                <br />

    

                <br />

    

                <table width="100%" border="0" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td align="center" width="35%">

                        <hr />

    

                        <b>Glenis Pernett Martínez</b><br />Rector(a)

                      </td>

    

                      <td align="center" width="30%"></td>

    

                      <td align="center" width="35%">

                        <hr />

    

                        <b>Díaz Soto Cristian Camilo</b><br />Profesor de grupo

                      </td>

                    </tr>

                  </tbody>

                </table>

              </td>

            </tr>

          </tbody>

        </table>

      </body>

    </html>

  `;
}

function renderSubjectTable(definitive: any) {
  return `
    <table width="100%" border="1" cellpadding="3" cellspacing="0">
      <tbody>
        <tr>
          <td width="50%">Asignatura: <strong>${definitive.course.name}</strong></td>
          <td width="50%">Docente: <strong>${definitive.course.teacher.name} ${definitive.course.teacher.last_name}</strong></td>
        </tr>
        <tr>
          <td>Calificacion general: <strong>( ${definitive.score1} )</strong></td>
          <td>Inasistencias : <strong></strong></td>
        </tr>
      </tbody>
    </table>
    <br />
  `;
}
