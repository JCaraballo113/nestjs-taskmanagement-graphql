import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ID, UseMiddleware } from 'type-graphql';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { TasksService } from '../tasks.service';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { AuthGuard } from '../../middlewares/authGuard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class TasksResolver {
    constructor(private tasksService: TasksService) {}

    @Query(() => [Task])
    @UseGuards(AuthGuard)
    async getTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

    @Query(() => Task)
    async getTaskById(@Args('id') id: string): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Mutation(() => Task)
    async createTask(
        @Args('task') createTaskDto: CreateTaskDto
    ): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Mutation(() => Task)
    async updateTask(
        @Args('id') id: string,
        @Args('taskUpdate') updateTaskDto: UpdateTaskDto
    ): Promise<Task> {
        return this.tasksService.updateTask(id, updateTaskDto);
    }

    @Mutation(() => ID)
    async deleteTask(@Args('id') id: string): Promise<string> {
        return await this.tasksService.deleteTask(id);
    }
}
