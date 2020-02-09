import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { TasksService } from '../tasks.service';

@Resolver()
export class TasksResolver {
    constructor(private tasksService: TasksService) {}

    @Query(() => [Task])
    async getTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

    @Mutation(() => Task)
    async createTask(
        @Args('input') createTaskDto: CreateTaskDto
    ): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }
}
