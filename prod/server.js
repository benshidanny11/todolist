const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(`${__dirname}/../dist`)));
app.get('/', (req, res) => {
  res.render('index.html');
});
app.set('port', process.env.PORT || 8081);

app.listen(app.get('port'));