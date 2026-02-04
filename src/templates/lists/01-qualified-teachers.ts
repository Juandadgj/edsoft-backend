import { institution } from '@prisma/client';

export function qualifiedTeachersTemplate(
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
		  <font size="4">Docentes habilitados </font><br><br>
		  </center>
		  
		 <table align="center" width="98%" border="1" cellpadding="3" cellspacing="0">	
			<tbody><tr>			
			<td><div align="center"><strong>Apellido y Nombre</strong></div></td>
			<td><div align="center"><b>Identificacion</b></div></td>
			<td><div align="center"><b>Titulo</b></div></td>
			</tr><tr>			
			<td>Cabarcas Barraza Rosalba Del Socorro</td>
			<td>22810943</td>
			<td>Licenciada en Atención a la Primera Infancia</td>
			</tr><tr>			
			<td>Cárcamo Acosta  Eliana</td>
			<td>1104421838</td>
			<td>Psicóloga </td>
			</tr><tr>			
			<td>Castillo Arrieta Cesar Augusto </td>
			<td>73434171</td>
			<td>Licenciado en filosofia</td>
			</tr><tr>			
			<td>Chaverra Orjuela Lina Marcela</td>
			<td>1069492726</td>
			<td>Licenciada en Humanidades</td>
			</tr><tr>			
			<td>De Hoyos Rosso Jackelin Del Carmen</td>
			<td>1068661457</td>
			<td>Normalista Superior</td>
			</tr><tr>			
			<td>Díaz Pérez Yuliana</td>
			<td>1005663091</td>
			<td>Lienciada en Informática</td>
			</tr><tr>			
			<td>Diazgranados Monterroza Katherine</td>
			<td>1104428716</td>
			<td>Normalist Superior</td>
			</tr><tr>			
			<td>Mier Delgado Juan Salvador</td>
			<td>1005680013</td>
			<td>Licenciado en Matemáticas</td>
			</tr><tr>			
			<td>Pernett Martínez Glenis</td>
			<td>34942999</td>
			<td>LIC. EN LENGUAS MODERNAS</td>
			</tr><tr>			
			<td>Serpa Ortega Gloria Del Carmen</td>
			<td>23175544</td>
			<td>Lic. en Ed. Bàsica con ènfasis en Humanidades e Inglès</td>
			</tr><tr>			
			<td>Tejada Caldera Ricaurte Miguel</td>
			<td>1005395881</td>
			<td>Lic. en Educaciòn fìsica, recreaciòn y deportes  </td>
			</tr><tr>			
			<td>Zabaleta Flórez Rafael Antonio</td>
			<td>1104421029</td>
			<td>Licenciado en Matemáticas</td>
			</tr><tr>			
			<td>Zarur Torralvo Soleyl Cecilia</td>
			<td>1017151933</td>
			<td>Normalista Superior y Comunicadora Social</td>
			</tr></tbody></table><br><br> 	 
	 </td>
	</tr>
</tbody></table>


</body></html>`;
}
