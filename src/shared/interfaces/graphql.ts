
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAbsenceInput {
    id_absence: number;
    id_student: number;
    id_course: number;
    day?: Nullable<number>;
    month?: Nullable<number>;
    year?: Nullable<number>;
    hours?: Nullable<number>;
    justification?: Nullable<string>;
    reason?: Nullable<string>;
    period?: Nullable<number>;
}

export class UpdateAbsenceInput {
    id_absence: number;
    id_student: number;
    id_course: number;
    day?: Nullable<number>;
    month?: Nullable<number>;
    year?: Nullable<number>;
    hours?: Nullable<number>;
    justification?: Nullable<string>;
    reason?: Nullable<string>;
    period?: Nullable<number>;
}

export class FilterAbsenceInput {
    id_student?: Nullable<number>;
    id_course?: Nullable<number>;
    day?: Nullable<number>;
    month?: Nullable<number>;
    year?: Nullable<number>;
    hours?: Nullable<number>;
    justification?: Nullable<string>;
    reason?: Nullable<string>;
    period?: Nullable<number>;
}

export class CreateAchievementInput {
    id_achievement: number;
    id_course: number;
    period: number;
    description?: Nullable<string>;
}

export class UpdateAchievementInput {
    id_achievement: number;
    id_course?: Nullable<number>;
    period?: Nullable<number>;
    description?: Nullable<string>;
}

export class FilterAchievementInput {
    id_course?: Nullable<number>;
    period?: Nullable<number>;
    description?: Nullable<string>;
}

export class UpdateQualificationInput {
    id_achie_stu: number;
    score?: Nullable<number>;
}

export class FilterQualificationInput {
    id_achievement?: Nullable<number>;
    id_student?: Nullable<number>;
    score?: Nullable<number>;
}

export class CreateAreaInput {
    name: string;
    status?: Nullable<string>;
}

export class UpdateAreaInput {
    id_area: number;
    name?: Nullable<string>;
    status?: Nullable<string>;
}

export class FilterAreaInput {
    name?: Nullable<string>;
    status?: Nullable<string>;
}

export class CreateCourseInput {
    id_group: number;
    id_teacher: number;
    name: string;
    position?: Nullable<number>;
    dim_codigo?: Nullable<number>;
    asi_dimension?: Nullable<string>;
    id_area: number;
    hour: number;
    average?: Nullable<string>;
    percentage?: Nullable<number>;
}

export class UpdateCourseInput {
    id_course: number;
    id_group?: Nullable<number>;
    id_teacher?: Nullable<number>;
    name?: Nullable<string>;
    position?: Nullable<number>;
    dim_codigo?: Nullable<number>;
    asi_dimension?: Nullable<string>;
    id_area?: Nullable<number>;
    hour?: Nullable<number>;
    average?: Nullable<string>;
    percentage?: Nullable<number>;
}

export class FilterCourseInput {
    id_group?: Nullable<number>;
    id_teacher?: Nullable<number>;
    name?: Nullable<string>;
    position?: Nullable<number>;
    dim_codigo?: Nullable<number>;
    asi_dimension?: Nullable<string>;
    id_area?: Nullable<number>;
    hour?: Nullable<number>;
    average?: Nullable<string>;
    percentage?: Nullable<number>;
}

export class UpdateDefinitivesInput {
    id_cour_stu: number;
    score1?: Nullable<string>;
    score2?: Nullable<string>;
    score3?: Nullable<string>;
    score4?: Nullable<string>;
    score5?: Nullable<string>;
}

export class FilterDefinitivesInput {
    id_student?: Nullable<number>;
    id_course?: Nullable<number>;
    score1?: Nullable<string>;
    score2?: Nullable<string>;
    score3?: Nullable<string>;
    score4?: Nullable<string>;
    score5?: Nullable<string>;
}

export class CreateEnrollmentInput {
    id_student: number;
    id_group: number;
    year?: Nullable<number>;
    status?: Nullable<string>;
    reason_desertion?: Nullable<string>;
    date_desertion?: Nullable<string>;
}

export class UpdateEnrollmentInput {
    id_enrollment: number;
    status?: Nullable<string>;
    reason_desertion?: Nullable<string>;
    date_desertion?: Nullable<string>;
}

export class FilterEnrollmentInput {
    id_student?: Nullable<number>;
    id_group?: Nullable<number>;
    year?: Nullable<number>;
    status?: Nullable<string>;
    reason_desertion?: Nullable<string>;
    date_desertion?: Nullable<string>;
}

