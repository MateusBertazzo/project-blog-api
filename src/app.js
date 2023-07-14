const express = require('express');
const { userRoute, loginRoute, categoryRoute, blogPostRoute } = require('./routes');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/categories', categoryRoute);
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/post', blogPostRoute);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
