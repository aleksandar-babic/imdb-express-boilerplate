const express = require('express');

const router = express.Router();

const {
  index, show, destroy, store, update,
} = require('./../services/movies.service');

router.get('/movies', async (req, res) => res.send(await index()));
router.get('/movies/:id', async (req, res) => res.send(await show()));
router.delete('/movies/:id', async (req, res) => res.send(await destroy()));
router.put('/movies/:id', async (req, res) => res.send(await update()));
router.post('/movies', async (req, res) => res.send(await store()));

module.exports = router;
