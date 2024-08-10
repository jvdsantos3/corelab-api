import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { TasksRepository } from '../tasks-repository'

export class PrismaTasksRepository implements TasksRepository {
  async list() {
    const tasks = await prisma.task.findMany();

    return tasks;
  }

  async getById(id: string) {
    const task = await prisma.task.findUnique({
        where: { id },
    });
    return task;
  }

  async create(data: Prisma.TaskCreateInput) {
    const task = await prisma.task.create({
        data,
    });
  
    return task;
  }

  async update(id: string, data: Prisma.TaskUpdateInput) {
    const updatedTask = await prisma.task.update({
        where: { id },
        data,
    });

    return updatedTask
  }

  async delete(id: string) {
    const task = await prisma.task.delete({
        where: { id },
    });

    return task;
  }
}
