import { institution } from '@prisma/client';

export function coursesTemplate(data: any[], institution: institution): string {
  return `
    <html><head><style>body {transition: opacity ease-in 0.2s; } 
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
		<font size="4">Cursos del año 2022</font><br>
	
	<br><br><table align="center" width="98%" border="1" cellpadding="3" cellspacing="0">	
		  <tbody><tr>
		   <td><div align="center"><strong>Curso</strong></div></td>
			<td><div align="center"><strong>Jornada</strong></div></td>
			<td><div align="center"><strong>Profesor de grupo</strong></div></td>
		  </tr><tr>
			<td>Parvulo A</td>
			<td>Mañana</td><td>Zabaleta Silva Erlinda Teresa</td> </tr><tr>
			<td>Prejardin A</td>
			<td>Mañana</td><td>Romero Ceballos  Gina Marcela </td> </tr><tr>
			<td>Jardin A</td>
			<td>Mañana</td><td>Velilla Lora Ingrid Johanna</td> </tr><tr>
			<td>Transición A</td>
			<td>Mañana</td><td>Fernandez Mejía Silvia Patricia</td> </tr><tr>
			<td>Primero A</td>
			<td>Mañana</td><td>González Vides  Marcela Patricia</td> </tr><tr>
			<td>Segundo A</td>
			<td>Mañana</td><td>Trujillo Quiroz Angélica MarÍa</td> </tr><tr>
			<td>Tercero A</td>
			<td>Mañana</td><td>Villa Álvarez  Rosa Carolina</td> </tr><tr>
			<td>Cuarto A</td>
			<td>Mañana</td><td>Caballero Doria Erika Mirley</td> </tr><tr>
			<td>Cuarto B</td>
			<td>Mañana</td><td>Caballero Doria Erika Mirley</td> </tr><tr>
			<td>Quinto A</td>
			<td>Mañana</td><td>Ramos Chaves  Angelica María </td> </tr><tr>
			<td>Sexto A</td>
			<td>Mañana</td><td>Ramos Montiel Aura María</td> </tr><tr>
			<td>Septimo A</td>
			<td>Mañana</td><td>Castillo Arrieta Cesar Augusto </td> </tr><tr>
			<td>Octavo A</td>
			<td>Mañana</td><td>Zabaleta Flórez Rafael Antonio</td> </tr><tr>
			<td>Noveno A</td>
			<td>Mañana</td><td>Díaz Soto Cristian Camilo</td> </tr><tr>
			<td>Decimo A</td>
			<td>Mañana</td><td>Pérez Osorio Daniela Rosa</td> </tr><tr>
			<td>Undecimo A</td>
			<td>Mañana</td><td>Pernett Martínez Glenis</td> </tr></tbody></table> 	 
	 </center></td>
	</tr>
</tbody></table>


</body></html>
  `;
}
