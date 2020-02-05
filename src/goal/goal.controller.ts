import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Goal } from './goal.entity';
import { GoalService } from './goal.service';

@Controller('goal')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Post()
  save(@Req() request: Request): any {
    return console.log(request.body);
    // return this.goalService.save(request.body);
  }

  @Get()
  getAll(): Promise<Goal[]> {
    return this.goalService.getAll();
  }
}
