import { Module } from '@nestjs/common';
import { FeaturedService } from './featured.service';
import { FeaturedResolver } from './featured.resolver';

@Module({
  providers: [FeaturedResolver, FeaturedService],
})
export class FeaturedModule {}
