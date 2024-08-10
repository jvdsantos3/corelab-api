import { TasksRepository } from '@/repositories/tasks-repository'
import { Task } from '@prisma/client'

interface UpdateTaskUseCaseRequest {
  id: string
  title?: string
  slug?: string
  content?: string
  color?: string
  isFavorite?: boolean
  userId?: string
}

interface UpdateTaskUseCaseResponse {
  task: Task
}

export class UpdateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({
    id,
    title,
    slug,
    content,
    color,
    isFavorite,
    userId,
  }: UpdateTaskUseCaseRequest): Promise<UpdateTaskUseCaseResponse> {
    const task = await this.tasksRepository.update(id, {
      title,
      slug,
      content,
      color,
      isFavorite,
      user: userId ? {
        connect: { id: userId },
      } : undefined,
    })

    return {
      task,
    }
  }
}