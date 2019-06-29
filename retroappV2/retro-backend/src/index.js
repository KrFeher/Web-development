const express = require('express');
const app = express();
const db = require('./db');
const config = require('config');
const port = config.get('express_port');
const morgan = require('morgan');


app.use(express.json());
app.use(morgan('combined'));

app.get('/retro/improvements/', async (req, res) => {
  const opinions = await db.getOpinions();
  res.send(opinions);
});

app.post('/retro/improvements/', async (req, res) => {
  const opinion = await db.insertOpinion(req.body)
  res.send(opinion);
})

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


})

app.listen(port, () => console.log(`Listening to port ${port}...`));

console.log(`The application is in ${config.get('name')} environment mode.`);

// think about websockets.
// fix async problem with getOpinions