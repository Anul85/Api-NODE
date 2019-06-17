const express = require('express');
const bodyParser = require('body-parser');

// https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20181220T074220Z.b7ddbed8ded48567.880dbe79113d61cdf0d1f50d5507dd30a8bc3334

const config = require('./config');

const category = require('./routes/categories');
const users = require('./routes/users');
const books = require('./routes/books');
const statistics = require('./routes/statistics');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
   new Promise(()=>{
     if(!req.headers.token || config('token') != req.headers.token) {
       return res.json({"err": "Դուք․․․"});
     }
   next();
  });
});

app.use('/category', category);
app.use('/users', users);
app.use('/books', books);
app.use('/statistics', statistics);


app.listen(3000);
