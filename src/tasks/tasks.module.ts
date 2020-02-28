import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { TasksResolver } from './resolvers/task.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([TaskRepository]),
        JwtModule.register({
            secret: 'secret'
        })
    ],
    providers: [TasksResolver, TasksService]
})
export class TasksModule {}
