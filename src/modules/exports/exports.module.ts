import { Module } from '@nestjs/common';
import { DeliverableController } from './controllers/deliverable.controller';
import { DeliverableService } from './services/deliverable.service';
import { SpreadsheetController } from './controllers/spreadsheet.controller';
import { SpreadsheetService } from './services/spreadsheet.service';

@Module({
  controllers: [DeliverableController, SpreadsheetController],
  providers: [DeliverableService, SpreadsheetService],
})
export class ExportsModule {}
