import { TasksRepository } from '@/repositories/tasks-repository'
import { Task } from '@prisma/client'

interface CreateTaskUseCaseRequest {
  title: string
  slug: string
  content: string
  color: string
  isFavorite: boolean
  userId: string
}

interface CreateTaskUseCaseResponse {
  task: Task
}

export class CreateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({
    title,
    slug,
    content,
    color,
    isFavorite,
    userId,
  }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
    const task = await this.tasksRepository.create({
      title,
      slug,
      content,
      color,
      isFavorite,
      user: {
        connect: { id: userId },
      },
    })

    return {
      task,
    }
  }
}