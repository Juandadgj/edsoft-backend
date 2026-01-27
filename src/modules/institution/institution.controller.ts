import {
  Controller,
  Get,
  Put,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('institutions')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Public()
  @Get()
  findAll() {
    return this.institutionService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstitutionDto: UpdateInstitutionDto,
  ) {
    return this.institutionService.update(id, updateInstitutionDto);
  }
}
