import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @ManyToOne(() => Product, product => product.id)
  product: Product;

  @Column('text')
  review_text: string;

  @Column('int')
  rating: number;

  @Column('timestamp with time zone')
  created_at: Date;
}