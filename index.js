const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', function (req, res) {
  res.send('Express application working ...');
});

// Start server
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server listening`)
  })

module.exports = app;
