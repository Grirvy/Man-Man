const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/CONN');

const PORT = process.env.PORT || 3005;
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object
app.use(express.urlencoded({ extended: true }));

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use('/api', routes);

app.delete('/api/delete', (req, res) => {

    res.status(200).json({ message: 'Delete successful' });
})

app.post('/api/goodbye', (req, res) => {
    res.status(200).json({ message: 'Goodbye, World!' });

});

// Global Error Handler.
app.use((e, req, res, next) => {
    console.log(e.stack);
    console.log(e.name);
    console.log(e.code);

    res.status(500).json({
        message: "Error in the application.",

    });
});

// Connect to the database before starting the express.js server
sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT`, PORT));
});
