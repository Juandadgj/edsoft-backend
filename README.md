# 🎓 EdSoft Backend

Sistema de gestión escolar desarrollado con **NestJS**, **GraphQL** y **Prisma**. Proporciona una API robusta para la administración integral de instituciones educativas.

## 📋 Descripción

EdSoft Backend es una API GraphQL diseñada para gestionar todos los aspectos operativos de instituciones educativas. El sistema soporta múltiples instituciones (multi-tenant) y ofrece funcionalidades completas para la gestión académica.

## ✨ Características Principales

### 📚 Gestión Académica
- **Estudiantes**: CRUD completo, información personal, datos familiares y seguimiento académico
- **Profesores**: Gestión de docentes, asignación de cursos y materias
- **Cursos**: Administración de asignaturas, asignación a grupos y profesores
- **Grupos**: Organización por niveles, subniveles y jornadas
- **Áreas**: Clasificación de materias por áreas de conocimiento

### 📊 Calificaciones y Evaluación
- **Logros (Achievements)**: Definición y calificación de logros por período
- **Notas Definitivas**: Seguimiento de calificaciones por período (hasta 5 períodos)
- **Tipos de Calificación**: Configuración de escalas de notas personalizables

### 📝 Registro y Seguimiento
- **Matrículas (Enrollments)**: Gestión de inscripciones anuales y estados
- **Ausencias**: Control de inasistencias con justificaciones
- **Observaciones**: Registro de anotaciones por período
- **Recomendaciones**: Sistema de recomendaciones por curso

### 📄 Reportes
- **Listados de estudiantes**: Generación de listas por grupo
- **Boletines de notas**: Reportes por estudiante o grupo completo
- **Reportes de logros e indicadores**: Seguimiento del rendimiento

### 🏫 Administración Institucional
- **Instituciones**: Configuración multi-tenant
- **Años Escolares**: Gestión de períodos académicos
- **Usuarios**: Sistema de autenticación y roles

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| **NestJS** | 10.x | Framework de Node.js para aplicaciones escalables |
| **GraphQL** | 16.x | API Query Language con Apollo Server |
| **Prisma** | 4.9.0 | ORM moderno para Node.js y TypeScript |
| **MySQL** | - | Base de datos relacional |
| **TypeScript** | 5.x | Tipado estático para JavaScript |
| **AWS S3** | - | Almacenamiento de archivos (imágenes, documentos) |

## 📁 Estructura del Proyecto

```
src/
├── config/                 # Configuración de la aplicación
│   └── database/          # Schema de Prisma y configuración de BD
├── middlewares/           # Middlewares de autenticación (JWT)
├── modules/               # Módulos de la aplicación
│   ├── absence/           # Gestión de ausencias
│   ├── achievement/       # Gestión de logros
│   ├── area/              # Gestión de áreas
│   ├── aws/               # Integración con AWS S3
│   ├── course/            # Gestión de cursos
│   ├── enrollment/        # Gestión de matrículas
│   ├── featured/          # Estudiantes destacados
│   ├── group/             # Gestión de grupos
│   ├── institution/       # Gestión de instituciones
│   ├── report/            # Generación de reportes
│   ├── scholar-year/      # Años escolares
│   ├── student/           # Gestión de estudiantes
│   ├── teacher/           # Gestión de profesores
│   ├── type-qualification/# Tipos de calificación
│   └── user/              # Gestión de usuarios
├── shared/                # Interfaces y tipos compartidos
├── templates/             # Plantillas para reportes
└── utils/                 # Utilidades generales
```

## 🚀 Instalación

### Prerrequisitos
- Node.js 20.x o superior
- Yarn
- MySQL

### Configuración

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd edsoft-backend
```

2. **Instalar dependencias**
```bash
yarn install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Editar el archivo `.env` con las siguientes variables:
```env
PORT=3000
HOST=0.0.0.0
NODE_ENV=development
DATABASE_URL=mysql://usuario:password@localhost:3306/edsoft
SECRET=tu_secreto_jwt
```

4. **Generar cliente Prisma**
```bash
yarn generate
```

## 🏃‍♂️ Ejecución

```bash
# Modo desarrollo (con hot-reload)
yarn start:dev

# Modo debug
yarn start:debug

# Modo producción
yarn start:prod
```

## 🧪 Tests

```bash
# Tests unitarios
yarn test

# Tests e2e
yarn test:e2e

# Cobertura de tests
yarn test:cov
```

## 🐳 Docker

El proyecto incluye un `Dockerfile` para despliegue en contenedores:

```bash
# Construir imagen
docker build -t edsoft-backend .

# Ejecutar contenedor
docker run -p 80:80 edsoft-backend
```

## 📖 API GraphQL

Una vez iniciado el servidor, puedes acceder al **Apollo Studio Sandbox** en:
```
http://localhost:3000/graphql
```

### Ejemplo de Queries

```graphql
# Obtener estudiantes por grupo
query {
  studentsByGroup(id_group: 1) {
    id_student
    name
    last_name
    identification
  }
}

# Obtener cursos por grupo
query {
  coursesByGroup(id_group: 1) {
    id_course
    name
    teacher {
      name
      last_name
    }
  }
}
```

## 🔐 Autenticación

El sistema utiliza **JWT (JSON Web Tokens)** para la autenticación. Las peticiones autenticadas deben incluir el token en el header:

```
Authorization: Bearer <token>
```

## 📝 Licencia

Este proyecto es privado y su uso está restringido.

---

Desarrollado con ❤️ para la gestión educativa
