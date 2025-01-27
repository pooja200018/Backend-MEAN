const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user-route");
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('running');
});

app.use(userRoutes);

async function connectDb() {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
      dbName: 'UsersDb'
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
