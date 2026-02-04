import { institution } from '@prisma/client';

export function graduatesTemplate(
  data: any[],
  institution: institution,
): string {
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
		<font size="4">Graduados en el año 2022</font>	
	<br><br>
	
	<br><table align="center" width="98%" border="1" cellpadding="3" cellspacing="0">
		
		<tbody><tr>
			<td><center><b>Estudiante</b></center></td>
			<td><center><b>Grado de </b></center></td>
			<td><center><b>Fecha </b></center></td>
			
		</tr></tbody></table> 	 
	 </center></td>
	</tr>
</tbody></table>


</body></html>
  `;
}
