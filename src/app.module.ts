import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AppController } from './app.controller';
import { join } from 'path';
import { AbsenceModule } from './modules/absence/absence.module';
import { AchievementModule } from './modules/achievement/achievement.module';
import { AreaModule } from './modules/area/area.module';
import { CourseModule } from './modules/course/course.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { FeaturedModule } from './modules/featured/featured.module';
import { GroupModule } from './modules/group/group.module';
import { InstitutionModule } from './modules/institution/institution.module';
import { StudentModule } from './modules/student/student.module';
import { AuthMiddleware } from './middlewares/jwt.strategy';
import { UserModule } from './modules/user/user.module';
import { ScholarYearModule } from './modules/scholar-year/scholar-year.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { TypeQualificationModule } from './modules/type-qualification/type-qualification.module';
import { ReportModule } from './modules/report/report.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/shared/interfaces/graphql.ts'),
        outputAs: 'class',
      },
    }),
    AbsenceModule,
    AchievementModule,
    AreaModule,
    CourseModule,
    EnrollmentModule,
    FeaturedModule,
    GroupModule,
    InstitutionModule,
    ScholarYearModule,
    StudentModule,
    TeacherModule,
    TypeQualificationModule,
    UserModule,
    ReportModule,
  ],
  controllers: [AppController],
  providers: [
    ConfigService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthMiddleware,
    },
  ],
})
export class AppModule {}