export class CreateFeaturedInput {
    id_group?: Nullable<number>;
    id_student?: Nullable<number>;
}

export class FilterFeaturedInput {
    id_group?: Nullable<number>;
    id_student?: Nullable<number>;
}

export class CreateGroupInput {
    id_year: number;
    level: number;
    sublevel: string;
    working_time?: Nullable<string>;
    representative: string;
}

export class UpdateGroupInput {
    id_group: number;
    working_time?: Nullable<string>;
    representative?: Nullable<string>;
}

export class FilterGroupInput {
    id_year?: Nullable<number>;
    level?: Nullable<number>;
    sublevel?: Nullable<string>;
    working_time?: Nullable<string>;
    representative?: Nullable<string>;
}

export class CreateScholarYearInput {
    id_year: number;
    rector?: Nullable<string>;
    secretary?: Nullable<string>;
    comment?: Nullable<string>;
}

export class UpdateScholarYearInput {
    id_year: number;
    rector?: Nullable<string>;
    secretary?: Nullable<string>;
    comment?: Nullable<string>;
}

export class CreateStudentInput {
    name: string;
    last_name: string;
    type_id: number;
    identification: string;
    sex: string;
    direction?: Nullable<string>;
    phone: string;
    guardian: string;
    status?: Nullable<string>;
    birthday?: Nullable<string>;
    father?: Nullable<string>;
    mother?: Nullable<string>;
    email?: Nullable<string>;
}

export class UpdateStudentInput {
    id_student: number;
    name?: Nullable<string>;
    last_name?: Nullable<string>;
    type_id?: Nullable<number>;
    identification?: Nullable<string>;
    sex?: Nullable<string>;
    direction?: Nullable<string>;
    phone?: Nullable<string>;
    guardian?: Nullable<string>;
    status?: Nullable<string>;
    birthday?: Nullable<string>;
    father?: Nullable<string>;
    mother?: Nullable<string>;
    email?: Nullable<string>;
}

export class FilterStudentInput {
    name?: Nullable<string>;
    last_name?: Nullable<string>;
    type_id?: Nullable<number>;
    identification?: Nullable<string>;
    sex?: Nullable<string>;
    direction?: Nullable<string>;
    phone?: Nullable<string>;
    guardian?: Nullable<string>;
    status?: Nullable<string>;
    birthday?: Nullable<string>;
    father?: Nullable<string>;
    mother?: Nullable<string>;
    email?: Nullable<string>;
}

export class CreateTeacherInput {
    name: string;
    last_name: string;
    type_id: number;
    identification: string;
    direction?: Nullable<string>;
    phone: string;
    email?: Nullable<string>;
    degree?: Nullable<string>;
}

export class UpdateTeacherInput {
    id_teacher: number;
    name?: Nullable<string>;
    last_name?: Nullable<string>;
    type_id?: Nullable<number>;
    identification?: Nullable<string>;
    direction?: Nullable<string>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    degree?: Nullable<string>;
}

export class FilterTeacherInput {
    name?: Nullable<string>;
    last_name?: Nullable<string>;
    type_id?: Nullable<number>;
    identification?: Nullable<string>;
    direction?: Nullable<string>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    degree?: Nullable<string>;
}

export class CreateTypeQualificationInput {
    name: string;
    floor_score: number;
    ceiling_score: number;
    year?: Nullable<number>;
}

export class SignInInput {
    id_institution: number;
    user: string;
    password: string;
}

export class UpdateUserInput {
    id_user: number;
    user: string;
    password: string;
    typeu: string;
    status: string;
    belongs: string;
}

export class Absence {
    id_absence: number;
    id_student?: Nullable<number>;
    id_course?: Nullable<number>;
    day?: Nullable<number>;
    month?: Nullable<number>;
    year?: Nullable<number>;
    hours?: Nullable<number>;
    justification?: Nullable<string>;
    reason?: Nullable<string>;
    period?: Nullable<number>;
}

export abstract class IQuery {
    abstract absences(filterAbsenceInput?: Nullable<FilterAbsenceInput>): Nullable<Absence>[] | Promise<Nullable<Absence>[]>;

    abstract achievements(filterAchievementInput?: Nullable<FilterAchievementInput>): Nullable<Achievement>[] | Promise<Nullable<Achievement>[]>;

    abstract studentQualifications(filterQualificationInput?: Nullable<FilterQualificationInput>): Nullable<Qualification>[] | Promise<Nullable<Qualification>[]>;

    abstract areas(filterAreaInput?: Nullable<FilterAreaInput>): Nullable<Area>[] | Promise<Nullable<Area>[]>;

