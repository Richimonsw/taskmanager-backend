const Task = require("../model/Task")

async function getAllTasks() {
  return await Task.find({});
}

async function getTaskById(id) {
  return await Task.findById(id);
}

async function createTask(task) {
  return await Task.create(task);
}

async function updateTask(id, task) {
  return await Task.findByIdAndUpdate(id, task);
}

async function deleteTask(id) {
  return await Task.findByIdAndDelete(id);
}

async function getAllTasksByUser(id) {
  return await Task.find({ user: id });
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getAllTasksByUser
};