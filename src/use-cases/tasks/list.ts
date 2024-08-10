import { TasksRepository } from '@/repositories/tasks-repository'
import { Task } from '@prisma/client'

interface ListTasksUseCaseResponse {
  tasks: Task[]
}

export class ListTasksUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(): Promise<ListTasksUseCaseResponse> {
    const tasks = await this.tasksRepository.list()
    return {
      tasks,
    }
  }
}