const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  {
    title: 'faire les courses',
    done: false,
  },
  {
    title: 'faire la vaisselle',
    done: true,
  },
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('todolist');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});