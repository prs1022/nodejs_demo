const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


const userRouter = require('./routes/user');
app.use('/users', userRouter);



app.listen(3000, () => {
  console.log('Express server running on port 3000');
});