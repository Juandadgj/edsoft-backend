import { institution } from '@prisma/client';

export function studentsByCoursSignatureTemplate(
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
	  <font size="4">Listado de estudiantes de Decimo A Mañana año 2026</font><br>
	  </center>
	 <br><br>
	  <table align="center" width="98%" border="1" cellpadding="3" cellspacing="0">	
		<tbody><tr>
		 <td></td>
		<td><div align="center"><strong>Estudiante </strong></div></td>
		<td><div align="center"><strong>Identificacion</strong></div></td>
		 
		    <td><div align="center"><strong>Nombre_acudiente_estudiante</strong></div></td>
     	    <td><div align="center"><strong>Telefono</strong></div></td>

		 </tr><tr>
			<td><div align="center"><strong>1</strong></div></td>
			<td>Cervantes Villacob Fabian Andres</td>
		    <td>1103748158</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>2</strong></div></td>
			<td>Escobar Morales Naiciris</td>
		    <td>1100085754</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>3</strong></div></td>
			<td>Gonzalez Navarro Adriano José</td>
		    <td>1082963947</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>4</strong></div></td>
			<td>Gracia Martinez Carlos Eduardo</td>
		    <td>1100085544</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>5</strong></div></td>
			<td>Guzman Garrido Julian Jose</td>
		    <td>1104423406</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>6</strong></div></td>
			<td>Jaraba LÓpez Ana Mercedes</td>
		    <td>1104421014</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>7</strong></div></td>
			<td>Lopez Betin Maria Del Carmen</td>
		    <td>1030244024</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>8</strong></div></td>
			<td>Mercado Acosta  Sofia Carolina</td>
		    <td>1104426413</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>9</strong></div></td>
			<td>Roa Santofimio Maria Alejandra</td>
		    <td>1070393600</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>10</strong></div></td>
			<td>Vega Anaya  Yeinner Antonio</td>
		    <td>1104422302</td>	
			<td> </td>
            <td> </td>
          

			</tr><tr>
			<td><div align="center"><strong>11</strong></div></td>
			<td>Zarate Carcamo  Mariana </td>
		    <td>1110442340</td>	
			<td> </td>
            <td> </td>
          

			</tr></tbody></table><br><br> 	 
	 </td>
	</tr>
</tbody></table>


</body></html>`;
}
