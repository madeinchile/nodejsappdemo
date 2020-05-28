const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(function(req, res) {
    console.debug(req.method + " " +req.url);
    res.send({ debug: req.method + " " +req.url })
});
const server = app.listen(80, function () {
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