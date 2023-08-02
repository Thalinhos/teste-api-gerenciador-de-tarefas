const Task = require('../models/task');

const viewTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json({ tasks });
      }catch(err){
        console.log(err)
      }
}

const viewTask = async (req, res) => {
    try {
        const oneTask = await Task.findById(req.params.id);
        res.json({ tasks: oneTask});
    } catch (error) {
        console.log(error)
    }
}

const postTask = async (req, res) => {
    try {
        const { nome, status, inicio, fechamento } = req.body;
        const novaTask = new Task({ nome, status, inicio, fechamento });
        await novaTask.save();
    
        res.json(novaTask);
    
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, status, inicio, fechamento } = req.body;

    const taskAtualizada = await Task.findByIdAndUpdate(id, {nome, status, inicio, fechamento},
    {new: true}
      );
    
    console.log('Success ao editar task')
    res.json(taskAtualizada);
  }catch(err) {
    console.log(err)
    res.sendStatus(500);
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);

    console.log('Success ao deletar task')
    res.sendStatus(200);
  }catch (err) {
    console.log(err)
    res.sendStatus(500);
  }
}

module.exports = {

    viewTask,
    viewTasks,
    postTask,
    updateTask,
    deleteTask
    
}