import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ListsService } from '../services/list.service';
import { GenerateListDto } from '../dto/list.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('reports/lists')
@UseGuards(AuthGuard)
export class ListController {
  constructor(private readonly listsService: ListsService) {}

  @Post('qualified-teachers')
  async getQualifiedTeachers(@Body() dto: GenerateListDto): Promise<any> {
    const html = await this.listsService.getQualifiedTeachers(dto);
    return { html };
  }

  @Post('students-by-course')
  async getStudentsByCourse(@Body() dto: GenerateListDto): Promise<any> {
    const html = await this.listsService.getStudentsByCourse(dto);
    return { html };
  }

  @Post('students-by-course-signature')
  async getStudentsByCourseSignature(
    @Body() dto: GenerateListDto,
  ): Promise<any> {
    const html = await this.listsService.getStudentsByCourseSignature(dto);
    return { html };
  }

  @Post('subjects-by-course')
  async getSubjectsByCourse(@Body() dto: GenerateListDto): Promise<any> {
    const html = await this.listsService.getSubjectsByCourse(dto);
    return { html };
  }

  @Post('achievements-by-course')
  async getAchievementsByCourse(@Body() dto: GenerateListDto): Promise<any> {
    const html = await this.listsService.getAchievementsByCourse(dto);
    return { html };
  }

  @Post('global-notes-sheet-by-course')
  async getGlobalNotesSheetByCourse(
    @Body() dto: GenerateListDto,
  ): Promise<any> {
    const html = await this.listsService.getGlobalNotesSheetByCourse(dto);
    return { html };
  }

  @Post('global-notes-sheet-by-course-excel')
  async getGlobalNotesSheetByCourseExcel(
    @Body() dto: GenerateListDto,
  ): Promise<any> {
    const html = await this.listsService.getGlobalNotesSheetByCourseExcel(dto);
    return { html };
  }

  @Post('global-notes-sheet-areas-by-course-excel')
  async getGlobalNotesSheetAreasByCourseExcel(
    @Body() dto: GenerateListDto,
  ): Promise<any> {
    const html =
      await this.listsService.getGlobalNotesSheetAreasByCourseExcel(dto);
    return { html };
  }

  @Post('lost-global-notes-sheet-by-course-excel')
  async getLostGlobalNotesSheetByCourseExcel(
    @Body() dto: GenerateListDto,
  ): Promise<any> {
    const html =
      await this.listsService.getLostGlobalNotesSheetByCourseExcel(dto);
    return { html };
  }

  @Post('all-global-notes-sheet-by-course-excel')
  async getAllGlobalNotesSheetByCourseExcel(
    @Body() dto: GenerateListDto,
  ): Promise<any> {
    const html =
      await this.listsService.getAllGlobalNotesSheetByCourseExcel(dto);
    return { html };
  }

  @Post('minimum-notes-calculation-by-period-excel')
  async getMinimumNotesCalculationByPeriodExcel(
    @Body() dto: GenerateListDto,
  ): Promise<any> {
    const html =
      await this.listsService.getMinimumNotesCalculationByPeriodExcel(dto);
    console.log(html);
    return { html };
  }

  @Post('courses')
  async getCourses(@Body() dto: GenerateListDto): Promise<any> {
    const html = await this.listsService.getCourses(dto);
    return { html };
  }

  @Post('graduates')
  async getGraduates(@Body() dto: GenerateListDto): Promise<any> {
    const html = await this.listsService.getGraduates(dto);
    return { html };
  }

  @Post('students-configurable-fields-excel')
  async getStudentsConfigurableFields(
    @Body() dto: GenerateListDto,
  ): Promise<any> {
    const html = await this.listsService.getStudentsConfigurableFields(dto);
    return { html };
  }

  @Post('students-list-excel')
  async getStudentsListExcel(@Body() dto: GenerateListDto): Promise<any> {
    const html = await this.listsService.getStudentsListExcel(dto);
    return { html };
  }

  @Post('ages-by-course')
  async getAgesByCourse(@Body() dto: GenerateListDto): Promise<any> {
    const html = await this.listsService.getAgesByCourse(dto);
    return { html };
  }
}
