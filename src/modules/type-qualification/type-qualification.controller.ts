import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { TypeQualificationService } from './type-qualification.service';
import { CreateTypeQualificationDto } from './dto/create-type-qualification.dto';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('type-qualifications')
export class TypeQualificationController {
  constructor(private readonly typeQualificationService: TypeQualificationService) {}

  @Post()
  create(
    @InstitutionId() id_institution: string,
    @Body() createTypeQualificationDto: CreateTypeQualificationDto,
  ) {
    return this.typeQualificationService.create(id_institution, createTypeQualificationDto);
  }

  @Get()
  findAll(
    @InstitutionId() id_institution: string,
  ) {
    return this.typeQualificationService.findAll(id_institution);
  }

  @Delete(':id_type_qual')
  delete(
    @InstitutionId() id_institution: string,
    @Param('id_type_qual', ParseIntPipe) id_type_qual: number,
  ) {
    return this.typeQualificationService.delete(id_institution, id_type_qual);
  }
}
