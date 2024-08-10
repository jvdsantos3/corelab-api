import { TasksRepository } from '@/repositories/tasks-repository'
import { Task } from '@prisma/client'

interface GetTaskByIdUseCaseRequest {
  id: string
}

interface GetTaskByIdUseCaseResponse {
  task: Task | null
}

export class GetTaskByIdUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({
    id,
  }: GetTaskByIdUseCaseRequest): Promise<GetTaskByIdUseCaseResponse> {
    const task = await this.tasksRepository.getById(id)
    return {
      task,
    }
  }
}