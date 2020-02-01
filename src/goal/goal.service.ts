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

  save(): Promise<Goal[]> {
    return this.goalRepository.save([
      {
        name: 'viagem',
        date: '12-12-2019',
        value: 123,
      },
    ]);
  }

  find(): Promise<Goal[]> {
    return this.goalRepository.find();
  }
}
