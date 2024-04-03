function report1(students: any) {
  return `
  <html lang="es>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          body {
              margin: 0;
              padding: 10px;
              font-family: 'Arial', sans-serif;
              font-size: 10px;
            }
          header {
            text-align: center;
            
          }
          header div {
            display: flex;
            justify-content:center;
            align-items:center;
          }
          header div img {
              display: block;
              width: 100px;
              height: 100px;
          }
          .signatures {
            width: 1000px;
            margin-left: auto;
            margin-right: auto;
          }
          table {
            border-collapse: collapse;
            width: 1000px;
            margin-left: auto;
            margin-right: auto;
          }
          th, td {
            border: 1px solid black;
            padding: 6px;
            text-align: center;
            font-size: 14px;
          }
          th {
            background-color: #f2f2f2;
          }
          .name_td {
            text-align: left;
          }
          .name_th {
            padding: 12px;
          }
      </style>
    </head>
      <body>
        <header>
          <div>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-logo-design-template-b3bfdceb55d1cbc48f1ce50fd4e1ef24_screen.jpg?ts=1629941736" alt="Header Image"/>
            <h1>Institucion Educativa San Marcos Mañana</h1>
          </div>
          <h3>Quinto 1 Mañana año 2023</h3>
        </header>
        <div class="signatures">
          <h4>Nombre del docente: ______________________________________</h4>
          <h4>Nombre de la asignatura: _________________________________</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th colspan="4">Apellido y Nombre</th>
              <th>Per. 1</th>
              <th>Per. 2</th>
              <th>Per. 3</th>
              <th>Per. 4</th>
              <th>Per. F</th>
            </tr>
          </thead>
          <tbody>
            ${students
              .map(({ student }, i: number) => {
                return `<tr>
                    <td>${i}</td>
                    <td colspan="4" class="name_td">${student.last_name} ${student.name}</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                  </tr>`;
              })
              .join('')}
          </tbody>
        </table>
      </body>  
    </html>`;
}

export default report1;
