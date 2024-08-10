import { FastifyInstance } from 'fastify'
import { createTask, listTasks, listTaskById, updateTask, deleteTask } from './crud'

export async function tasksRoutes(app: FastifyInstance) {
  app.get('/tasks', listTasks)
  app.get('/tasks/:id', listTaskById)
  app.post('/tasks', createTask)
  app.put('/tasks/:id', updateTask)
  app.delete('/tasks/:id', deleteTask)
}