    abstract courses(filterCourseInput?: Nullable<FilterCourseInput>): Nullable<Course>[] | Promise<Nullable<Course>[]>;

    abstract courseByID(id_course: number): Nullable<Course> | Promise<Nullable<Course>>;

    abstract studentDefinitives(filterDefinitivesInput?: Nullable<FilterDefinitivesInput>): Nullable<Definitives>[] | Promise<Nullable<Definitives>[]>;

    abstract enrollments(filterEnrollmentInput?: Nullable<FilterEnrollmentInput>): Nullable<Enrollment>[] | Promise<Nullable<Enrollment>[]>;

    abstract enrollmentByID(id_enrollment: number): Nullable<Enrollment> | Promise<Nullable<Enrollment>>;

    abstract featured(filterFeaturedInput?: Nullable<FilterFeaturedInput>): Nullable<Featured>[] | Promise<Nullable<Featured>[]>;

    abstract groups(filterGroupInput?: Nullable<FilterGroupInput>): Nullable<Group>[] | Promise<Nullable<Group>[]>;

    abstract groupByID(id_group: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract institutions(): Nullable<Institution>[] | Promise<Nullable<Institution>[]>;

    abstract scholarYears(): Nullable<ScholarYear>[] | Promise<Nullable<ScholarYear>[]>;

    abstract students(filterStudentInput?: Nullable<FilterStudentInput>): Nullable<Student>[] | Promise<Nullable<Student>[]>;

    abstract studentByID(id_student: number): Nullable<Student> | Promise<Nullable<Student>>;

    abstract teachers(filterTeacherInput?: Nullable<FilterTeacherInput>): Nullable<Teacher>[] | Promise<Nullable<Teacher>[]>;

    abstract teacherByID(id_teacher: number): Nullable<Teacher> | Promise<Nullable<Teacher>>;

    abstract typeQualifications(): Nullable<TypeQualification>[] | Promise<Nullable<TypeQualification>[]>;

    abstract signIn(signInInput?: Nullable<SignInInput>): Auth | Promise<Auth>;
}

export abstract class IMutation {
    abstract createAbsence(createAbsenceInput: CreateAbsenceInput): Absence | Promise<Absence>;

    abstract updateAbsence(updateAbsenceInput: UpdateAbsenceInput): Absence | Promise<Absence>;

    abstract deleteAbsence(id_absence: number): Absence | Promise<Absence>;

    abstract createAchievement(createAchievementInput: CreateAchievementInput): Achievement | Promise<Achievement>;

    abstract updateAchievement(updateAchievementInput: UpdateAchievementInput): Achievement | Promise<Achievement>;

    abstract deleteAchievement(id_achievement: number): Nullable<Achievement> | Promise<Nullable<Achievement>>;

    abstract updateQualification(updateQualificationInput: UpdateQualificationInput): Qualification | Promise<Qualification>;

    abstract createArea(createAreaInput: CreateAreaInput): Area | Promise<Area>;

    abstract updateArea(updateAreaInput: UpdateAreaInput): Area | Promise<Area>;

    abstract deleteArea(id_area: number): Area | Promise<Area>;

    abstract createCourse(createCourseInput: CreateCourseInput): Course | Promise<Course>;

    abstract updateCourse(updateCourseInput: UpdateCourseInput): Course | Promise<Course>;

    abstract deleteCourse(id_course: number): Nullable<Course> | Promise<Nullable<Course>>;

    abstract updateDefitinives(updateDefinitivesInput?: Nullable<UpdateDefinitivesInput>): Definitives | Promise<Definitives>;

    abstract createEnrollment(createEnrollmentInput: CreateEnrollmentInput): Enrollment | Promise<Enrollment>;

    abstract updateEnrollment(updateEnrollmentInput: UpdateEnrollmentInput): Enrollment | Promise<Enrollment>;

    abstract deleteEnrollment(id_enrollment: number): Nullable<Enrollment> | Promise<Nullable<Enrollment>>;

    abstract createFeatured(createFeaturedInput: CreateFeaturedInput): Featured | Promise<Featured>;

    abstract deleteFeatured(id_featured: number): Nullable<Featured> | Promise<Nullable<Featured>>;

    abstract createGroup(createGroupInput: CreateGroupInput): Group | Promise<Group>;

    abstract updateGroup(updateGroupInput: UpdateGroupInput): Group | Promise<Group>;

