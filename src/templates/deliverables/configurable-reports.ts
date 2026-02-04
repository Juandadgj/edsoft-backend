import { group, institution } from '@prisma/client';
import { ReportDictionary } from 'src/modules/exports/dto/deliverable.dto';

const html = String.raw;

export function configurableReportsTemplate(
  group: group,
  data: any,
  reportOptions: ReportDictionary,
  institution: institution,
) {
  return `
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
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
        <style>
          H1.SaltoDePagina { PAGE-BREAK-AFTER: always }
        </style>
        <style type="text/css">
          <!--
          body, td, th {
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
          -->
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
                      ${reportOptions.showLogo ? ` <td align="center" valign="middle">
                        <img src="../../fotos/1002/logo.jpg" width="70" height="80">
                      </td>` : ``}
                      
                      <td align="center" width="">
                        <font size="${reportOptions.headerTitleSize || 4}">${institution.name}</font><br>
                      
                        ${reportOptions.showHeaderSubtitle ? `
                        <center>
                          Programa para el Desarrollo Integral de Niños y Niñas<br>
                          ${institution.direction} Tel ${institution.phone} San Marcos - Sucre<br>
                          Email: gimnsanjorge@hotmail.com<br>
                          <br>
                        </center>
                        ` : ``}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table width="100%" border="0" cellpadding="3" cellspacing="0">
                  <tbody>
                    <tr>
                      <td>Est: <strong>${data.student}</strong></td>
                      <td>Grado: <strong>Primero A Mañana</strong></td>
                      <td>Per: <strong>2 año 2022</strong></td>
                    </tr>
                  </tbody>
                </table>
                <table width="100%" border="0" cellpadding="3" cellspacing="0">
                  <tbody>
                    <tr>
                      <td>Promedio: <strong>${data.average}</strong></td>
                      <td>Puesto en el curso: <strong>${data.position}</strong></td>
                    </tr>
                  </tbody>
                </table>
                <br>
                ${reportOptions.average_area ? `
                         <table bgcolor="#F2F5A9" width="100%" border="1">
                  <tbody>
                    <tr>
                      <td width="60%"> Area: <b>Matemáticas</b></td>
                      <td width="40%"> Promedio: <b>( 4.6 )</b></td>
                    </tr>
                  </tbody>
                </table>
                  ` : ``}
                <br>
                ${data.courses.map((c)=> `
                    <table width="100%" border="1" cellpadding="3" cellspacing="0">
                      <tbody>
                        <tr>
                          <td bgcolor="#E5E5E5">Asig: <strong>${c.name}</strong></td>
                          <td bgcolor="">Doc.: <strong>${c.teacher}</strong></td>
                          <td width="25%" bgcolor="">CG: <strong>( 4.4 )</strong></td>
                          <td width="15%" bgcolor="">Fallas: <strong>0</strong></td>
                          ${reportOptions.hour ? `<td width="10%" bgcolor="">I.H.: <strong>4</strong></td>` : ``}
                          
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td width="2%" valign="top"><b>1.</b></td>
                          <td width="78%">Identifica el signo (+) como operador para la suma.</td>
                          <td width="20%" align="right" valign="top"><b></b></td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" border="1" cellpadding="2" cellspacing="0">
                      <tbody>
                        <tr>
                          ${reportOptions.all_qualifications ? `       
                            <td><b>Todos los periodos </b></td>
                            <td>Per.1 : <strong>${c.score1 ? c.score1 : '-'}</strong></td>
                            <td>Per.2 : <strong>${c.score2 ? c.score2 : '-'}</strong></td>
                            <td>Per.3 : <strong>${c.score3 ? c.score3 : '-'}</strong></td>
                            <td>Per.4 : <strong>${c.score4 ? c.score4 : '-'}</strong></td>
                            <td>Promedio : <strong>${data.average ? data.average : '-'}</strong></td>   
                            ` : `
                            ${reportOptions.qualification_per1 ? `<td>Per.1 : <strong>${c.score1 ? c.score1 : '-'}</strong></td>` : ``}
                            ${reportOptions.qualification_per2 ? `<td>Per.2 : <strong>${c.score2 ? c.score2 : '-'}</strong></td>` : ``}
                            ${reportOptions.qualification_per3 ? `<td>Per.3 : <strong>${c.score3 ? c.score3 : '-'}</strong></td>` : ``}
                            ${reportOptions.qualification_per4 ? `<td>Per.4 : <strong>${c.score4 ? c.score4 : '-'}</strong></td>` : ``}
                            ${reportOptions.average_per ? `<td>Promedio : <strong>${data.average ? data.average : '-'}</strong></td>` : ``}
                            `}
                        </tr>
                      </tbody>
                    </table>
                    <br>
                    <br>
                  ` ).join('')}
                <br>
                <b>Observación</b>
                <hr>
                <br>
                <hr>
                <br>
                <br>
                <table width="100%" border="0" cellpadding="3" cellspacing="0">
                  <tbody>
                    <tr>
                      ${reportOptions.showRectorSignature ? `
                      <td align="center" width="33%">
                        <hr style="width:200"><b>González Vides Marcela Patricia</b><br>Rector
                      </td>
                        ` : ``}
                       ${reportOptions.showSecretarySignature ? `
                      <td align="center" width="33%">
                        <hr style="width:200"><b>González Vides Marcela Patricia</b><br>Coordinador(a)
                      </td>
                        ` : ``}
                       ${reportOptions.showGroupProfessorSignature ? `
                      <td align="center" width="33%">
                        <hr style="width:200"><b>González Vides Marcela Patricia</b><br>Profesor de grupo
                      </td>
                        ` : ``}       
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
