import { institution } from '@prisma/client';

export function achievementsByCourseTemplate(
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
		<font size="4"> Asignaturas  Parvulo A Mañana año 2022</font><br><br>
		
		<br><div align="justify"><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Matemáticas</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Reconoce la figura del círculo
<br>2.) identifica y reconoce el color (rojo).<br>3.) Reconoce las nociones espaciales grande-pequeño y arriba-abajo.<br>4.) Identifica, cuenta y escribe el numero 1.<br>5.) Conviene reforzar los temas ya vistos en clase.
<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Reconoce y retiñe los números del 1 al 3.<br>2.) Reconoce e identifica los números del 1 al 5.<br>3.) Reconoce e identifica el circulo y el triangulo  como figura geométrica.<br>4.) Reconoce y nombra los colores primarios.<br>5.) Animo tu puedes realizar trazos de los números a través del reteñido. <br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Identifica los números vistos y realiza los trazos a través del reteñido.<br>2.) Colorea e identifica algunas figuras geométricas como cuadrado y el rectángulo.<br>3.) Reconoce y retiñe los números del 1 al 5.<br>4.) Distingue los colores primarios<br>5.) con ayuda puedes mejorar tus conocimientos.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Reconoce e identifica los números del 1 al 10.
<br>2.) Realiza los trazos de los números vistos, es capaz de reteñir sin salirse del entorno. <br>3.) Eres un niño(a) inteligente  sigue ejercitando tu motricidad para que cada día seas mejor.<br>4.) Se le dificulta realizar trazos a través del reteñido.<br>5.) Identifica correctamente las figuras geométricas.<br>6.) Distingue los colores primarios.<br>7.) Presenta dificultad para identificar los números del 1 al 5.<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Durante el año escolar su rendimiento académico en la asignatura de matemáticas fue alto.
continua así Felicidades. <br>2.) Durante el año escolar su rendimiento académico en la asignatura de matemáticas fue superior.
continua así Felicidades.<br>3.) Durante el año escolar su rendimiento académico en la asignatura de matemáticas fue bajo.
continua trabajando para que cada día seas mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Lengua Castellana</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Reconoce las líneas y las retiñe.
<br>2.) Sigue trazos de líneas diagonales, verticales y horizontales con facilidad.
<br>3.) Participa activamente en las actividades. <br>4.) Presenta cierto grado de dificultad para realizar algunos trazos de las líneas.
<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Es capaz de reteñir algunos trazos por si solo(a).<br>2.) Reconoce y nombra  las vocales(o, i, u, e, a).<br>3.) Ánimo tu puedes nombrar las vocales vistas y realizar sus trazos a través de reteñido.<br>4.) Reconoce la vocal O, i y las retiñe.<br>5.) Participa activamente en las actividades.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Identifica las vocales vistas y realiza los trazos a través del reteñido.<br>2.) Nombra palabras que contienen las consonantes m,p,s.<br>3.) Se destaca por describir visualmente las consonantes.<br>4.) Reconoce la vocal O, i y las retiñe.<br>5.) Identifica las vocales (o,i,u,a,e).<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Identifica las consonantes m.<br>2.) Realiza la descripción de objetos  e imágenes.<br>3.) Se le dificulta  realizar trazos de líneas a través del reteñido.<br>4.) Demuestra muy bien sus habilidades y destrezas.<br>5.) Retiñe las consonantes m, p,y s.<br>6.) Conoce e identifica las vocales (a, e, i, o y u )<br>7.) se le dificulpa la identificación de las vocales (a, e, i, o y u )<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Su rendimiento académico durante el año escolar en la asignatura de Lengua Castellana fue Alto.
Felicitaciones.<br>2.) Su rendimiento académico durante el año escolar en la asignatura de Lengua Castellana fue Superior.
Felicitaciones.<br>3.) Su rendimiento académico durante el año escolar en la asignatura de Lengua Castellana fue Básico.
Sigue trabajando para cada día seas mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Inglés</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Identifica y pronuncia algunos saludos en ingles.
<br>2.) Pronuncia y vocaliza hola en ingles.<br>3.) Saluda con alegría a su profesora en inglés.<br>4.) Se le dificulta la pronunciación de algunos saludos en inglés.
<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Nombra correctamente algunos colores en ingles como rojo azul amarillo.<br>2.) Reconoce que red en inglés significa rojo en español.<br>3.) Recuerda y pronuncia en inglés la palabra mamá (mother),<br>4.) Nombra correctamente niño y niña en ingles.<br>5.) Saluda con alegría a su profesora en inglés.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) reconoce y pronuncia boy-girl en español y ingles. <br>2.) Nombra correctamente algunos colores en ingles como rojo azul amarillo.
<br>3.) Reconoce my boby que es mi cuerpo y partes del cuerpo en ingles.<br>4.) dedo reforzar pronunciación de algunos temas en ingles. <br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Conoce el significado de los animales de la granja vistos en clases.<br>2.) Obedece a los diferentes comandos usados en ingles.<br>3.) Nombra correctamente los colores en ingles como rojo azul amarillo verde<br>4.) Nombra algunas figura geométricas en ingles<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Su rendimiento académico en el año escolar en  la asignatura de Ingles fue Alto.
Felicitaciones.<br>2.) Su rendimiento académico en el año escolar en  la asignatura de Ingles fue Superior.
Felicitaciones.<br>3.) Su rendimiento académico en el año escolar en  la asignatura de Ingles fue Básico.
Sigue trabajando para que cada día seas mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Ciencias Sociales</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Menciona correctamente su nombre
<br>2.) Reconoce que su familia está conformada por papá, mamá y hermanos.<br>3.) Participa, se integra y coopera  en actividades lúdicas en forma creativa, de acuerdo con su edad.<br>4.) Identifica la casa, partes de la casa y el colegio.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Reconoce la bandera de su colegio como uno de sus símbolos.<br>2.) Menciona correctamente su nombre.<br>3.) Reconoce que su familia esta conformada por papá, mamá y hermanos.<br>4.) Cumple con los acuerdos establecidos de la institución. <br>5.) Mantiene su aula de clase aseada.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Nombra diferencia entre el campo y la ciudad.<br>2.) Mantiene su aula de clase aseada.<br>3.) Cumple con los acuerdos establecidos en la institución.<br>4.) le gusta compartir con sus compañeros.<br>5.) demuestra preferencias por algunos objetos y juegos.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Reconoce el clima del lugar donde vive.<br>2.) Disfruta del clima  cuando hay lluvias exponiendo que es un clima fresco y agradable.<br>3.) Cumple con los acuerdos establecidos en la institución.<br>4.) Describe oralmente en laminas lo que es una profesión u oficio.<br>5.) Nombra diferencia entre el campo y la ciudad<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Su rendimiento académico durante el año escolara en la asignatura de Ciencias Sociales  fue Alto.
Felicitaciones.<br>2.) Su rendimiento académico durante el año escolara en la asignatura de Ciencias Sociales  fue Superior.
Felicitaciones.<br>3.) Su rendimiento académico durante el año escolara en la asignatura de Ciencias Sociales  fue Básico.
Sigue trabajando para que cada día seas mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Ciencias Naturales Y Educación Ambiental</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Reconoce y colorea su cuerpo.
<br>2.) Establece diferencia entre niño y niña.
<br>3.) Reconoce y colorea las partes de su carita.<br>4.) Reconoce y señala las partes del cuerpo humano.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Se expresa con su cuerpo al imitar movimientos de animales.<br>2.) Establece diferencias entre seres vivos y no vivos.<br>3.) Identifica y nombra los órganos de los sentidos .<br>4.) Identifica los cuidados del su cuerpo y su higiene personal.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Participa con entusiasmo en actividades con sus compañeros con el fin de mantener el aula de clase limpia.<br>2.) Reconoce la importancia del agua y su cuidado.<br>3.) Reconoce la importancia de los alimentos para tener una buena salud.<br>4.) Reconoce la importancia del agua, y su utilidad<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Reconoce  nuestro planeta Tierra.<br>2.) Reconoce el día y la noche así como también  las actividades que se realizan en cada tiempo determinado.<br>3.) Reconoce el aire y la lluvia  como fenómenos naturales.<br>4.) Nombra correctamente el planeta donde vivimos y lo identifica.<br>5.) Mantiene su aula de clase aseada.<br>6.) Cumple con los acuerdos establecidos en la institución<br>7.) Identifica y nombra los animales domésticos.<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Su rendimiento académico durante el año escolar en la asignatura de Ciencias Naturales y Educación Ambiental fue Alto.
Felicitaciones.<br>2.) su rendimiento académico en el año escolar en la asignatura de Ciencias Naturales y Educación Ambiental fue Superior.
Felicitaciones.<br>3.) su rendimiento académico en el año escolar en la asignatura de Ciencias Naturales y Educación Ambiental fue Básico.
Sigue trabajando para que cada día seas mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Tecnología E Informatica</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Identifica la pantalla del computador.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Reconoce algunos artefactos que se utilizan en la casa.<br>2.) Identifica las partes del computador<br>3.) Identifica el teclado y mause del computador.<br>4.) Mantiene el orden en la clase de informática<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Reconoce algunas  funciones de las partes del computador.



