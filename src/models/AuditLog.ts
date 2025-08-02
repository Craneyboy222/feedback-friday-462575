import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('audit_logs')
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  action: string;

  @Column('text')
  actor: string;

  @Column('timestamp with time zone')
  timestamp: Date;
}