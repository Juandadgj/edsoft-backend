import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AbsenceModule } from './modules/absence/absence.module';
import { AchievementModule } from './modules/achievement/achievement.module';
import { AreaModule } from './modules/area/area.module';
import { CourseModule } from './modules/course/course.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { FeaturedModule } from './modules/featured/featured.module';
import { GroupModule } from './modules/group/group.module';
import { InstitutionModule } from './modules/institution/institution.module';
import { StudentModule } from './modules/student/student.module';
import { UserModule } from './modules/user/user.module';
import { ScholarYearModule } from './modules/scholar-year/scholar-year.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { TypeQualificationModule } from './modules/type-qualification/type-qualification.module';
import { ReportModule } from './modules/report/report.module';
import { PrismaClientModule } from './config/prisma-client.module';
import { AwsModule } from './modules/aws/aws.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PrismaClientModule,
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
    AwsModule,
  ],
  controllers: [AppController],
  providers: [ConfigService],
})
export class AppModule {}
