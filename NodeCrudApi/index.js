const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
const items = require('./routes/api');
const Application = require('./routes/Login');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  
app.use(bodyParser.json());
app.use('/api/items', items);
app.use('/api/application', Application);

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://arun:dfUfDYp7j2xuaUqt@cluster1.sulequc.mongodb.net/?retryWrites=true&w=majority';
// mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
