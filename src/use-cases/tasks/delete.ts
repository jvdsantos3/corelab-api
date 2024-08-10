import { TasksRepository } from '@/repositories/tasks-repository'
import { Task } from '@prisma/client'

interface DeleteTaskUseCaseRequest {
  id: string
}

interface DeleteTaskUseCaseResponse {
  task: Task
}

export class DeleteTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({
    id,
  }: DeleteTaskUseCaseRequest): Promise<DeleteTaskUseCaseResponse> {
    const task = await this.tasksRepository.delete(id)
    return {
      task,
    }
  }
}