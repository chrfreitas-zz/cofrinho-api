import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalService } from './goal.service';
// import { GoalController } from './goal.controller';
import { GoalEntity } from './goal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoalEntity])],
  providers: [GoalService],
  // controllers: [GoalController],
})
export class PhotoModule {}
