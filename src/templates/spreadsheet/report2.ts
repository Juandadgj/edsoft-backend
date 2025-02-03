function report2(students: any, achievements: any, teacher: any, area: any) {
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
              font-size:10px;
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
          .container {
            width: 650px;
            margin-left: auto;
            margin-right: auto;
          }
          table {
            border-collapse: collapse;
            width: 100%;
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
        <div class="container">
          <p>Nombre del docente: <b>${teacher.last_name} ${teacher.name}</b></p>
          <p>Nombre de la asignatura: <b>${area.name}</b></p>
              ${achievements
                .map(
                  (achievement: any, i: number) =>
                    `<p> <b>${i + 1}.</b> ${achievement.description}</p>`,
                )
                .join('')}
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Apellido y Nombre</th>
                    ${achievements
                      .map((_: any, i: number) => `<th>${i + 1}</th>`)
                      .join('')}
                    <th>GL</th>
                  </tr>
                </thead>
                <tbody>
                  ${students
                    .map(({ student }, i: number) => {
                      return `<tr>
                          <td>${i + 1}</td>
                          <td class="name_td">${student.last_name} ${
                            student.name
                          }</td>
                    ${achievements.map((_: any) => `<td> </td>`).join('')}
                          <td> </td>
                        </tr>`;
                    })
                    .join('')}
                </tbody>
              </table>     
        </div>
      </body>  
    </html>`;
}

export default report2;
