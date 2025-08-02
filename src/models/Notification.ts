import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  message: string;

  @Column('boolean')
  is_read: boolean;

  @Column('timestamp with time zone')
  created_at: Date;
}