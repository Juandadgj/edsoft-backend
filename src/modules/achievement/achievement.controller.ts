import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { FilterAchievementDto } from './dto/filter-achievement.dto';
import { UpdateQualificationsDto, FilterQualificationDto } from './dto/qualification.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('achievements')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createAchievementDto: CreateAchievementDto,
  ) {
    return this.achievementService.create(id_institution, createAchievementDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
    @Query() filterAchievementDto: FilterAchievementDto,
  ) {
    return this.achievementService.findAll(id_institution, filterAchievementDto);
  }

  @Get('qualifications')
  findQualifications(
    @InstitutionId() id_institution: string,
    @Query() filterQualificationDto: FilterQualificationDto,
  ) {
    return this.achievementService.findQualifications(
      id_institution,
      filterQualificationDto,
    );
  }

  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateAchievementDto: UpdateAchievementDto,
  ) {
    return this.achievementService.update(id_institution, updateAchievementDto);
  }

  @Put('qualifications')
  updateQualifications(
    @InstitutionId() id_institution: string,
    @Body() updateQualificationsDto: UpdateQualificationsDto,
  ) {
    return this.achievementService.updateQualifications(
      id_institution,
      updateQualificationsDto,
    );
  }

  @Delete(':id_achievement')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_achievement', ParseIntPipe) id_achievement: number,
  ) {
    return this.achievementService.delete(id_institution, id_achievement);
  }
}
