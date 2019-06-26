const mongoose = require('mongoose');
const config = require('config');

const dbUsername = config.get('db_username');
const dbPassword = config.get('db_password');

const uri = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0-rxwrb.mongodb.net/RetroDb?retryWrites=true&w=majority`;

const opinionSchema = new mongoose.Schema({
  text: String,
  improvement: String,
  createdDate: {
    type: Date,
    default: Date.now
  },
  isImprovement: Boolean,
})

const exampleData = [{
    text: 'This was working out really well',
    improvement: '-',
    isImprovement: false,
  },
  {
    text: 'This isnt that great',
    improvement: 'Should be better',
    isImprovement: true,
  },
  {
    text: 'Im sleepy',
    improvement: 'should have slept more',
    isImprovement: true,
  }
];

const Opinion = mongoose.model('Opinion', opinionSchema);

init = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true
    });
    console.log('Connected to MongoDB...');
  } catch (error) {
    console.log('Could not connect to database. ERROR: ', error);
    return;
  }
  await deleteOldEntries()
  await insertExamples();
  await getOpinions();
}

deleteOldEntries = async () => {
  console.log('Deleting old database entries:');
  return Opinion.deleteMany({}, (err) => {
    if (err) {
      console.log('Deleting old entries failed...', err);
    } else {
      console.error('Successfully deleted old entries...');
    };
  })
}

insertExamples = async () => {
  console.log('Inserting example data...');
  return Opinion.insertMany(exampleData, (err, docs) => {
    if (err) {
      console.error('Inserting example data failed...', err);
    } else {
      console.log('Successfully inserted example data...');
    }
  })
}


getOpinions = async () => {
  console.log('calling getOpinions');
  return Opinion.find({});
  console.log(stuff);
}

init();