    abstract deleteGroup(id_group: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract createScholarYear(createScholarYearInput: CreateScholarYearInput): ScholarYear | Promise<ScholarYear>;

    abstract updateScholarYear(updateScholarYearInput: UpdateScholarYearInput): ScholarYear | Promise<ScholarYear>;

    abstract deleteScholarYear(id_year: number): Nullable<ScholarYear> | Promise<Nullable<ScholarYear>>;

    abstract createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;

    abstract updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;

    abstract deleteStudent(id_student: number): Nullable<Student> | Promise<Nullable<Student>>;

    abstract createTeacher(createTeacherInput: CreateTeacherInput): Teacher | Promise<Teacher>;

    abstract updateTeacher(updateTeacherInput: UpdateTeacherInput): Teacher | Promise<Teacher>;

    abstract deleteTeacher(id_teacher: number): Nullable<Teacher> | Promise<Nullable<Teacher>>;

    abstract createTypeQualification(createTypeQualificationInput: CreateTypeQualificationInput): TypeQualification | Promise<TypeQualification>;

    abstract deleteTypeQualification(id_type_qual: number): Nullable<TypeQualification> | Promise<Nullable<TypeQualification>>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export class Achievement {
    id_achievement: number;
    id_course?: Nullable<number>;
    period?: Nullable<number>;
    description?: Nullable<string>;
}

export class Qualification {
    id_achie_stu: number;
    id_achievement?: Nullable<number>;
    id_student?: Nullable<number>;
    score?: Nullable<number>;
}

export class Area {
    id_area: number;
    name?: Nullable<string>;
    status?: Nullable<string>;
}

export class Course {
    id_course: number;
    id_group: number;
    id_teacher: number;
    name: string;
    position?: Nullable<number>;
    dim_codigo?: Nullable<number>;
    asi_dimension?: Nullable<string>;
    id_area: number;
    hour: number;
    average?: Nullable<string>;
    percentage?: Nullable<number>;
}

export class Definitives {
    id_cour_stu: number;
    id_student?: Nullable<number>;
    id_course?: Nullable<number>;
    score1?: Nullable<string>;
    score2?: Nullable<string>;
    score3?: Nullable<string>;
    score4?: Nullable<string>;
    score5?: Nullable<string>;
}

export class Enrollment {
    id_enrollment: number;
    id_student?: Nullable<number>;
    id_group?: Nullable<number>;
    year?: Nullable<number>;
    status?: Nullable<string>;
    reason_desertion?: Nullable<string>;
    date_desertion?: Nullable<string>;
}

export class Featured {
    id_featured: number;
    id_group?: Nullable<number>;
    id_student?: Nullable<number>;
}

export class Group {
    id_group: number;
    id_year?: Nullable<number>;
    level?: Nullable<number>;
    sublevel?: Nullable<string>;
    working_time?: Nullable<string>;
    representative?: Nullable<string>;
}

export class Institution {
    id_institution: number;
    name: string;
    register: string;
    direction: string;
    phone: string;
    responsable: string;
    logo?: Nullable<string>;
    user: string;
    pay_inscription: number;
    monthly_pay: number;
    day: string;
    month: string;
    year: string;
    version: number;
    status: string;
    title: string;
    message: string;
    information: string;
}

export class ScholarYear {
    id_year: number;
    rector?: Nullable<string>;
    secretary?: Nullable<string>;
    comment?: Nullable<string>;
}

export class Student {
    id_student: number;
    name?: Nullable<string>;
    last_name?: Nullable<string>;
    type_id?: Nullable<number>;
    identification?: Nullable<string>;
    sex?: Nullable<string>;
    direction?: Nullable<string>;
    phone?: Nullable<string>;
    guardian?: Nullable<string>;
    status?: Nullable<string>;
    birthday?: Nullable<string>;
    father?: Nullable<string>;
    mother?: Nullable<string>;
    email?: Nullable<string>;
}

export class Teacher {
    id_teacher: number;
    name?: Nullable<string>;
    last_name?: Nullable<string>;
    type_id?: Nullable<number>;
    identification?: Nullable<string>;
    direction?: Nullable<string>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    degree?: Nullable<string>;
}

export class TypeQualification {
    id_type_qual: number;
    name?: Nullable<string>;
    floor_score?: Nullable<number>;
    ceiling_score?: Nullable<number>;
    year?: Nullable<number>;
}

export class User {
    id_user: number;
    user: string;
    password: string;
    typeu: string;
    status: string;
    belongs: string;
}

export class Auth {
    token?: Nullable<string>;
    role?: Nullable<string>;
}

type Nullable<T> = T | null;