<br>2.) Identifica las formas de comunicarse con las personas a través  de los adelantos tecnológicos.<br>3.) Reconoce los elementos tecnológicos que hay en su escuela y en su casa.<br>4.) Reconoce el computador como un herramienta tecnológica.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Reconoce el computador como medio de comunicación.<br>2.) A la hora de  observar vídeos a través de herramientas tecnológicas muestra interés y entusiasmo.<br>3.) Reconoce el computador como medio de comunicación<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Su rendimiento académico en el año escolar en la asignatura de Tecnología e Informática fue Alto.
Felicitaciones.<br>2.) Su rendimiento académico en el año escolar en la asignatura de Tecnología E Informática fue Superior.
Felicitaciones.<br>3.) Su rendimiento académico en el año escolar en la asignatura de Tecnología E Informática fue Básico.
Sigue trabajando para que cada día seas mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Educación Ética Y Valores Humanos</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Demuestra respeto y ternura hacia sus compañeros.
<br>2.) Tiene buena presentación personal.
<br>3.) Es responsable con sus actividades.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Sabe esperar y compartir.<br>2.) El niño tiene buena presentación personal.<br>3.) Establece en su grupo de clase una buena relación. <br>4.) Es responsable con sus actividades.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Utiliza  con frecuencia el habito de cortesía tales como favor y gracias.<br>2.) Disfruta al pertenecer a un grupo, manifestando respeto por sus compañeros y gozando de aceptación.<br>3.) Comprende la importancia de las relaciones de compañerismo y amistad.<br>4.) Es responsable frente ala asistencia puntual a clases y alas actividades asignadas.<br>5.) Cuida su presentación personal y útiles de trabajo.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Muestra respeto con sus compañeros.<br>2.) Es puntual en el cumplimiento de sus actividades escolares.<br>3.) Cuida su presentación personal y útiles de trabajo.<br>4.) Reconoce y expresa con su rostro sus emociones tristeza, alegría, enojo y asombro.<br>5.) algunas veces no cumplio con sus actividades escolares<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Su rendimiento académico en el año escolar en la asignatura de Educación Ética Y valores Humanos fue Alto.
Felicitaciones.<br>2.) Su rendimiento académico en el año escolar en la asignatura de Educación Ética Y valores Humanos fue Superior.
Felicitaciones.<br>3.) Su rendimiento académico en el año escolar en la asignatura de Educación Ética Y valores Humanos fue Básico.
Sigue así para que cada día sea mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Educación Religiosa</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Sabe que en el cielo se encuentra papito Dios y nos cuida.<br>2.) Entona canciones alusivas a papito Dios.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Se comunica con Dios a través de la oración.<br>2.) Entona cantos que glorifican al señor.
<br>3.) Comparte con agrado el amor de Dios.<br>4.) Asiste  a los actos religiosos.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Reconoce a Dios como el creador de la naturaleza.<br>2.) Es respetuoso (a) a la hora de orar y hablar con Dios.<br>3.) Disfruta el amor de Dios en la familia.<br>4.) Entona pequeñas canciones alusivas a papito Dios.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Entona pequeñas canciones alusivas a papito Dios.<br>2.) Manifiesta amor y respeto por los actos religiosos. <br>3.) Reconoce que el cielo, el sol, los animales, las plantas y el hombre fueron creados por  papito Dios.<br>4.) Reza con mucha devoción.<br>5.) Asiste  a los actos religiosos.<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Durante el año escolar su rendimiento académico en la asignatura de Educación Religiosa fue alto.
continua así Felicidades.<br>2.) Durante el año escolar su rendimiento académico en la asignatura de Educación Artística fue superior.
continua así Felicidades.<br>3.) Durante el año escolar su rendimiento académico en la asignatura de Educación Artística fue bajo.
continua trabajando para que cada día seas mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Educación Artística</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Disfruta de las actividades como rasgar, colorear y pegar.
<br>2.) Se divierte al colorear con temperas.
<br>3.) Demuestra entusiasmo para realizar los trabajos de artística.<br>4.) Es participativo en clase.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Disfruta mucho al colorear libremente utilizando diferentes colores.<br>2.) Se divierte realizando trabajos con la técnica de la dáctilo pintura.<br>3.) Presenta dificultad para reteñir.<br>4.) Se recomienda realizar en casa ejercicios, que le ayuden a desarrollar su motricidad fina.<br>5.)  Presenta sus trabajos en forma ordenada.<br>6.) Es participativo en clase.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Modela plastilina con agrado y precisión  para así desarrollar su motricidad fina.<br>2.) Presenta dificultad para reteñir.
<br>3.) Es necesario realizar ejercicios en casa para desarrollar su motricidad fina.<br>4.) Representa por medio de la pintura sus ideas en forma creativa.<br>5.) realiza coloreado y reteñido.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Demuestra entusiasmo para realizar los trabajos de artística.
<br>2.) Demuestra muy bien sus habilidades y destrezas al realizar sus actividades<br>3.) Es responsable frente a la asistencia puntual a clases y a las actividades asignadas.<br>4.) Presenta sus trabajos en forma ordenada.<br>5.) Es participativo en clase<br>6.) Es aplicado para realizar sus trabajos.<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Durante el año escolar su rendimiento académico en la asignatura de Educación Artística fue alto.
continua así Felicidades.<br>2.) Durante el año escolar su rendimiento académico en la asignatura de Educación Artística fue Superior.
continua así Felicidades.<br>3.) Durante el año escolar su rendimiento académico en la asignatura de Educación Artística fue bajo.
continua trabajando para que cada día seas mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Educación Física, Recreación Y Deportes</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Realiza desplazamientos unilaterales (correr y saltar con un pie y luego con el otro) sobre zonas preestablecidas.<br>2.) Realiza lanzamientos óculo-manuales con orientación del profesor.<br>3.) Presenta sus trabajos en forma ordenada.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Realiza lanzamientos óculo-manuales con orientación del profesor.<br>2.) Lanza y rueda pelota hacia objetos que se encuentran a corta distancia.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Realiza lanzamientos óculo-manuales con orientación del profesor<br>2.) Realiza rollo hacia delante sin ayuda del profesor.<br>3.) Realiza movimientos dirigidos.<br>4.) Corre a cierta distancia.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Realiza lanzamientos óculo-manuales con orientación del profesor<br>2.) Realiza rollo hacia delante sin ayuda del profesor.<br>3.) Realiza movimientos dirigidos.<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Su rendimiento académico durante el año escolar en la asignatura fue Alto. Felicitaciones.<br>2.) su rendimiento académico en el año escolar en la asignatura fue Superior.
Felicitaciones.<br>3.) su rendimiento académico en el año escolar en la asignatura  fue Básico.
Sigue trabajando para que cada día seas mejor.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Desarrollo Cognitivo</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Permanece atento a las explicaciones
<br>2.) Utiliza su propio vocabulario para expresar lo entendido
<br>3.) Se desempeña efectivamente en el desarrollo de actividades.<br>4.) Participa activamente en clases.<br>5.) Estudia con dedicación y entusiasmo.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Expresa lo que siente y piensa usando palabras sencillas.<br>2.) Permanece atento a las explicaciones.<br>3.) Es participativo en clases.<br>4.) Estudia con dedicación y entusiasmo.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Participa en las explicaciones y muestra interés por aprender.<br>2.) Percibe  con facilidad estímulos visuales,táctiles y gustativos.<br>3.) Eres un niño(a) con muchas capacidades sigue adelante que puedes llegar donde quieres.<br>4.) Recuerda con facilidad los conocimientos.<br>5.) Estudia con dedicación y entusiasmo<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Recuerda con facilidad los conocimientos.<br>2.) Es ágil para memorizar frases y canciones cortas.<br>3.) Realiza las actividades de acuerdo a las explicaciones dadas en clase.<br>4.) Participa activamente en clases estudia con dedicación y entusiasmo.
<br>5.) Maneja correctamente los materiales de trabajo.<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Participa activamente en clases asimila nuevos conceptos con mucha facilidad.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Desarrollo Psicomotriz</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Se muestra activo y dinámico en la jornada escolar.
<br>2.) Demuestra habilidad en el rasgado
<br>3.) A través de las actividades desarrolladas ha  mejorado su motricidad.<br>4.) Logra identificar cada una de las partes de su cuerpo.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Adquiere habilidad para rasgar, pegar, colorear y punzar dentro del contorno.<br>2.) Se recomienda seguir afianzando su motricidad fina<br>3.) Hace buen uso de los materiales didácticos utilizados en clase.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Se requiere seguir afianzando el desarrollo de su motricidad fina.<br>2.) Demuestra habilidades para rasgar y colorear.
<br>3.) Es capaz de reteñir algunos trazos por sí solo(a).<br>4.) A través de actividades ha mejorado su motricidad.<br>5.) Sus movimientos corporales son equilibrados<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Logra identificar cada una de las partes de su cuerpo.<br>2.) Te felicito  tuviste una buena motricidad.<br>3.) Coordina bien sus movimientos eres un niño (a) activo en las actividades propuestas en clase.<br>4.) Sus movimientos corporales son equilibrados.<br>5.) Su motricidad fina no está bien desarrollada.<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Se muestra activo y dinámico en la jornada escolar le gusta integrarse con los demás compañeros.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Desarrollo Socio Afectivo</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Cuida sus elementos de trabajo.
<br>2.) Se integra con facilidad al grupo.<br>3.) Acepta y acata las sugerencias de la docente.<br>4.) Es amable y cariñoso.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Expresa con facilidad sus sentimientos.<br>2.) Cuida y comparte juguetes con sus amiguitos en horas de descanso, juegos y rondas.<br>3.) Le gusta compartir con sus compañeritos. <br>4.) Reconoce su nombre.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Ama a su familia e identifica los integrantes en ella.<br>2.) Disfruta de pertenecer al grupo manifestando respeto a sus compañeros.
<br>3.) Le gusta compartir, jugar y aprender con sus compañeros.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Se relaciona fácilmente con sus amigos.<br>2.) Es muy popular en el grupo.<br>3.) Es puntual y responsable con sus actividades escolares.
<br>4.) Trata con respeto a sus compañeros y profesores
es amable y cariñoso(a).
<br>5.) Se le observa buena disciplina,se comporta bien dentro y fuera del salón de clase.
<br>6.) Asiste puntualmente a clases.<br>7.) Su presentación personal fue muy buena.<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Demostró ser respetuoso con sus compañeros y profesores.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Desarrollo Físico</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Su estado de salud es normal.
<br>2.) Demuestra entusiasmo y energía al realizar sus actividades escolares.
<br>3.) Su presentación personal es muy buena.
<br>4.) Su uniforme esta completo y en buen estado.<br>5.) Mantiene un olor agradable.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Mantiene el cabello limpio y peinado.<br>2.) Disfruta de las actividades lúdicas&nbsp; libres o dirigidas y de tareas de movimiento con y sin obstáculos.<br>3.) Aplica movimientos a través de actividades lúdicas como: Caminar, correr saltar.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Su higiene personal es excelente conserva su cabello limpio y presentado.<br>2.) Se divierte  en actividades como rondas y juegos lúdicos  utilizando gestos agradables y respetuosos.<br>3.) Participa en actividades lúdicas con otros niños.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Demuestra entusiasmo por las actividades del plantel.
<br>2.) Su presentación personal es impecable.<br>3.) Presenta un desarrollo físico acorde a su edad cronológica.<br>4.) Su uniforme está completo y en buen estado.<br>5.) Sus útiles escolares están completos,organizados y
Mantiene el cabello limpio y bien peinado.
<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Su buen estado de salud le permitió desarrollar todas sus actividades escolares.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Habilidades Comunicativas</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote>1.) Interactúa con sus compañeros mediante el juego ampliando así su vocabulario.<br>2.) Utiliza un  vocabulario adecuado  y  acorde con su nivel.<br>3.) Utiliza un buen vocabulario.<br></blockquote><br><b>Periodo: 2</b><blockquote>1.) Entiende y disfruta de la lectura de cuentos.<br>2.) Expresa sus sentimientos e inquietudes.<br>3.) Su lenguaje oral es correcto.<br>4.) Habla en publico con el lenguaje apropiado para su edad y grado.<br>5.) Utiliza un buen vocabulario.<br></blockquote><br><b>Periodo: 3</b><blockquote>1.) Experimenta y retiñe algunos trazos por sí solo(a).
<br>2.) Expresa verbalmente narraciones cortas y sencillas sobre sus vivencias.<br>3.) Su vocabulario ha sido enriquecido ya que ha obtenido nuevos conocimientos.<br>4.) Presenta una vocalización clara y correcta.<br></blockquote><br><b>Periodo: 4</b><blockquote>1.) Entiende y disfruta de la lectura de cuentos infantiles.<br>2.) Se expresa adecuadamente y espontáneamente de acuerdo a su edad.<br>3.) Manifiesta sus deseos e inquietudes espontáneamente.<br>4.) Utiliza un buen vocabulario a hora de establecer una conversación.<br>5.) Eres un niño(a) muy tierno y delicado y a pesar de tu edad te expresas muy bien te felicito.<br></blockquote><br><b>Periodo: 5</b><blockquote>1.) Eres un niño muy tierno y delicado y a pesar de tu edad te expresas muy bien te felicito.<br>2.) Eres una niña muy tierna y delicada y a pesar de tu edad te expresas muy bien te felicito.<br></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Conducta</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote></blockquote><br><b>Periodo: 2</b><blockquote></blockquote><br><b>Periodo: 3</b><blockquote></blockquote><br><b>Periodo: 4</b><blockquote></blockquote><br><b>Periodo: 5</b><blockquote></blockquote><table width="100%" border="1" cellpadding="3" cellspacing="0">
			 <tbody><tr>
			<td width="50%">Asignatura: <b>Disciplina</b></td>
			<td width="50%">Docente: <b>Zabaleta Silva Erlinda Teresa</b></td>
			</tr></tbody></table><br><br><b>Periodo: 1</b><blockquote></blockquote><br><b>Periodo: 2</b><blockquote></blockquote><br><b>Periodo: 3</b><blockquote></blockquote><br><b>Periodo: 4</b><blockquote></blockquote><br><b>Periodo: 5</b><blockquote></blockquote> 	 
	 </div></center></td>
	</tr>
</tbody></table>


</body></html>`;
}
