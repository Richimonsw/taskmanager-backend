const TaskRepository = require("../repositories/taskRepository");

class TaskServices {
  async getAllTasks() {
    return await TaskRepository.getAllTasks();
  }

  async getTaskById(id) {
    return await TaskRepository.getTaskById(id);
  }

  async createTask(task) {
    return await TaskRepository.createTask(task);
  }

  async updateTask(id, task) {
    return await TaskRepository.updateTask(id, task);
  }

  async deleteTask(id) {
    return await TaskRepository.deleteTask(id);
  }

  async getTasksByUser(id){
    return await TaskRepository.getAllTasksByUser(id);
  }
}

module.exports = new TaskServices();