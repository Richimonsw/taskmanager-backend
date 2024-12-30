const TaskServices = require("../services/taskServices");
const Task = require("../model/Task"); 
class TaskController {
  async getAllTasks(req, res, next) {
    try {
      const tasks = await TaskServices.getTasksByUser(req.user._id);
      res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  }


  async getTaskById(req, res, next) {
    try {
      const task = await TaskServices.getTaskById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }
      res.status(200).json(task);
    } catch (err) {
      next(err);
    }
  }

  async createTask(req, res, next) {
    try {
      const taskData  = req.body;
      if (!taskData.title || !taskData.description) {
        return res.status(400).json({ message: "El título y la descripción son obligatorios" });
      } 

      const task = new Task({
        ...taskData,
        user: req.user._id, 
      });

      const createdTask = await TaskServices.createTask(task);
      res.status(201).json(createdTask);
    } catch (err) {
      next(err);
    }
  }

  async updateTask(req, res, next) {
    try {
      const taskId = req.params.id;
      const updatedData = req.body;

      const task = await TaskServices.getTaskById(taskId);
      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }

      const updatedTask = await TaskServices.updateTask(taskId, updatedData);
      res.status(200).json({
        message: "Tarea actualizada exitosamente",
        task: updatedTask,
      });
    } catch (err) {
      next(err);
    }
  }

  async deleteTask(req, res, next) {
    try {
      const taskId = req.params.id;
  
      const task = await TaskServices.getTaskById(taskId);
      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }
  
      await TaskServices.deleteTask(taskId);
      res.status(200).json({
        message: "Tarea eliminada exitosamente",
      });
    } catch (err) {
      next(err); // Pasa el error al middleware
    }
  }
  
}

module.exports = new TaskController();
