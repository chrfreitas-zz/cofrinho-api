import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Goal } from './goal.entity';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(Goal)
    private readonly goalRepository: Repository<Goal>,
  ) {}

  save(goal: Goal): Promise<Goal[]> {
    return this.goalRepository.save([goal]);
  }

  getAll(): Promise<Goal[]> {
    return this.goalRepository.find();
  }
}
