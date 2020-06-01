import express from 'express'

const router = express.Router();

import {
  index, show, destroy, store, update,
} from '../services/movies.service';

router.get('/movies', async (req, res) => res.send(await index()));
router.get('/movies/:id', async (req, res) => res.send(await show(req.params)));
router.delete('/movies/:id', async (req, res) => res.send(await destroy(req.params)));
router.put('/movies/:id', async (req, res) => res.send(await update()));
router.post('/movies', async (req, res) => res.send(await store(req.body)));

export default router;
