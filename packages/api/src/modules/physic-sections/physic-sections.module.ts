import { Module } from '@nestjs/common';
import { PhysicSectionsController } from './physic-sections.controller';
import { PhysicSectionsService } from './physic-sections.service';

@Module({
  controllers: [PhysicSectionsController],
  providers: [PhysicSectionsService],
})
export class PhysicSectionsModule {}
