const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");


const routesApi = require('./routes/apiRoutes')
const routesHtml = require('./routes/htmlRoutes')

// const routes = require("./routes");

app.use('/api', routesApi);
app.use('/', routesHtml);



app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);