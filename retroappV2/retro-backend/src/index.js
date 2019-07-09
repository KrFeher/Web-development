const express = require('express');
const app = express();
const db = require('./db');
const config = require('config');
const port = config.get('express_port');
const morgan = require('morgan');
const cors = require('cors');
const io = require('socket.io')(5000);

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('test');
});

app.get('/retro/improvements/', async (req, res) => {
  const opinions = await db.getOpinions();
  res.send(opinions);
});

app.post('/retro/improvements/', async (req, res) => {
  console.log(req.body);
  const opinion = await db.insertManyOpinions(req.body);
  const opinions = await db.getOpinions();
  console.log(opinion);
  console.log(opinions);
  io.emit('new-opinions', opinions);
  res.send(opinion);
});

app.delete('/retro/improvements/:id', async (req, res) => {
  const id = req.params.id;
  const foundOpinion = await db.findOpinion(id);
  console.log(foundOpinion);
  if (foundOpinion) {
    const result = await db.deleteOpinion(id);
    res.status(200).send(result);
  } else {
    res.status(404).send('Could not find opinion to delete');
  }
});

app.listen(port, () => console.log(`Listening to port ${port}...`));

io.on('connection', socket => {
  socket.emit('initialise', 'Socket connection established');
})



console.log(`The application is in ${config.get('name')} environment mode.`);