import { Controller, Get } from '@nestjs/common';
import { GoalService } from './goal.service';

@Controller('goal')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Get('save')
  save(): any {
    return this.goalService.save();
  }

  @Get('find')
  find(): any {
    return this.goalService.find();
  }
}
