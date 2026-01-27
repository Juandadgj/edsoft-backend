import { CertifiedStudentDictionary } from 'src/modules/report/dto/report.dto';

export function certifiedStudentTemplate(
  student,
  report_options: CertifiedStudentDictionary,
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
    <title>Imprimir Certificado</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <style>
      H1.SaltoDePagina {
        page-break-after: always;
      }

      @media print {
        body {
          margin: 0;
          padding-bottom: 60px; /* Deja espacio para el footer */
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
          page-break-before: always; /* Asegura que el footer se coloque al final */
        }
      }

      /* Estilos para la pantalla (no visible en impresión) */
      @media screen {
        .footer-print {
          display: none;
        }
      }
    </style>

    <style type="text/css">
      <!--
      body,td,th {
      	font-family: Verdana, Arial, Helvetica, sans-serif;

              	font-size: 10px;

      }
      h1 {
      	font-size: 10px;
      	}

      h2 {
      font-size: 11px;
      }

      .pie
      {
      	font-size: 10px;
      	font-weight:bold;

      }

      .cabeza
      {
      	font-size: 12px;

      }


      -->
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
                  <td align="center" valign="middle">
                    <img
                      src="../../fotos/1002/logo.jpg"
                      width="70"
                      height="80"
                    />
                  </td>
                  <td align="center" width="">
                    <font size="4">
                      INSTITUCIÓN EDUCATIVA GIMNASIO DEL SAN JORGE </font
                    ><br />
                    <center>
                      Programa para el Desarrollo Integral de Niños y Niñas
                      <br />
                      CRA 24 Nº 20 - 65 Tel 2954011 San Marcos- Sucre
                      <br />Email: gimnsanjorge@hotmail.com
                      <br />
                      <br />
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
            <br /><br />
            <center>C E R T I F I C A</center>
            <br /><br />
            <div align="justify">
              Que el estudiante VERGARA VERGARA ALEXANDRA Cursó y
              <b>aprobó</b> en este plantel el grado Quinto de educación básica
              primaria , durante el año lectivo 2022 respectivamente, con el
              resultado académico que se relaciona a continuación: <br /><br />
              <table width="100%" border="1" cellpadding="3" cellspacing="0">
                <tbody>
                  <tr>
                    <td>
                      <center><b>Asignatura</b></center>
                    </td>
                    ${
                      report_options.qualification_per1 &&
                      `<td>
                      Per.1
                      </td>`
                    }
                      ${
                        report_options.qualification_per2 &&
                        `<td>
                      Per.2
                      </td>`
                      }
                      ${
                        report_options.qualification_per3 &&
                        `<td>
                      Per.3
                      </td>`
                      }
                      ${
                        report_options.qualification_per4 &&
                        `<td>
                      Per.4
                      </td>`
                      }
                  </tr>
                  <tr>
                    <td>Matemáticas</td>
                    <td><center>&nbsp; ( 4.9 )</center></td>
                  </tr>
                  <tr>
                    <td>Geometrìa</td>
                    <td><center>&nbsp; ( 4.9 )</center></td>
                  </tr>
                  <tr>
                    <td>Estadística</td>
                    <td><center>&nbsp; ( 5 )</center></td>
                  </tr>
                  <tr>
                    <td>Lengua Castellana</td>
                    <td><center>&nbsp; ( 4.8 )</center></td>
                  </tr>
                  <tr>
                    <td>Comprensión Lectora</td>
                    <td><center>&nbsp; ( 4.8 )</center></td>
                  </tr>
                  <tr>
                    <td>Ortografía Y Caligrafìa</td>
                    <td><center>&nbsp; ( 4.8 )</center></td>
                  </tr>
                  <tr>
                    <td>Inglès</td>
                    <td><center>&nbsp; ( 5 )</center></td>
                  </tr>
                  <tr>
                    <td>Ciencias Sociales</td>
                    <td><center>&nbsp; ( 5 )</center></td>
                  </tr>
                  <tr>
                    <td>Ciencias Naturales Y Edu. Ambiental</td>
                    <td><center>&nbsp; ( 4.9 )</center></td>
                  </tr>
                  <tr>
                    <td>Tecnologìa E Informàtica</td>
                    <td><center>&nbsp; ( 5 )</center></td>
                  </tr>
                  <tr>
                    <td>Educaciòn Ètica Y Valores Humanos</td>
                    <td><center>&nbsp; ( 4.9 )</center></td>
                  </tr>
                  <tr>
                    <td>Educaciòn Religiosa</td>
                    <td><center>&nbsp; ( 4.9 )</center></td>
                  </tr>
                  <tr>
                    <td>Educaciòn Artìstica</td>
                    <td><center>&nbsp; ( 4.9 )</center></td>
                  </tr>
                  <tr>
                    <td>Educ. Fìsica, Recreaciòn Y Deportes</td>
                    <td><center>&nbsp; ( 4.5 )</center></td>
                  </tr>
                  <tr>
                    <td>Conducta</td>
                    <td><center>&nbsp; ( 5 )</center></td>
                  </tr>
                  <tr>
                    <td>Disciplina</td>
                    <td><center>&nbsp; ( 5 )</center></td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
            <br /><br /><br /><br />Dado en San Marcos, Sucre, a los 26 dias del
            mes enero del año 2026. <br /><br />
            <table width="100%" border="0" cellpadding="3" cellspacing="0">
              <tbody>
                <tr>
                  <td align="center" width="33%">
                    <hr style="width: 200" />
                    <b>Glenis Pernett Martínez</b><br />Rector(a)
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html> `;
}
