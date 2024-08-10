import { Prisma, Task } from '@prisma/client'

export interface TasksRepository {
  list(): Promise<Task[]> 
  getById(id: string): Promise<Task | null>
  create(data: Prisma.TaskCreateInput): Promise<Task>
  update(id: string, data: Prisma.TaskUpdateInput): Promise<Task>
  delete(id: string): Promise<Task>
}
