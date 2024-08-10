import { PrismaTasksRepository } from '@/repositories/prisma/prisma-tasks-repository'
import { CreateTaskUseCase } from '../tasks/create'
import { ListTasksUseCase } from '../tasks/list'
import { GetTaskByIdUseCase } from '../tasks/getById'
import { DeleteTaskUseCase } from '../tasks/delete'
import { UpdateTaskUseCase } from '../tasks/update'

export function makeCreateTaskUseCase() {
  const prismaTasksRepository = new PrismaTasksRepository()

  const useCase = new CreateTaskUseCase(prismaTasksRepository)

  return useCase
}

export function makeListTaskUseCase() {
  const prismaTasksRepository = new PrismaTasksRepository()

  const useCase = new ListTasksUseCase(prismaTasksRepository)

  return useCase
}

export function makeListByIdTaskUseCase() {
  const prismaTasksRepository = new PrismaTasksRepository()

  const useCase = new GetTaskByIdUseCase(prismaTasksRepository)

  return useCase
}

export function makeDeleteTaskUseCase() {
  const prismaTasksRepository = new PrismaTasksRepository()

  const useCase = new DeleteTaskUseCase(prismaTasksRepository)

  return useCase
}

export function makeUpdateTaskUseCase() {
  const prismaTasksRepository = new PrismaTasksRepository()

  const useCase = new UpdateTaskUseCase(prismaTasksRepository)

  return useCase
}