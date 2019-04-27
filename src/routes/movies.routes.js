const express = require('express');

const router = express.Router();

router.get('/movies', (req, res) => res.send('movies'));

module.exports = router;
