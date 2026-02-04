const html = String.raw;

export function gradeWithIndicatorsTemplate(student, data) {
  return html`

    <html>

      <head>

        <style>

          body {

            transition: opacity ease-in 0.2s;

          }

    

          body[unresolved] {

            opacity: 0;

    

            display: block;

    

            overflow: hidden;

    

            position: relative;

          }

        </style>

    

        <title>Imprimir</title>

    

        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

    

        <style>

          H1.SaltoDePagina {

            page-break-after: always;

          }

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

          <tbody>

            <tr>

              <td valign="top">

                <table width="100%">

                  <tbody>

                    <tr height="80">

                      <td align="center" valign="middle">

                        <img

                          src="../../fotos/1002/logo.jpg"

                          width="70"

                          height="80"

                        />

                      </td>

    

                      <td align="center" width="90%">

                        <font size="4">

                          INSTITUCIÓN EDUCATIVA GIMNASIO DEL SAN JORGE </font

                        ><br />

    

                        <center>

                          Programa para el Desarrollo Integral de Niños y Niñas

    

                          <br />

    

                          CRA 24 Nº 20 - 65 Tel 2954011 San Marcos- Sucre

    

                          <br />Email: gimnsanjorge@hotmail.com

    

                          <br />

    

                          <br />

                        </center>

                      </td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Est: <strong>Díaz Villareal Santiago José</strong></td>

    

                      <td>Grado: <strong>Noveno A Mañana</strong></td>

    

                      <td>Per: <strong>1 año 2022</strong></td>

    

                      <td>Usuario: <strong>e1104417395</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Matemáticas (Matemáticas)</strong></td>

    

                      <td>Doc.: <strong>Zabaleta Flórez Rafael Antonio</strong></td>

    

                      <td>CG: <strong>2.0</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Se recomienda ser más puntual con las actividades

                        propuestas.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="94%">

                        Se le dificulta resolver expresiones con potencias y

                        radicales teniendo en cuenta sus propiedades.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="94%">Debe mostrar mayor interés por el área.</td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Geometría (Matemáticas)</strong></td>

    

                      <td>Doc.: <strong>Zabaleta Flórez Rafael Antonio</strong></td>

    

                      <td>CG: <strong>2.0</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Estadística (Matemáticas)</strong></td>

    

                      <td>Doc.: <strong>Zabaleta Flórez Rafael Antonio</strong></td>

    

                      <td>CG: <strong>4.0</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Caracteriza variables cuantitativas para datos agrupados.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="94%">

                        Representa gráficamente información estadística, mediante

                        tablas de distribución de frecuencias y con el uso de la

                        tecnología. Interpreta y codifica información a través de

                        gráficas. Valora la claridad, el orden y la honestidad en el

                        tratamiento y presentación de datos. Promueve el trabajo

                        colaborativo en el análisis crítico de la información

                        recibida de los medios de comunicación.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area: <strong>Lengua Castellana (Humanidades)</strong>

                      </td>

    

                      <td>Doc.: <strong>Pérez Osorio Daniela Rosa</strong></td>

    

                      <td>CG: <strong>3.2</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Reconoce las características de la literatura precolombina.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="94%">

                        Presenta dificultad para distinguir oraciones simples y

                        compuestas.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area: <strong>Comprensión Lectora (Humanidades)</strong>

                      </td>

    

                      <td>Doc.: <strong>Pérez Osorio Daniela Rosa</strong></td>

    

                      <td>CG: <strong>4.3</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Expresa con claridad sus puntos de vista y respeta el de los

                        demás.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="94%">

                        Responde correctamente preguntas de acuerdo a un texto

                        leído.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Inglés (Inglés)</strong></td>

    

                      <td>Doc.: <strong>Pernett Martínez Glenis</strong></td>

    

                      <td>CG: <strong>4</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Se le dificulta construir textos orales y escritos empleando

                        cada uno de los saludo

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="94%">

                        Se le dificulta Construir diálogos orales y escritos

                        empleando la información personal.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Historía (Ciencias Sociales)</strong></td>

    

                      <td>

                        Doc.: <strong>Castillo Arrieta Cesar Augusto </strong>

                      </td>

    

                      <td>CG: <strong>2.7</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Se le dificultad reconocer y explicar las causas y el

                        desarrollo de la primera Guerra Mundial.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Geografía (Ciencias Sociales)</strong></td>

    

                      <td>Doc.: <strong>Naizir González Yiseth</strong></td>

    

                      <td>CG: <strong>2.2</strong></td>

    

                      <td>Fallas: <strong>1</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Después de realizar las actividades de refuerzo y

                        superación, no alcanzó los logros propuestos en este

                        periodo.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area:

    

                        <strong

                          >Ciencias Naturales Y Educación Ambiental (Ciencias

                          Naturales Y Educación Ambiental)</strong

                        >

                      </td>

    

                      <td>Doc.: <strong>Díaz Soto Cristian Camilo</strong></td>

    

                      <td>CG: <strong>3.4</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Explica de manera general, los principios teóricos y

                        prácticos que han permitido el desarrollo de la biología

                        molecular como una ciencia; establece algunas relaciones

                        sobre su importancia para el beneficio humano.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area:

    

                        <strong

                          >Química (Ciencias Naturales Y Educación

                          Ambiental)</strong

                        >

                      </td>

    

                      <td>Doc.: <strong>Díaz Soto Cristian Camilo</strong></td>

    

                      <td>CG: <strong>3.4</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Comprende aspectos básicos de la materia diferenciando sus

                        estados, propiedades y las unidades básicas de medidas

                        mediante la observación, análisis y medición de elementos

                        que se encuentran en su entorno para conocer su importancia

                        en la vida diaria.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area:

    

                        <strong

                          >Física (Ciencias Naturales Y Educación Ambiental)</strong

                        >

                      </td>

    

                      <td>Doc.: <strong>Zabaleta Flórez Rafael Antonio</strong></td>

    

                      <td>CG: <strong>2.0</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Se le dificulta resolver problemas de movimiento

                        ondulatorio.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="94%">

                        Se recomienda ser más puntual con las actividades

                        propuestas.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area:

    

                        <strong

                          >Tecnología E Informatica (Tecnología E

                          Informática)</strong

                        >

                      </td>

    

                      <td>Doc.: <strong>Ramos Montiel Aura María</strong></td>

    

                      <td>CG: <strong>4.8</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Reconoce las características del componente lógico del

                        computador (software), su clasificación y emplea

                        herramientas y medidas de seguridad para evitar daños,

                        mejorar su desempeño y preservar la información almacenada.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="94%">

                        Define con propiedad los conceptos de software, sistema

                        operativo, aplicaciones, virus, antivirus y establece

                        ejemplos de cada uno de ellos.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="94%">

                        Organiza con propiedad la información en el computador

                        (guardar, copiar, archivos y carpetas)

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area:

    

                        <strong

                          >Educación Ética Y Valores Humanos (Educación Ética Y

                          Valores Humanos)</strong

                        >

                      </td>

    

                      <td>Doc.: <strong>Caballero Doria Erika Mirley</strong></td>

    

                      <td>CG: <strong>4.0</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Analiza las distintas formas de violencia.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area:

    

                        <strong>Educación Religiosa (Educación Religiosa)</strong>

                      </td>

    

                      <td>

                        Doc.: <strong>Castillo Arrieta Cesar Augusto </strong>

                      </td>

    

                      <td>CG: <strong>4.0</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Reconoce la dimensión ética y moral de la persona de acuerdo

                        a los diferentes contexto socio culturales.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area:

    

                        <strong>Educación Artística (Educación Artística)</strong>

                      </td>

    

                      <td>Doc.: <strong>Padilla Tobio Juan Carlos</strong></td>

    

                      <td>CG: <strong>3.9</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Debe procurar ser puntual y responsable en la entrega de sus

                        actividades escolares asumiendo con constancia los acuerdos

                        pactados en clases.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area:

    

                        <strong

                          >Educación Física, Recreación Y Deportes (Educación

                          Física, Recreación Y Deportes )</strong

                        >

                      </td>

    

                      <td>Doc.: <strong>Padilla Tobio Juan Carlos</strong></td>

    

                      <td>CG: <strong>3.9</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Muestra gran nível de capacidades físicas desarrolladas a lo

                        largo de su formación física escolar

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Cátedra De Páz</strong></td>

    

                      <td>

                        Doc.: <strong>Castillo Arrieta Cesar Augusto </strong>

                      </td>

    

                      <td>CG: <strong>4.0</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Reconoce y valora la importancia de la convivencia con los

                        demás y la relación con el medio ambiente.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Conducta</strong></td>

    

                      <td>Doc.: <strong>Díaz Soto Cristian Camilo</strong></td>

    

                      <td>CG: <strong>5.0</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Disciplina</strong></td>

    

                      <td>Doc.: <strong>Díaz Soto Cristian Camilo</strong></td>

    

                      <td>CG: <strong>5.0</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="94%">

                        Demuestra interés en su proceso de aprendizaje y tiene un

                        excelente comportamiento.

                      </td>

    

                      <td width="4%" align="right" valign="bottom"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <b>Observación</b>

    

                <hr />

    

                <br />

    

                <hr />

    

                <br /><br />

    

                <table width="100%" border="0" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td align="center" width="35%">

                        <hr />

    

                        <b>Glenis Pernett Martínez</b><br />Rector(a)

                      </td>

    

                      <td align="center" width="30%"></td>

    

                      <td align="center" width="35%">

                        <hr />

    

                        <b>Díaz Soto Cristian Camilo</b><br />Profesor de grupo

                      </td>

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
