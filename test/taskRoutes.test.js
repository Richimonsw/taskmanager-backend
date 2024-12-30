const request = require("supertest");
const app = require("../src/app");
const TaskService = require("../src/services/taskServices");

jest.mock("../src/services/taskServices");

describe("Task Routes", () => {
  describe("GET /tasks", () => {
    test("Devuelve una lista de tareas", async () => {
      const mockTasks = [
        {
          id: "1",
          title: "Tarea 1",
          description: "Descripción 1",
          completed: false,
        },
        {
          id: "2",
          title: "Tarea 2",
          description: "Descripción 2",
          completed: true,
        },
      ];

      TaskService.getAllTasks.mockResolvedValue(mockTasks);

      const response = await request(app).get("/api/tasks");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTasks);
    });

    test("debería devolver 404 si no hay tareas", async () => {
      TaskService.getAllTasks.mockResolvedValue([]);

      const response = await request(app).get("/api/tasks");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: "No hay tareas disponibles" });
    });
  });

  describe("GET /tasks/:id", () => {
    test("Devuelve una tarea por ID", async () => {
      const mockTask = {
        id: "1",
        title: "Tarea 1",
        description: "Descripción 1",
        completed: false,
      };

      TaskService.getTaskById.mockResolvedValue(mockTask);

      const response = await request(app).get("/api/tasks/1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTask);
    });

    test("debería devolver 404 si la tarea no existe", async () => {
      TaskService.getTaskById.mockResolvedValue(null);

      const response = await request(app).get("/api/tasks/1");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: "Tarea no encontrada" });
    });
  });

  describe("POST /tasks", () => {
    test("Crea una nueva tarea", async () => {
      const mockTask = {
        id: "1",
        title: "Nueva Tarea",
        description: "Descripción nueva",
        completed: false,
      };

      TaskService.createTask.mockResolvedValue(mockTask);

      const response = await request(app)
        .post("/api/tasks")
        .send({ title: "Nueva Tarea", description: "Descripción nueva" });

      expect(response.status).toBe(201);
      expect(response.body).toEqual(mockTask);
    });
  });

  describe("PUT /tasks/:id", () => {
    test("Actualiza una tarea existente", async () => {
      const mockUpdatedTask = {
        id: "1",
        title: "Tarea Actualizada",
        description: "Descripción actualizada",
        completed: true,
      };

      TaskService.getTaskById.mockResolvedValue(mockUpdatedTask);
      TaskService.updateTask.mockResolvedValue(mockUpdatedTask);

      const response = await request(app)
        .put("/api/tasks/1")
        .send({
          title: "Tarea Actualizada",
          description: "Descripción actualizada",
          completed: true,
        });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Tarea actualizada exitosamente",
        task: mockUpdatedTask,
      });
    });

    test("debería devolver 404 si la tarea no existe", async () => {
      TaskService.getTaskById.mockResolvedValue(null);

      const response = await request(app)
        .put("/api/tasks/1")
        .send({
          title: "Tarea Actualizada",
          description: "Descripción actualizada",
          completed: true,
        });

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: "Tarea no encontrada" });
    });
  });

  describe("DELETE /tasks/:id", () => {
    test("Elimina una tarea existente", async () => {
      TaskService.getTaskById.mockResolvedValue({ id: "1" });
      TaskService.deleteTask.mockResolvedValue();

      const response = await request(app).delete("/api/tasks/1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: "Tarea eliminada exitosamente" });
    });

    test("debería devolver 404 si la tarea no existe", async () => {
      TaskService.getTaskById.mockResolvedValue(null);

      const response = await request(app).delete("/api/tasks/1");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: "Tarea no encontrada" });
    });
  });
});
