import { makeListTaskUseCase, makeListByIdTaskUseCase, makeCreateTaskUseCase, makeUpdateTaskUseCase, makeDeleteTaskUseCase  } from '@/use-cases/factories/make-task-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function listTasks(request: FastifyRequest, reply: FastifyReply) {
  try {
    const listTaskUseCase = makeListTaskUseCase();

    const tasks = await listTaskUseCase.execute();
    
    const response = {
      status: "success",
      message: "Request completed successfully",
      data: tasks
    }

    return reply.status(200).send(response);
  } catch (err) {
    throw err
  }
}

export async function listTaskById(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = request.params as { id: string }

    const idSchema = z.string().uuid();
    const validationResult = idSchema.safeParse(id)

    if (!validationResult.success) {
      return reply.status(400).send({ message: 'Invalid ID format' })
    }

    const listByIdTaskUseCase = makeListByIdTaskUseCase();

    const task = await listByIdTaskUseCase.execute({ id });

    const response = {
      status: "success",
      message: "Request completed successfully",
      data: task
    }

    return reply.status(200).send(response);
  } catch (err) {
    throw err
  }
}

export async function createTask(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    title: z.string(),
    slug: z.string(),
    content: z.string(),
    color: z.string(),
    isFavorite: z.boolean(),
    userId: z.string(),
  });

  try {
    const { title, slug, content, color, isFavorite, userId } = registerBodySchema.parse(request.body);

    const createTaskUseCase = makeCreateTaskUseCase();

    const createTaks = await createTaskUseCase.execute({
      title,
      slug,
      content,
      color,
      isFavorite,
      userId
    });

    const response = {
      status: "success",
      message: "Request completed successfully",
      data: createTaks
    }

    return reply.status(201).send(response);
  } catch (err) {
    throw err
  }
}

export async function updateTask(request: FastifyRequest, reply: FastifyReply) {
  const updateTaskSchema = z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    content: z.string().optional(),
    color: z.string().optional(),
    isFavorite: z.boolean().optional(),
    userId: z.string().optional()
  });

  try {

    const { title, slug, content, color, isFavorite, userId } = updateTaskSchema.parse(request.body);

    const { id } = request.params as { id: string };

    const idSchema = z.string().uuid();
    const validationResult = idSchema.safeParse(id)

    if (!validationResult.success) {
      return reply.status(400).send({ message: 'Invalid ID format' })
    }

    const updateTaskUseCase = makeUpdateTaskUseCase();

    const updatedTask = await updateTaskUseCase.execute({
      id,
      title,
      slug,
      content,
      color,
      isFavorite,
      userId
    });

    const response = {
      status: "success",
      message: "Request completed successfully",
      data: updatedTask
    }

    return reply.status(200).send(response);
  } catch (err) {
    throw err;
  }
}

export async function deleteTask(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = request.params as { id: string }

    const idSchema = z.string().uuid();
    const validationResult = idSchema.safeParse(id)

    if (!validationResult.success) {
      return reply.status(400).send({ message: 'Invalid ID format' })
    }

    const deleteTaskUseCase = makeDeleteTaskUseCase()

    await deleteTaskUseCase.execute({ id })

    const response = {
      status: "success",
      message: "Request completed successfully"
    }

    return reply.status(200).send(response);
  } catch (err) {
    throw err
  }
}