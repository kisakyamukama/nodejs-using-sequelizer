const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = { 
    origin: 'https://localhost:8082'
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true}));

const db = require('./app/models');
db.sequelize.sync({ alter: true });


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


