const mongoose = require('mongoose');

// MongoDB connection string from .env file
const mongoURI = "mongodb://127.0.0.1:27017/trackify";

// Connect to MongoDB
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDB');
});
