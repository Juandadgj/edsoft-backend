import { institution } from '@prisma/client';

export function studentsByCourseTemplate(
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
	  <font size="4">Listado de estudiantes de Parvulo A Mañana año 2026</font><br>
	  </center>
	 <br><br>
	  <table align="center" width="98%" border="1" cellpadding="3" cellspacing="0">	
		<tbody><tr>
		 <td></td>
		<td><div align="center"><strong>Apellido </strong></div></td>
		<td><div align="center"><strong>Nombre</strong></div></td>
		<td><div align="center"><strong>Codigo / Identificacion</strong></div></td>
		<td><div align="center"><strong>No. Matricula </strong></div></td>
		
<td><div align="center"><strong>Fecha nacimiento </strong></div></td>
<td><div align="center"><strong>Telefono </strong></div></td>
<td><div align="center"><strong>Nombre acudiente</strong></div></td>  
<td><div align="center"><strong>Correo</strong></div></td>  
		 </tr><tr>
			<td><div align="center"><strong>1</strong></div></td>
			<td>PiÑa Calderon</td>
			<td> Ian Daniel</td>
		    <td>1104445018</td>	
			  <td>100220264017</td>

 <td>2023-11-04</td>
 <td>3147753087- 3229501192</td>
 <td>Karen Johana Calderon Calderin</td>
  <td></td>
			</tr></tbody></table><br><br> 	 
	 </td>
	</tr>
</tbody></table>


</body></html>`;
}
