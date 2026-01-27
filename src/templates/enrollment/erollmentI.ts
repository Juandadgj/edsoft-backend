import { institution, student } from "@prisma/client";

export function erollmentI({student, level, year, institution, id_enrollment }: {
  student: student,
  level: number,
  institution: institution,
  year: number,
  id_enrollment: number,
}): string {
  return `
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body,
      td,
      th {
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 10px;
      }
      header {
        text-align: center;
      }
      header div {
        display: flex;
        justify-content: flex-start;
      }
      p {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    </style>
  </head>
  <body>
    <table width="650" border="0" align="center">
      <tbody>
        <tr>
          <td colspan="3">
            <table width="100%" border="0" align="center" cellspacing="5">
              <tbody>
                <tr height="100">
                  <!--
										<td align="center" valign="middle">
							<img src="../../fotos/1002/logo.jpg" width="90" height="100">						</td>
								-->

                  <td align="center">
                    <h2>INSTITUCIÓN EDUCATIVA GIMNASIO DEL SAN JORGE</h2>
                    <font size="" color="">
                      Programa para el Desarrollo Integral de Niños y Niñas
                      <br />
                      CRA 24 Nº 20 - 65 Tel 2954011 San Marcos- Sucre
                      <br />Email: gimnsanjorge@hotmail.com
                      <br />
                      <br /> </font
                    ><br />
                    <h3>
                      AÑO:${year} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; HOJA DE
                      MATRÍCULA &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp; No. ${id_enrollment || ''}
                    </h3>
                    <h3></h3>
                  </td>

                  <!--
				     
				-->
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table width="650" border="0" align="center">
      <tbody>
        <tr>
          <td>
            <fieldset>
              <legend><b>DATOS PERSONALES</b></legend>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="70%">
                      <b>Nombre y Apellidos:</b> ${student.name || ""} ${student.last_name || ""}
                    </td>
                    <td width="30%"><b>Sexo:</b> ${student.sex || ""}</td>
                  </tr>
                  <tr>
                    <td width="70%">
                      <b>Lugar y fecha de nacimiento:</b> ${student.birthplace || ""},
                      ${student.birthday || ""}
                    </td>
                    <td width="30%"><b></b></td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="50%">
                      <b>Tipo de documento:</b> Registro Civil
                    </td>
                    <td width="50%">
                      <b>N. de documento identidad:</b> ${student.identification || ""}
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="33%"><b>Direccion:</b>   ${student.direction || ""}</td>
                    <td width="33%"><b>Barrio:</b>   ${student.neighborhood || ""}</td>
                    <td width="33%"><b>Zona:</b>   ${student.zone || ""}</td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="50%"><b>Correo: ${student.email || ""}</b></td>
                    <td width="50%"><b>Nacionalidad:</b> ${student.code || ""}</td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="100%"><b>Estudio vigencia anterior :</b> ${student.study_validity || ""}</td>
                  </tr>
                  <tr>
                    <td width="100%">
                      <b>Matriculado al grado :</b> ${level || ""}
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="60%">
                      <b>Institucion Educativa Procedencia: ${student.previous_institution || ""}</b>
                    </td>
                    <td width="12%"><b>Grado:</b></td>
                    <td width="10%"><b>Año:</b></td>
                    <td width="18%"><b>Ciudad:</b></td>
                  </tr>
                </tbody>
              </table>

              <hr />

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="100%">
                      <b>SISTEMA DE SALUD:</b>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tipo de
                      sangre y RH B POSITIVO
                    </td>
                  </tr>
                  <tr>
                    <td width="100%">
                      <b>Entidad donde esta afiliado:</b>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Contributivo ( )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; o
                      Subsidiado ( )
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr />

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="100%"><b>Nesecita transporte escolar:</b> ${student.school_needs || ""}</td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
            <br /><br />

            <fieldset>
              <legend><b>SITUACION SOCIOECONOMICA</b></legend>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="50%"><b>Estrato:</b> ${student.socioeconomic_level || ""}</td>
                    <td width="50%"><b>Nivel en el sisben:</b> ${student.sisben_level || ""}</td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="100%"><b>Discapacidad:</b> ${student.disability_level || ""}</td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="100%"><b>Capacidad Excepcional</b> ${student.exceptional_ability || ""}</td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="33%"><b>Desplazado: ${student.is_displaced || ""}</b></td>
                    <td width="33%"><b>Codigo: ${student.code || ""}</b></td>
                    <td width="33%"><b>Municipio:</b> ${student.municipality || ""}</td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="100%">
                      <b>Indigena: ${student.is_indigenous || ""}</b>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Certificación del Resguardo
                      Indigena)
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="100%">
                      <b>Etnia a la que pertenece:</b> ${student.indigenous_community || ""} (Certiticación)
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="100%">
                      <b>Afrodescendiente: </b> ${student.is_afro_descendant || ""}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Certificación del Resguardo
                      Indigena)
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="100%">
                      <b>Comunidad a la que pertenece:</b> ${student.afro_community || ""} (Certiticación)
                    </td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
            <br /><br />

            <fieldset>
              <legend><b>INFORMACION FAMILIAR</b></legend>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="40%">
                      <b>Padre:</b> ${student.father || ""}
                    </td>
                    <td width="25%"><b>Cedula:</b> ${student.father_id || ""} </td>
                    <td width="35%">
                      <b>Estudios realizados:</b> ${student.father_education || ""}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2"><b>Profesión u Oficio:</b> ${student.father_profession || ""}</td>
                    <td><b>Cel:</b> ${student.father_cellphone || ""}</td>
                  </tr>
                </tbody>
              </table>

              <table width="100%" align="cente" cellpadding="5" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="40%"><b>Madre:</b> ${student.mother || ""}</td>
                    <td width="25%"><b>Cedula:</b> ${student.mother_id || ""}</td>
                    <td width="35%"><b>Estudios realizados:</b> ${student.mother_education || ""}</td>
                  </tr>
                  <tr>
                    <td colspan="2"><b>Profesión u Oficio:</b> ${student.mother_profession || ""}</td>
                    <td><b>Cel:</b> ${student.mother_cellphone || ""}</td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                align="center"
                cellpadding="5"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td width="40%">
                      <b>Otro Responsable (acudiente):</b> ${student.guardian || ""}
                    </td>
                    <td width="25%"><b>Cedula:</b> 3494047</td>
                    <td width="35%"><b>Cel:</b></td>
                  </tr>
                  <tr>
                    <td colspan="2"><b>Profesión u Oficio:</b></td>
                    <td><b>Dirección:</b></td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
            <br /><br />

            <hr />

            <table width="100%" align="center">
              <tbody>
                <tr>
                  <td width="100%">
                    Manifiesto que conozco el proyecto Educativo Institucional y
                    en especial el Manual de Convivencia que rige a la
                    Institución Educativa, por lo tanto me comprometo a apoyar
                    activamente en su desarrollo , cumplimiento y respeto.
                    <br /><br /><br />

                    Como constancia se firma a los _________ días del mes
                    ____________ del año_________
                  </td>
                </tr>
              </tbody>
            </table>

            <br /><br /><br /><br />
            <table width="100%" align="center">
              <tbody>
                <tr>
                  <td width="50%">
                    <b>Estudiante:</b> _________________________________
                  </td>
                  <td width="50%">
                    <b>Acudiente:</b> __________________________________
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  <html></html>
</html>
  `;
}
