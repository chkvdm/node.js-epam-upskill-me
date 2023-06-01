const path = require('path');
const http = require('http');

const express = require('express');
const makeStoppable = require('stoppable');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const TasksService = require('./services/TasksService');
const routes = require('./routes');

const tasksServise = new TasksService(path.join(__dirname, './data/task.json'));

const app = express();

const index = require('./routes/index');

const server = makeStoppable(http.createServer(app));

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['Aj12djoiu', 'kjdf76221'],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '../assets')));

app.locals.siteName = 'Simple TODO Application';

app.use(async (request, response, next) => {
  try {
    const tasksActive = await tasksServise.getActiveTasksList();
    const tasksDone = await tasksServise.getDoneTasksList();
    response.locals.tasksAllNames = tasksActive;
    response.locals.tasksDoneNames = tasksDone;
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use('/', index);

module.exports = () => {
  const stopServer = () => {
    return new Promise((resolve) => {
      server.stop(resolve);
    });
  };

  return new Promise((resolve) => {
    server.listen(3000, () => {
      console.log('Express server is listening on http://localhost:3000');
      resolve(stopServer);
    });
  });
};
