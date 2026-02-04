import { institution } from '@prisma/client';

export function agesByCourseTemplate(
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
	        	<font size="4">Cursos del año 2022</font><br></center><br><br><b>Parvulo A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">5 años</td>
									   <td align="center">5 </td>
									     <td align="center">1 </td>
									   <td align="center">6 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">6 años</td>
									   <td align="center">6 </td>
									     <td align="center">7 </td>
									   <td align="center">13 </td>
			                          </tr></tbody></table><br><br><b>Prejardin A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">6 años</td>
									   <td align="center">1 </td>
									     <td align="center">1 </td>
									   <td align="center">2 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">7 años</td>
									   <td align="center">4 </td>
									     <td align="center">9 </td>
									   <td align="center">13 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">8 años</td>
									   <td align="center">1 </td>
									     <td align="center"> </td>
									   <td align="center">1 </td>
			                          </tr></tbody></table><br><br><b>Jardin A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">7 años</td>
									   <td align="center">7 </td>
									     <td align="center">2 </td>
									   <td align="center">9 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">8 años</td>
									   <td align="center">11 </td>
									     <td align="center">5 </td>
									   <td align="center">16 </td>
			                          </tr></tbody></table><br><br><b>Transición A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">8 años</td>
									   <td align="center">4 </td>
									     <td align="center">6 </td>
									   <td align="center">10 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">9 años</td>
									   <td align="center">7 </td>
									     <td align="center">11 </td>
									   <td align="center">18 </td>
			                          </tr></tbody></table><br><br><b>Primero A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">9 años</td>
									   <td align="center">3 </td>
									     <td align="center">4 </td>
									   <td align="center">7 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">10 años</td>
									   <td align="center">8 </td>
									     <td align="center">4 </td>
									   <td align="center">12 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">11 años</td>
									   <td align="center">2 </td>
									     <td align="center"> </td>
									   <td align="center">2 </td>
			                          </tr></tbody></table><br><br><b>Segundo A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">10 años</td>
									   <td align="center">3 </td>
									     <td align="center">8 </td>
									   <td align="center">11 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">11 años</td>
									   <td align="center">7 </td>
									     <td align="center">5 </td>
									   <td align="center">12 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">12 años</td>
									   <td align="center">2 </td>
									     <td align="center"> </td>
									   <td align="center">2 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">14 años</td>
									   <td align="center">1 </td>
									     <td align="center"> </td>
									   <td align="center">1 </td>
			                          </tr></tbody></table><br><br><b>Tercero A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">11 años</td>
									   <td align="center">3 </td>
									     <td align="center">4 </td>
									   <td align="center">7 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">12 años</td>
									   <td align="center">9 </td>
									     <td align="center">4 </td>
									   <td align="center">13 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">14 años</td>
									   <td align="center">1 </td>
									     <td align="center"> </td>
									   <td align="center">1 </td>
			                          </tr></tbody></table><br><br><b>Cuarto A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">12 años</td>
									   <td align="center">1 </td>
									     <td align="center">3 </td>
									   <td align="center">4 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">13 años</td>
									   <td align="center">6 </td>
									     <td align="center">7 </td>
									   <td align="center">13 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">14 años</td>
									   <td align="center"> </td>
									     <td align="center">1 </td>
									   <td align="center">1 </td>
			                          </tr></tbody></table><br><br><b>Cuarto B Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">12 años</td>
									   <td align="center">2 </td>
									     <td align="center">2 </td>
									   <td align="center">4 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">13 años</td>
									   <td align="center">7 </td>
									     <td align="center">5 </td>
									   <td align="center">12 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">14 años</td>
									   <td align="center"> </td>
									     <td align="center">1 </td>
									   <td align="center">1 </td>
			                          </tr></tbody></table><br><br><b>Quinto A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">6 años</td>
									   <td align="center"> </td>
									     <td align="center">1 </td>
									   <td align="center">1 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">12 años</td>
									   <td align="center"> </td>
									     <td align="center">1 </td>
									   <td align="center">1 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">13 años</td>
									   <td align="center">5 </td>
									     <td align="center">7 </td>
									   <td align="center">12 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">14 años</td>
									   <td align="center">5 </td>
									     <td align="center">8 </td>
									   <td align="center">13 </td>
			                          </tr></tbody></table><br><br><b>Sexto A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">14 años</td>
									   <td align="center">6 </td>
									     <td align="center">6 </td>
									   <td align="center">12 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">15 años</td>
									   <td align="center">9 </td>
									     <td align="center">5 </td>
									   <td align="center">14 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">16 años</td>
									   <td align="center">1 </td>
									     <td align="center">1 </td>
									   <td align="center">2 </td>
			                          </tr></tbody></table><br><br><b>Septimo A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">15 años</td>
									   <td align="center">3 </td>
									     <td align="center">3 </td>
									   <td align="center">6 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">16 años</td>
									   <td align="center">5 </td>
									     <td align="center">3 </td>
									   <td align="center">8 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">17 años</td>
									   <td align="center">4 </td>
									     <td align="center"> </td>
									   <td align="center">4 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">18 años</td>
									   <td align="center"> </td>
									     <td align="center">1 </td>
									   <td align="center">1 </td>
			                          </tr></tbody></table><br><br><b>Octavo A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">16 años</td>
									   <td align="center">6 </td>
									     <td align="center">3 </td>
									   <td align="center">9 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">17 años</td>
									   <td align="center">4 </td>
									     <td align="center">6 </td>
									   <td align="center">10 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">18 años</td>
									   <td align="center">1 </td>
									     <td align="center"> </td>
									   <td align="center">1 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">19 años</td>
									   <td align="center">1 </td>
									     <td align="center"> </td>
									   <td align="center">1 </td>
			                          </tr></tbody></table><br><br><b>Noveno A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">17 años</td>
									   <td align="center">2 </td>
									     <td align="center">5 </td>
									   <td align="center">7 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">18 años</td>
									   <td align="center">1 </td>
									     <td align="center">7 </td>
									   <td align="center">8 </td>
			                          </tr></tbody></table><br><br><b>Decimo A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">17 años</td>
									   <td align="center"> </td>
									     <td align="center">1 </td>
									   <td align="center">1 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">18 años</td>
									   <td align="center">1 </td>
									     <td align="center">2 </td>
									   <td align="center">3 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">19 años</td>
									   <td align="center">3 </td>
									     <td align="center">6 </td>
									   <td align="center">9 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">20 años</td>
									   <td align="center">1 </td>
									     <td align="center"> </td>
									   <td align="center">1 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">21 años</td>
									   <td align="center">1 </td>
									     <td align="center"> </td>
									   <td align="center">1 </td>
			                          </tr></tbody></table><br><br><b>Undecimo A Mañana</b><br><table width="90%" border="1" cellpadding="3" cellspacing="0">
					  <tbody><tr><td align="center"><b>Edades </b></td>
						   <td align="center"><b>Masculinos</b></td>
							 <td align="center"> <b>Femeninos</b> </td>
						   <td align="center"><b>Total</b> </td>
						  </tr>
					  <tr>
			                      
			                    
									 <td align="center">19 años</td>
									   <td align="center">3 </td>
									     <td align="center">4 </td>
									   <td align="center">7 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">20 años</td>
									   <td align="center">5 </td>
									     <td align="center">5 </td>
									   <td align="center">10 </td>
			                          </tr> <tr>
			                      
			                    
									 <td align="center">21 años</td>
									   <td align="center">1 </td>
									     <td align="center"> </td>
									   <td align="center">1 </td>
			                          </tr></tbody></table> 	 
	 </td>
	</tr>
</tbody></table>


</body></html>`;
}
