import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 300 })
  date: string;

  @Column('int')
  value: number;
}
