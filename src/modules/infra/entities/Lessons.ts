import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Courses from '@modules/infra/entities/Courses';

@Entity('lessons')
class Lessons {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  length: number;

  @Column()
  description: string;

  @Column()
  video_id: string;

  @Column()
  course_id: string;

  @ManyToOne(() => Courses)
  @JoinColumn({ name: 'course_id' })
  course: Courses;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Lessons;
