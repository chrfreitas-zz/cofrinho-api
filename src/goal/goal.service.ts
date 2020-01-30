import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoalEntity } from './goal.entity';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(GoalEntity)
    private readonly goalRepository: Repository<GoalEntity>,
  ) {}

  findAll(): Promise<GoalEntity[]> {
    return this.goalRepository.find();
  }
}
