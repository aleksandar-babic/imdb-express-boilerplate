const express = require('express');

const router = express.Router();

const { index } = require('./../services/movies.service');

router.get('/movies', async (req, res) => res.send(await index()));

module.exports = router;
