const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/Users');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/admit-card-generator', { useNewUrlParser: true })
.then(()=>console.log("db connected"))
.catch((error)=>error.message);
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to database');
});

db.on('error', (error) => {
  console.log('Error:', error);
});

// Routes
app.use('/api/users', usersRouter);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
