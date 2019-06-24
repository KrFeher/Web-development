const exampleImprovements = [{
  id: 1,
  text: 'I think everything is shit',
  improvement: 'Things should not be shit',
},
{
  id: 2,
  text: 'I think everything is shit 2',
  improvement: 'Things should not be shit 2',
},
{
  id: 3,
  text: 'I think everything is shit 3',
  improvement: 'Things should not be shit 3',
},
]
const express = require('express');
const app = express();

app.use(express.json());

app.get('/retro/improvements/', (req, res) => {
  res.send(exampleImprovements)
});

app.post('/retro/improvements/', (req, res) => {
  const { text, improvement } = req.body;
  const id = exampleImprovements.length + 1;
  const newImprovement = { id, text, improvement }
  exampleImprovements.push(newImprovement);

  res.send(newImprovement);
})

app.delete('/retro/improvements/:id', (req, res) => {
  const id = req.params.id;
  const index = exampleImprovements.findIndex(x => x.id === id);
  const elementToDelete = exampleImprovements[0];
  if (elementToDelete) { 
    exampleImprovements.splice(index, 1); 
    res.send(elementToDelete);
  } else {
    res.status(404).send('Cannot find improvement to delete.');
  }
})

app.listen(3001, () => console.log('Listening to port 3001...'));

// hook this up to mongoDB
// add some logging for request/response
// think about websockets.