import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { SpreadsheetService } from '../services/spreadsheet.service';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import {
  AchievementsAndIndicatorsDto,
  StudentsListDeterminatedDto,
  StudentsListUndeterminatedDto,
} from '../dto/spreadsheet.dto';

@UseGuards(AuthGuard)
@Controller('exports/spreadsheets')
export class SpreadsheetController {
  constructor(private readonly spreadsheetService: SpreadsheetService) {}

  @Get('students-list-undeterminated')
  studentsListUndeterminated(
    @InstitutionId() id_institution: string,
    @Query()
    studentsListUndeterminatedDto: StudentsListUndeterminatedDto,
  ) {
    return this.spreadsheetService.studentsListUndeterminated(
      studentsListUndeterminatedDto,
    );
  }

  @Get('students-list-determinated')
  studentsListDeterminated(
    @InstitutionId() id_institution: string,
    @Query()
    studentsListDeterminatedDto: StudentsListDeterminatedDto,
  ) {
    return this.spreadsheetService.studentsListDeterminated(
      studentsListDeterminatedDto,
    );
  }

  @Get('achievements-and-indicators')
  achievementsAndIndicators(
    @InstitutionId() id_institution: string,
    @Query()
    achievementsAndIndicatorsDto: AchievementsAndIndicatorsDto,
  ) {
    return this.spreadsheetService.achievementsAndIndicators(
      achievementsAndIndicatorsDto,
    );
  }
}
