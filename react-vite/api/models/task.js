const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    inicio: {
        type: Date,
        default: Date.now
    },
    fechamento: {
        type: Date,
        default: null
    }
})

const Task = mongoose.model('tasks', TaskSchema);
module.exports = Task;
