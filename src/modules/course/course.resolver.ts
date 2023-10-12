import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CourseService } from './course.service';
import {
  CreateCourseInput,
  FilterCourseInput,
  FilterDefinitivesInput,
  UpdateCourseInput,
  UpdateDefinitivesInput,
} from 'src/shared/interfaces/graphql';

@Resolver('Course')
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Mutation('createCourse')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createCourseInput') createCourseInput: CreateCourseInput,
  ) {
    return this.courseService.create(id_institution, createCourseInput);
  }

  @Query('courses')
  findAll(
    @Args('id_institution') id_institution: string,
    @Args('filterCourseInput') filterCourseInput: FilterCourseInput,
  ) {
    return this.courseService.findAll(id_institution, filterCourseInput);
  }

  @Query('courseByID')
  findOne(
    @Args('id_institution') id_institution: string,
    @Args('id_course') id_course: number,
  ) {
    return this.courseService.findOne(id_institution, id_course);
  }

  @Mutation('updateCourse')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateCourseInput') updateCourseInput: UpdateCourseInput,
  ) {
    return this.courseService.update(id_institution, updateCourseInput);
  }

  @Mutation('deleteCourse')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_course') id_course: number,
  ) {
    return this.courseService.delete(id_institution, id_course);
  }

  @Query('studentDefinitives')
  findDefinitives(
    @Args('id_institution') id_institution: string,
    @Args('filterDefinitivesInput')
    filterDefinitivesInput: FilterDefinitivesInput,
  ) {
    return this.courseService.findDefinitives(
      id_institution,
      filterDefinitivesInput,
    );
  }

  @Mutation('updateDefitinives')
  updateDefitinives(
    @Args('id_institution') id_institution: string,
    @Args('updateDefinitivesInput')
    updateDefinitivesInput: UpdateDefinitivesInput,
  ) {
    return this.courseService.findDefinitives(
      id_institution,
      updateDefinitivesInput,
    );
  }
}
