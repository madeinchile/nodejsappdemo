const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.get('/api/v1', function (req, res) {
    console.debug('GET /api/v1');
    res.send({ message: 'api/v1' })
});
app.get('/api/v2', function (req, res) {
    console.debug('GET /api/v2');
    res.send({ message: 'api/v2' })
});
app.use(function(req, res) {
    res.status(404).send({ message: 'Not Found :(' })
});
const server = app.listen(3000, function () {
  console.info('Running...');
});

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.info('Closing http server...');
    server.close(() => {
      console.info('Http server closed.');
    });
});

process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    console.info('Killing...');
    process.exit(1);
});