const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const pool = require('./configuration/config');

const app = express();
app.use(helmet());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const getFood = (req, res) => {
  pool.query('SELECT * FROM food', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json({
      status: 'sucess',
      requestTime: req.requestTime,
      data: results.rows,
    });
  });
};

const getFoodBYId = (req, res) => {
  const reqId = parseInt(request.params.id);
  pool.query('SELECT * FROM users WHERE id = $1', [reqId], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json({
      status: 'sucess',
      requestTime: req.requestTime,
      data: results.rows,
    });
  });
};

const newFood = (req, res) => {
  const { dish, country } = req.body;
  pool.query(
    'INSERT INTO users (dish, country) VALUES ($1, $2)',
    [dish, country],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const updateFood = (req, res) => {
  const reqId = parseInt(request.params.id);
  const { dish, country } = req.body;

  pool.query(
    'UPDATE users SET food = $1, country = $2 WHERE id = $3',
    [dish, country, reqId],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Food modified with ID: ${reqId}`);
    }
  );
};

const deleteFood = (req, res) => {
  const reqId = parseInt(req.params.id);

  pool.query('DELETE FROM food WHERE id = $1', [reqId], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Food deleted with ID: ${reqId}`);
  });
};

app.route('/food').get(getFood).post(newFood);
app.route('/food/:id').get(getFoodBYId).put(updateFood).delete(deleteFood);

module.exports = app;
