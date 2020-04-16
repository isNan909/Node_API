require('dotenv').config();

const app = require('../Node_API/app');

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
