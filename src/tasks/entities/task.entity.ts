import { TaskStatus } from '../enums/TaskStatus';
import { ObjectType, Field, ID } from 'type-graphql';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne
} from 'typeorm';
import User from '../../auth/entities/user.entity';

@Entity()
@ObjectType()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column()
    @Field()
    title: string;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field()
    status: TaskStatus;

    @ManyToOne(
        type => User,
        user => user.tasks
    )
    @Field()
    user: User;
}
