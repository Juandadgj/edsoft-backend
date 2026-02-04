import { institution, student } from '@prisma/client';

export function gradeWithAchievementsTemplate(
  student: student,
  data: {
    score1: string;
    score2: string;
    score3: string;
    score4: string;
    course: {
      name: string;
      hour: number;
      teacher: {
        name: string;
        last_name: string;
      };
      achievements: {
        id_course: number | null;
        period: number | null;
        id_achievement: number;
        description: string | null;
      }[];
    };
  }[],
  institution: institution,
) {
  return `
		<html>
			<head>
				<style>
					body { transition: opacity ease-in 0.2s; }
					body[unresolved] { opacity: 0; display: block; overflow: hidden; position: relative; }
				</style>
				<title>Imprimir</title>
				<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
				<style>
					H1.SaltoDePagina { PAGE-BREAK-AFTER: always }
				</style>

				<style type="text/css">
					<!--
					body,td,th {
						font-family: Verdana, Arial, Helvetica, sans-serif;
						font-size: 10px;
					}
					h1 { font-size: 10px; }
					h2 { font-size: 11px; }
					.pie { font-size: 10px; font-weight:bold; }
					.cabeza { font-size: 12px; }
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
											<td align="center" valign="middle">
												<img src="../../fotos/1002/logo.jpg" width="70" height="80">
											</td>
											<td align="center" width="90%">
												<font size="4">  ${institution.name}   </font><br>
												<center>
													Programa para el Desarrollo Integral de Niños y Niñas<br>
													${institution.direction} Tel ${institution.phone} San Marcos - Sucre<br>
													Email: gimnsanjorge@hotmail.com<br>
													<br>
												</center>
											</td>
										</tr>
									</tbody>
								</table>

								<table width="100%" border="0" cellpadding="3" cellspacing="0">
									<tbody>
										<tr>
											<td>Est: <strong>${student.last_name} ${student.name}</strong> </td>
											<td>Grado: <strong>Noveno A Mañana</strong> </td>
											<td>Per: <strong>1 año 2022</strong> </td>
											<td>Usuario: <strong>e1104417395</strong> </td>
										</tr>
									</tbody>
								</table>

								<br>
								${data.map(
									(item) => `
									<table width="100%" border="1" cellpadding="3" cellspacing="0">
										<tbody>
											<tr>
												<td>Area: <strong>${item.course.name}</strong> </td>
												<td>Doc.: <strong>${item.course.teacher.name} ${item.course.teacher.last_name}</strong> </td>
												<td>CG: <strong>2.0</strong></td>
												<td>Fallas: <strong>0</strong></td>
											</tr>
										</tbody>
									</table>
									${item.course.achievements.map(
										(achievement, index) => `
											<table border="0" cellpadding="0" cellspacing="0">
												<tbody>
													<tr>
														<td width="2%" valign="top"><b>${index + 1}.</b> </td>
														<td width="94%"> ${achievement.description} </td>
														<td width="4%" align="right" valign="bottom"><b></b></td>
													</tr>
												</tbody>
											</table>
										`
									).join('')}`
								).join('<br>')}
						
								<br>
								<br>

								<b>Observación</b> <hr><br><hr><br><br>

								<table width="100%" border="0" cellpadding="3" cellspacing="0">
									<tbody>
										<tr>
											<td align="center" width="35%"><hr><b>Glenis Pernett Martínez</b><br>Rector(a)</td>
											<td align="center" width="30%"> </td>
											<td align="center" width="35%"><hr><b>Díaz Soto Cristian Camilo</b><br>Profesor de grupo</td>
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
