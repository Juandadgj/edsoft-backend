function matricula() {
  return `
 <html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <style>
     body {
       margin: 0;
       padding: 10px;
       font-family: "Arial", sans-serif;
       font-size: 12px;
     }
     header {
       text-align: center;
     }
     header div {
       display: flex;
       justify-content: flex-start;
     }
     header div img {
       display: block;
       margin: 0 auto;
       width: 100px;
       height: 100px;
     }
     table {
       border-collapse: collapse;
       width: 650px;
       margin-left: auto;
       margin-right: auto;
     }
     th,
     td {
       border: 1px solid black;
       padding: 3px;
       text-align: center;
       font-size: 12px;
     }
     th {
       background-color: #f2f2f2;
     }
     p {
       margin-top: 0px;
       margin-bottom: 0px;
     }
   </style>
 </head>
 <body>
   <header style="display: flex; justify-content: center; align-items: center">
     <div>
       <img
         src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-logo-design-template-b3bfdceb55d1cbc48f1ce50fd4e1ef24_screen.jpg?ts=1629941736"
         alt="Header Image"
       />
     </div>
     <h1>Institucion Educativa San Marcos Mañana</h1>
   </header>

   <div></div>
   <br />
   <table>
     <tr>
       <td><b>HOJA DE MATRICULA - 2023 </b></td>
     </tr>
     <tr>
       <td><b>INFORACION DEL ESTUDIANTE </b></td>
     </tr>
   </table>
   <table>
     <tr>
       <th>Apellidos y Nombres del Estudiante</th>
       <td>Sexo</td>
       <td>Tipo de documento</td>
       <td>No. Documento de identidad</td>
       <td>Expedido en</td>
     </tr>
     <tr>
       <th>Luis Esteban Alvarez Baldovino</th>
       <td>Masculino</td>
       <td>Tarjeta de Identidad</td>
       <td>1104428381</td>
       <td>San Marcos</td>
     </tr>
   </table>
   <table>
     <tr>
       <td rowspan="2">No. De Matrícula</td>
       <td rowspan="2">Lugar y fecha de matrícula</td>
       <td rowspan="2">Jornada</td>
       <td rowspan="2">Grado</td>
       <td colspan="3">ESTADO</td>
     </tr>
     <tr>
       <td>Nuevo</td>
       <td>Antiguo</td>
       <td>Repitente</td>
     </tr>
     <tr>
       <td>1059202431416</td>
       <td>San Marcos, Sucre, 2024-01-23 08:04:27</td>
       <td>Mañana</td>
       <td>Quinto 1</td>
       <td>Si</td>
       <td>No</td>
       <td>No</td>
     </tr>
   </table>
   <table>
     <tr>
       <td colspan="3">Lugar y fecha de nacimiento (dd/mm/aaaa)</td>
       <td rowspan="3">Edad</td>
       <td rowspan="3">EPS</td>
       <td rowspan="3">Categoría SISBEN</td>
       <td rowspan="3">RH</td>
       <td rowspan="3">Deficiencia</td>
     </tr>
     <tr>
       <td colspan="3">San Marcos</td>
     </tr>
     <tr>
       <td colspan="3">07-11-2012</td>
     </tr>
     <tr>
       <td>07 (dd)</td>
       <td>11 (mm)</td>
       <td>2012 (aaaa)</td>
       <td>11</td>
       <td>Subsidiado IPS VIDA PLENA</td>
       <td>A1</td>
       <td>B+</td>
       <td></td>
     </tr>
   </table>
   <table>
     <tr></tr>
     <tr></tr>
   </table>
   <table>
     <tbody>
       <tr>
         <td>Dirección (Actual nomenclatura)</td>
         <td>Barrio</td>
         <td>Ciudad</td>
         <td>Estrato</td>
         <td>Teléfono</td>
       </tr>
       <tr>
         <td>SAN RAFAEL 2</td>
         <td>SAN RAFAEL 2</td>
         <td>San Marcos</td>
         <td>1</td>
         <td>3218147694</td>
       </tr>
     </tbody>
   </table>
   <table>
     <tbody>
       <tr>
         <td colspan="5">
           <b
             >Población Víctima del Conflicto (Debe presentar la certificación
             correspondiente)</b
           >
         </td>
       </tr>
       <tr>
         <td colspan="4">
           Beneficiario Hijos dependientes de Madre Cabeza de Familia:
         </td>
         <td>SI</td>
       </tr>
       <tr>
         <td colspan="4">Alumno Madre Cabeza de Familia:</td>
         <td></td>
       </tr>
       <tr>
         <td colspan="4">Beneficiario Veterano Fuerza Pública</td>
         <td></td>
       </tr>
       <tr>
         <td colspan="4">Beneficiario Héroe Nación:</td>
         <td></td>
       </tr>
       <tr>
         <td>En situación de desplazamiento</td>
         <td>Departamento<br />expulsor</td>
         <td>NO</td>
         <td>Minicipio<br />expulsor</td>
         <td></td>
       </tr>
     </tbody>
   </table>
   <table>
     <tbody>
       <tr>
         <td colspan="3">
           <b>Procedencia Académica (instituciones anteriores)</b>
         </td>
       </tr>
       <tr>
         <td>AÑO</td>
         <td>Nombre de la Institución</td>
         <td>Grado</td>
       </tr>
       <tr>
         <td>2023</td>
         <td>San José</td>
         <td>Cuarto</td>
       </tr>
     </tbody>
   </table>
   <table>
     <tbody>
       <tr>
         <td colspan="6"><b>Información familiar</b></td>
       </tr>
       <tr>
         <td></td>
         <td>Nombre</td>
         <td>Documento</td>
         <td>Celular</td>
         <td>Fecha Nacimiento</td>
         <td>Dirección</td>
       </tr>
       <tr>
         <td>Madre</td>
         <td>Liliana Patricia Baldovino Diaz</td>
         <td>1104412125</td>
         <td>3218147694</td>
         <td>1997-07-30</td>
         <td>SAN RAFAEL 2</td>
       </tr>
       <tr>
         <td>Padre</td>
         <td>Luis Miguel Alvarez Corpo</td>
         <td>1104426502</td>
         <td></td>
         <td></td>
         <td>BOGOTA</td>
       </tr>
       <tr>
         <td>Acudiente</td>
         <td>Liliana Patricia Baldovino Diaz</td>
         <td>1104412125</td>
         <td>3218147694</td>
         <td>1997-07-30</td>
         <td>SAN RAFAEL 2</td>
       </tr>
       <tr>
         <td>Otro<br />()</td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
       </tr>
     </tbody>
   </table>
   <table>
     <tbody>
       <tr>
         <td>ETNIAS <br />(Traer certificación)</td>
         <td>Afrodescendiente</td>
         <td>No</td>
         <td>Negritudes</td>
         <td>No</td>
         <td>ROM</td>
         <td>No</td>
         <td>ZENÚ</td>
         <td>No</td>
       </tr>
     </tbody>
   </table>
   <table>
     <tbody>
       <tr>
         <td colspan="7">
           <b
             >Listado de categorías de discapacidad (Traer diagnóstico
             médico)</b
           >
         </td>
       </tr>
       <tr>
         <td bgcolor="#D9D9D9">Discapacidad<br />Física</td>
         <td bgcolor="#D9D9D9">Discapacidad<br />Auditiva</td>
         <td bgcolor="#D9D9D9">Discapacidad<br />Visual</td>
         <td bgcolor="#D9D9D9">Sordo ceguera</td>
         <td bgcolor="#D9D9D9">Discapacidad<br />Intelectual</td>
         <td bgcolor="#D9D9D9">Discapacidad<br />psicosocial</td>
         <td bgcolor="#D9D9D9">Discapacidad<br />múltiple</td>
       </tr>
       <tr>
         <td>No</td>
         <td>No</td>
         <td>No</td>
         <td>No</td>
         <td>No</td>
         <td>No</td>
         <td>No</td>
       </tr>
       <tr>
         <td colspan="7">
           Enfermedad que padece el estudiante (Anexe certificado médico)
         </td>
       </tr>
       <tr>
         <td colspan="7">&nbsp;</td>
       </tr>
     </tbody>
   </table>
   <table>
     <tbody>
       <tr>
         <td colspan="6">
           <b
             >Listado de capacidades y/o talentos excepcionales
             (Certificado)</b
           >
         </td>
       </tr>
       <tr>
         <td bgcolor="#D9D9D9">En tecnología</td>
         <td bgcolor="#D9D9D9">
           En Liderazgo y<br />
           emprendimiento
         </td>
         <td bgcolor="#D9D9D9">En ciencias<br />naturales o<br />básicas</td>
         <td bgcolor="#D9D9D9">En artes o letras</td>
         <td bgcolor="#D9D9D9">
           En Actividad<br />física, ejercicio y<br />deporte
         </td>
         <td bgcolor="#D9D9D9">En Ciencias<br />Sociales o<br />humanas</td>
       </tr>
       <tr>
         <td>No&nbsp;</td>
         <td>No&nbsp;</td>
         <td>No&nbsp;</td>
         <td>No&nbsp;</td>
         <td>No&nbsp;</td>
         <td>No&nbsp;</td>
       </tr>
     </tbody>
   </table>
   <table>
     <tbody>
       <tr>
         <td>
           <b>1.</b> Al firmar como acudiente autorizo a la Institución
           Educativa San Marcos el uso de imágenes, vídeos y datos personales
           semiprivados, privados y sensibles de niños, niñas y adolescentes a
           mi cargo.<br />
           <b>2.</b> Al firmar como acudiente me comprometo a cumplir con el
           manual de convivencia en su totalidad.<br /><br /><br />

           <table style="width: 100%">
             <tbody>
               <tr>
                 <td width="50%" style="border: none">
                   Estudiante: ________________________________
                 </td>
                 <td width="50%" style="border: none">
                   Acudiente: ________________________________
                 </td>
               </tr>
               <tr>
                 <td style="border: none" colspan="2"><br /><br /><br /></td>
               </tr>
               <tr>
                 <td style="border: none" width="50%">
                   Secretario: ________________________________
                 </td>
                 <td style="border: none" width="50%"></td>
               </tr>
             </tbody>
           </table>
           <br /><br />
         </td>
       </tr>
     </tbody>
   </table>
 </body>
</html>
 `;
}
