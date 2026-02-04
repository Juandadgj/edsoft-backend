const html = String.raw;

export function numericAlphabeticAllTemplate(student, data) {
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

    

                      <td>CG: <strong> ( 2.0 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Identifica y establece la relación entre los conjuntos de

                        los números Naturales, Enteros, Racionales, Irracionales y

                        Reales.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Resuelve expresiones con potencias y radicales teniendo en

                        cuenta sus propiedades.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Racionaliza expresiones con denominadores radicales.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Identifica los números imaginarios y resuelve operaciones

                        entre números complejos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Se le dificulta racionalizar expresiones con denominadores

                        radicales.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        No resuelve claramente operaciones entre números complejos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>7. </b></td>

    

                      <td width="78%">

                        Se recomienda ser más puntual con las actividades

                        propuestas.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>8. </b></td>

    

                      <td width="78%">

                        Establece relaciones de orden en el conjunto de los números

                        reales; aproxima a decimales; y aplica las propiedades

                        algebraicas de los números reales en el cálculo de

                        operaciones (adición, producto, potencias, raíces).

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>9. </b></td>

    

                      <td width="78%">

                        Demuestra interés, esfuerzo y perseverancia frente a la

                        resolución de problemas y la búsqueda de nuevas soluciones

                        para problemas reales.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>10. </b></td>

    

                      <td width="78%">

                        Se le dificulta resolver expresiones con potencias y

                        radicales teniendo en cuenta sus propiedades.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>11. </b></td>

    

                      <td width="78%">Debe mostrar mayor interés por el área.</td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>12. </b></td>

    

                      <td width="78%">

                        En ocasiones resuelve expresiones con potencias y radicales

                        teniendo en cuenta sus propiedades.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Geometría (Matemáticas)</strong></td>

    

                      <td>Doc.: <strong>Zabaleta Flórez Rafael Antonio</strong></td>

    

                      <td>CG: <strong> ( 2.0 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Comprende los criterios de semejanza en figuras geométricas.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Demuestra interés, esfuerzo y perseverancia frente a la

                        resolución de problemas y la búsqueda de nuevas soluciones

                        para problemas reales.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Aplica el Teorema de Tales para demostrar semejanza entre

                        segmentos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        No presentó las actividades asignadas durante el período.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Se le recomienda ser más puntual con las actividades

                        asignadas.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        Aplicar propiedades de semejanza y de proporcionalidad a

                        modelos a escala y otras situaciones de la vida diaria y

                        otras asignaturas.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>7. </b></td>

    

                      <td width="78%">

                        Construye tablas de verdad a partir de los conectivos

                        lógicos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Estadística (Matemáticas)</strong></td>

    

                      <td>Doc.: <strong>Zabaleta Flórez Rafael Antonio</strong></td>

    

                      <td>CG: <strong> ( 4.0 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Reconoce e identifica las medidas de tendencia central y las

                        medidas de posición en un conjunto de datos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Calcula e interpreta las medidas de tendencia central (Moda,

                        Mediana y media Aritmética) de un conjunto de datos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Se recomienda ser más puntual con las actividades

                        propuestas.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Encuentra e interpreta los percentiles, deciles y cuartiles

                        en un conjunto de datos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Caracteriza variables cuantitativas para datos agrupados.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        Representa gráficamente información estadística, mediante

                        tablas de distribución de frecuencias y con el uso de la

                        tecnología. Interpreta y codifica información a través de

                        gráficas. Valora la claridad, el orden y la honestidad en el

                        tratamiento y presentación de datos. Promueve el trabajo

                        colaborativo en el análisis crítico de la información

                        recibida de los medios de comunicación.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area: <strong>Lengua Castellana (Humanidades)</strong>

                      </td>

    

                      <td>Doc.: <strong>Pérez Osorio Daniela Rosa</strong></td>

    

                      <td>CG: <strong> ( 3.2 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Reconoce las características de la literatura precolombina.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Distingue entre oraciones simples y compuestas.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Comprende los mecanismos léxicos y gramaticales que dan

                        cohesión a un texto .

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Interpreta de forma oral un mito precolombino.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Presenta dificultad para interpretar de forma oral un mito

                        precolombino.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        Reconoce la diferencia entre las siglas, las abreviaturas y

                        los acrónimos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>7. </b></td>

    

                      <td width="78%">

                        Presenta dificultad para diferenciar las siglas, las

                        abreviaturas y los acrónimos

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>8. </b></td>

    

                      <td width="78%">

                        Presenta dificultad para comprender y utilizar los

                        mecanismos léxicos y gramaticales que dan cohesión a un

                        texto.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>9. </b></td>

    

                      <td width="78%">

                        Presenta dificultad para distinguir oraciones simples y

                        compuestas.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>10. </b></td>

    

                      <td width="78%">

                        Presenta dificultad para reconocer las características

                        principales de la literatur precolombina.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area: <strong>Comprensión Lectora (Humanidades)</strong>

                      </td>

    

                      <td>Doc.: <strong>Pérez Osorio Daniela Rosa</strong></td>

    

                      <td>CG: <strong> ( 4.3 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Expresa con claridad sus puntos de vista y respeta el de los

                        demás.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Responde correctamente preguntas de acuerdo a un texto

                        leído.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Lee un texto y extrae las ideas principales.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Se le dificulta responder correctamente preguntas de acuerdo

                        a un texto leído.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">No presentó las actividades asignadas</td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Inglés (Inglés)</strong></td>

    

                      <td>Doc.: <strong>Pernett Martínez Glenis</strong></td>

    

                      <td>CG: <strong> ( 4 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Construye textos orales y escritos empleando cada uno de los

                        saludo

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Construye diálogos orales y escritos empleando la

                        información personal.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Reconoce los verbos regulares e irregulares en presente,

                        pasado y participio pasado, en diferentes textos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Construye oraciones afirmativas, negativas e interrogativas

                        en presente simple, pasado simple, presente progresivo,

                        pasado progresivo y futuro simple.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Se le dificulta construir textos orales y escritos empleando

                        cada uno de los saludo

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        Se le dificulta Construir diálogos orales y escritos

                        empleando la información personal.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>7. </b></td>

    

                      <td width="78%">

                        Se le dificulta reconocer los verbos regulares e irregulares

                        en presente, pasado y participio pasado, en diferentes

                        textos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>8. </b></td>

    

                      <td width="78%">

                        Se le dificulta construir oraciones afirmativas, negativas e

                        interrogativas en presente simple, pasado simple, presente

                        progresivo, pasado progresivo y futuro simple.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Historía (Ciencias Sociales)</strong></td>

    

                      <td>

                        Doc.: <strong>Castillo Arrieta Cesar Augusto </strong>

                      </td>

    

                      <td>CG: <strong> ( 2.7 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Reconoce y explica las causas y desarrollo de la primera

                        Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Reconoce las principales causas de la Primera Guerra

                        Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Reconoce algunos aspectos de la primera Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Se le dificultad reconocer y explicar las causas y el

                        desarrollo de la primera Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Reconoce los procesos políticos, sociales y económicos que

                        antecedieron en la Primera Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        Reconoce los principales procesos políticos, sociales y

                        económicos que antecedieron la primera Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>7. </b></td>

    

                      <td width="78%">

                        Reconoce algunos procesos políticos, sociales y económicos

                        que antecedieron la primera Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>8. </b></td>

    

                      <td width="78%">

                        Presenta dificultad para reconocer procesos políticos,

                        sociales y económicos que antecedieron la primera Guerra

                        Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>9. </b></td>

    

                      <td width="78%">

                        Reconoce la ubicación geográfica y las diferentes alianzas

                        de los países que participaron en la Primera Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>10. </b></td>

    

                      <td width="78%">

                        Reconoce la ubicación geográfica de la mayoría de los países

                        que participaron en la Primera Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>11. </b></td>

    

                      <td width="78%">

                        Reconoce la ubicación de algunos países que participaron en

                        la primera Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>12. </b></td>

    

                      <td width="78%">

                        Presenta dificultades para ubicar geográficamente algunos

                        países que participaron en la Primera Guerra Mundial.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Geografía (Ciencias Sociales)</strong></td>

    

                      <td>Doc.: <strong>Naizir González Yiseth</strong></td>

    

                      <td>CG: <strong> ( 2.2 )</strong></td>

    

                      <td>Fallas: <strong>1</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Comprende qué es la geografía de la población y cuál es su

                        objeto de estudio.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Identifica los principales conceptos relacionados con el

                        estudio de la geografía regional.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Debate sobre la importancia de la geografía económica en el

                        desarrollo de las naciones y su relación con otras ciencias.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Después de realizar las actividades de refuerzo y

                        superación, alcanzó los logros propuestos en este periodo en

                        un nivel básico.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Después de realizar las actividades de refuerzo y

                        superación, no alcanzó los logros propuestos en este

                        periodo.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        Comprende Satisfactoriamente el papel de Estados Unidos en

                        la política exterior que lo llevo a dominar el mundo.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

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

    

                      <td>CG: <strong> ( 3.4 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Explica claramente los principios teóricos y prácticos que

                        han permitido el desarrollo de la biología molecular como

                        una ciencia que beneficia directamente a los seres humanos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Explica suficientemente los principios teóricos y prácticos

                        que han permitido el desarrollo de la biología molecular

                        como una ciencia que beneficia directamente a los seres

                        humanos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Explica de manera general, los principios teóricos y

                        prácticos que han permitido el desarrollo de la biología

                        molecular como una ciencia; establece algunas relaciones

                        sobre su importancia para el beneficio humano.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Se le dificulta explicar los principios teóricos y prácticos

                        que han permitido el desarrollo de la biología molecular,

                        así como su aplicación en procesos básicos y su relación con

                        el bienestar humano.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Reconoce y Relaciona de forma rigurosa la terminología

                        propia de la biología molecular como disciplina que estudia

                        los procesos vitales de los seres vivos en función de las

                        características de su estructura molecular.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        Reconoce y Relaciona la terminología propia de la biología

                        molecular como disciplina que estudia los procesos vitales

                        de los seres vivos en función de las características de su

                        estructura molecular.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>7. </b></td>

    

                      <td width="78%">

                        Reconoce de manera general de la terminología propia la

                        biología molecular como disciplina que estudia los procesos

                        vitales de los seres vivos en función de las características

                        de su estructura molecular.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>8. </b></td>

    

                      <td width="78%">

                        Conoce escasamente la terminología propia de la biología

                        molecular como disciplina que estudia los procesos vitales

                        de los seres vivos en función de las características de su

                        estructura molecular.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

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

    

                      <td>CG: <strong> ( 3.4 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Reconoce claramente la importancia de los aportes realizados

                        por los científicos a través de los tiempos y la química

                        como ciencia experimental.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Reconoce la importancia de los aportes realizados por los

                        científicos a través de los tiempos y la química como

                        ciencia experimental.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Reconoce aspectos básicos de los aportes realizados por los

                        científicos a través de los tiempos y de la química como

                        ciencia experimental.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Conoce pocos aspectos de los aportes realizados por los

                        científicos a través de los tiempos y de la química como

                        ciencia experimental.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Comprende plenamente el concepto de la materia diferenciando

                        sus estados, propiedades y las unidades básicas de medidas

                        mediante la observación, análisis y medición de elementos

                        que se encuentran en su entorno para conocer su importancia

                        en la vida diaria.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        Comprende el concepto de la materia diferenciando sus

                        estados, propiedades y las unidades básicas de medidas

                        mediante la observación, análisis y medición de elementos

                        que se encuentran en su entorno para conocer su importancia

                        en la vida diaria.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>7. </b></td>

    

                      <td width="78%">

                        Comprende aspectos básicos de la materia diferenciando sus

                        estados, propiedades y las unidades básicas de medidas

                        mediante la observación, análisis y medición de elementos

                        que se encuentran en su entorno para conocer su importancia

                        en la vida diaria.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>8. </b></td>

    

                      <td width="78%">

                        Conoce pocos aspectos de la materia, se le dificulta

                        diferenciar sus estados, propiedades y las unidades básicas

                        de medidas mediante la observación, análisis y medición de

                        elementos que se encuentran en su entorno para conocer su

                        importancia en la vida diaria.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

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

    

                      <td>CG: <strong> ( 2.0 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Resuelve problemas simples de movimiento rectilíneo uniforme

                        (M.R.U) aplicando los conceptos de la cinemática, y las

                        relaciones matemáticas entre ellos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Establece la relación entre los diferentes tipos de Ondas

                        según los diferentes criterios y los identifica claramente

                        al observar el fenomeno en el mundo real.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Identifica y calcula la Amplitud, Longitud de Onda, Período

                        y frecuencia de una onda.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Establece la relación entre Reflexión, Refracción e

                        Interferencia de Ondas además de identificar las

                        características de estos fenómenos ondulatorios en la

                        naturaleza.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>5. </b></td>

    

                      <td width="78%">

                        Se le dificulta resolver problemas de movimiento

                        ondulatorio.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>6. </b></td>

    

                      <td width="78%">

                        Se recomienda ser más puntual con las actividades

                        propuestas.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

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

    

                      <td>CG: <strong> ( 4.8 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Reconoce las características del componente lógico del

                        computador (software), su clasificación y emplea

                        herramientas y medidas de seguridad para evitar daños,

                        mejorar su desempeño y preservar la información almacenada.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Define con propiedad los conceptos de software, sistema

                        operativo, aplicaciones, virus, antivirus y establece

                        ejemplos de cada uno de ellos.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Organiza con propiedad la información en el computador

                        (guardar, copiar, archivos y carpetas)

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Asiste regularmente a clases debe cumplir con las

                        actividades académicas asignadas en el tiempo acordado.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

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

    

                      <td>CG: <strong> ( 4.0 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Analiza las distintas formas de violencia.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Comprende la importancia de escuchar el punto de vista de

                        los demás.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

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

    

                      <td>CG: <strong> ( 4.0 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Reconoce la dimensión ética y moral de la persona de acuerdo

                        a los diferentes contexto socio culturales.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>

                        Area:

    

                        <strong>Educación Artística (Educación Artística)</strong>

                      </td>

    

                      <td>Doc.: <strong>Padilla Tobio Juan Carlos</strong></td>

    

                      <td>CG: <strong> ( 3.9 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Debe procurar ser puntual y responsable en la entrega de sus

                        actividades escolares asumiendo con constancia los acuerdos

                        pactados en clases.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Comprende los conceptos de la cuadrícula cómo técnica del

                        dibujo y los aplica de manera sobresaliente.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

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

    

                      <td>CG: <strong> ( 3.9 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Debe ser más responsable con la entrega de sus actividades

                        de educacional físicas propuestas en clase.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Debe mejorar su participación en actividades físicas para

                        mejorar su desarrollo de capacidades

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Muestra gran nível de capacidades físicas desarrolladas a lo

                        largo de su formación física escolar

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Cátedra De Páz</strong></td>

    

                      <td>

                        Doc.: <strong>Castillo Arrieta Cesar Augusto </strong>

                      </td>

    

                      <td>CG: <strong> ( 4.0 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        Reconoce y valora la importancia de la convivencia con los

                        demás y la relación con el medio ambiente.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Reconoce y valora la importancia de la convivencia con los

                        demás.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Reconoce la importancia de algunos aspectos de la

                        convivencia.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>4. </b></td>

    

                      <td width="78%">

                        Se le dificulta reconocer y valorar la importancia de la

                        convivencia con los demás.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Conducta</strong></td>

    

                      <td>Doc.: <strong>Díaz Soto Cristian Camilo</strong></td>

    

                      <td>CG: <strong> ( 5.0 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br />

    

                <table width="100%" border="1" cellpadding="3" cellspacing="0">

                  <tbody>

                    <tr>

                      <td>Area: <strong>Disciplina</strong></td>

    

                      <td>Doc.: <strong>Díaz Soto Cristian Camilo</strong></td>

    

                      <td>CG: <strong> ( 5.0 )</strong></td>

    

                      <td>Fallas: <strong>0</strong></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>1. </b></td>

    

                      <td width="78%">

                        A menudo llega tarde a la jornada escolar.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>2. </b></td>

    

                      <td width="78%">

                        Demuestra interés en su proceso de aprendizaje y tiene un

                        excelente comportamiento.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <table width="100%" border="0" cellpadding="0" cellspacing="0">

                  <tbody>

                    <tr>

                      <td width="2%" valign="top"><b>3. </b></td>

    

                      <td width="78%">

                        Demuestra interés en su proceso de aprendizaje y tiene un

                        excelente comportamiento.

                      </td>

    

                      <td width="20%" align="right" valign="top"><b></b></td>

                    </tr>

                  </tbody>

                </table>

    

                <br /><br /><br />

    

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
