const express = require('express');

const router = express.Router();

router.get('/', async (request, response) => {
  response.render('layout', {
    pageTitle: 'DONE',
    template: 'done',
  });
});

module.exports = router;
