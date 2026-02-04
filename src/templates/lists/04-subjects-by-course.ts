import { institution } from '@prisma/client';

export function subjectsByCourseTemplate(
  data: any[],
  institution: institution,
): string {
  return `<html><head><style>body {transition: opacity ease-in 0.2s; } 
body[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } 
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

<table align="center" width="650">
	<tbody><tr>
	 <td valign="top">		
	<br><center>
	  <font size="5">INSTITUCIÓN EDUCATIVA GIMNASIO DEL SAN JORGE  </font><br>
		<font size="4"> Asignaturas  Septimo A Mañana año 2022</font><br><br>
		
		<br><table align="center" width="98%" border="1" cellpadding="3" cellspacing="0">
		
		  <tbody><tr>
		   <td><div align="center"><strong>Asignatura</strong></div></td>
			<td><div align="center"><strong>Profesor</strong></div></td>					
		 </tr><tr>
			<td>Matemáticas</td>
			<td>Zabaleta Flórez Rafael Antonio</td>
			</tr><tr>
			<td>Geometría</td>
			<td>Zabaleta Flórez Rafael Antonio</td>
			</tr><tr>
			<td>Estadística</td>
			<td>Zabaleta Flórez Rafael Antonio</td>
			</tr><tr>
			<td>Lengua Castellana</td>
			<td>Pérez Osorio Daniela Rosa</td>
			</tr><tr>
			<td>Comprensión Lectora</td>
			<td>Pérez Osorio Daniela Rosa</td>
			</tr><tr>
			<td>Inglés</td>
			<td>Pernett Martínez Glenis</td>
			</tr><tr>
			<td>Historía</td>
			<td>Castillo Arrieta Cesar Augusto </td>
			</tr><tr>
			<td>Geografía</td>
			<td>Naizir González Yiseth</td>
			</tr><tr>
			<td>Ciencias Naturales Y Educación Ambiental</td>
			<td>Díaz Soto Cristian Camilo</td>
			</tr><tr>
			<td>Química</td>
			<td>Díaz Soto Cristian Camilo</td>
			</tr><tr>
			<td>Física</td>
			<td>Zabaleta Flórez Rafael Antonio</td>
			</tr><tr>
			<td>Tecnología E Informatica</td>
			<td>Ramos Montiel Aura María</td>
			</tr><tr>
			<td>Educación Ética Y Valores Humanos</td>
			<td>Caballero Doria Erika Mirley</td>
			</tr><tr>
			<td>Educación Religiosa</td>
			<td>Castillo Arrieta Cesar Augusto </td>
			</tr><tr>
			<td>Educación Artística</td>
			<td>Padilla Tobio Juan Carlos</td>
			</tr><tr>
			<td>Educación Física, Recreación Y Deportes</td>
			<td>Tejada  Caldera  Ricaaurte </td>
			</tr><tr>
			<td>Cátedra De Páz</td>
			<td>Castillo Arrieta Cesar Augusto </td>
			</tr><tr>
			<td>Conducta</td>
			<td>Castillo Arrieta Cesar Augusto </td>
			</tr><tr>
			<td>Disciplina</td>
			<td>Castillo Arrieta Cesar Augusto </td>
			</tr></tbody></table> 	 
	 </center></td>
	</tr>
</tbody></table>


</body></html>`;
}
