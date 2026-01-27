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
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { FilterGroupDto } from './dto/filter-group.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createGroupDto: CreateGroupDto,
  ) {
    return this.groupService.create(id_institution, createGroupDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
    @Query() filterGroupDto: FilterGroupDto,
  ) {
    return this.groupService.findAll(id_institution, filterGroupDto);
  }

  @Get(':id_group')
  findOne(
    @InstitutionId() id_institution: string,
    @Param('id_group', ParseIntPipe) id_group: number,
  ) {
    return this.groupService.findOne(id_institution, id_group);
  }

  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupService.update(id_institution, updateGroupDto);
  }

  @Delete(':id_group')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_group', ParseIntPipe) id_group: number,
  ) {
    return this.groupService.delete(id_institution, id_group);
  }
}
