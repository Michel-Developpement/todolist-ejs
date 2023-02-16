const express = requred('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('todolist');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});