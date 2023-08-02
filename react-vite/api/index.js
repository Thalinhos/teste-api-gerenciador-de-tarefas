const express = require('express');
const app = express();
const connectDatabase = require('./conn');
const { viewTask, viewTasks, postTask, updateTask, deleteTask } = require('./controllers/viewsControllers');
const { get } = require('mongoose');
const cors = require('cors');

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5000',
  optionsSuccessStatus: 200, 
};
app.use(cors(corsOptions))

connectDatabase()
.then(()=>{ console.log('Ok!')})
.catch(()=>{ console.log('Erro')})

app.get('/', async (req, res) => {
  viewTasks(req, res);
})

app.get('/tasks/:id', async (req, res) => {
  viewTask(req, res);
});

app.post('/create', async (req, res) => {
  postTask(req, res);
})

app.patch('/tasks/:id', async (req, res) => {
  updateTask(req, res);
});

app.delete('/tasks/:id', async (req, res) => {
  deleteTask(req, res);
});



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}!`);
});