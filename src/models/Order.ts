import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @OneToMany(() => Product, product => product.id)
  products: Product[];

  @Column('decimal')
  total_amount: number;

  @Column('timestamp with time zone')
  created_at: Date;
}