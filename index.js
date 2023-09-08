const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
// const { apiKey } = require('./config/config');

const app = express();

app.use(helmet());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import other middleware here
// app.use(middleware.loggers);

// Will probably swap this out for JWT
/*
app.use((req, res, next) => {
    const requestApiKey = req.get('API-Key');
    if (!requestApiKey || requestApiKey !== apiKey) {
        res.status(401).json({ error: "Unauthorized" })
    } else {
        next();
    }
});
*/

const db = require('./models');
db.sequelize.sync({})
    .then(() => {
        console.log('Setting up database if not present');
    });

require('./routes/routes')(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});