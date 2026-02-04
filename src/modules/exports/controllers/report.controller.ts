import { Controller, Get, Body, Query, UseGuards, Post } from '@nestjs/common';
import { ReportService } from '../services/report.service';
import {
  ReportAreaDto,
  ReportDictionary,
} from '../dto/report.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('exports/reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('student-definitives')
  getStudentDefinitives(
    @InstitutionId() id_institution: string,
    @Query('id_student') id_student: number,
    @Query('id_group') id_group: number,
  ) {
    return this.reportService.getStudentDefinitives(
      id_student,
      id_group,
    );
  }

  @Get('group-definitives')
  getGroupDefinitives(
    @InstitutionId() id_institution: string,
    @Query('id_group') id_group: number,
  ) {
    return this.reportService.getGroupDefinitives(id_group);
  }

  @Post('area')
  reportArea(
    @InstitutionId() id_institution: string,
    @Query() reportAreaDto: ReportAreaDto,
    @Body() reportAreaBodyDto?: ReportDictionary,
  ) {
    return this.reportService.reportArea(reportAreaDto, reportAreaBodyDto);
  }
}
