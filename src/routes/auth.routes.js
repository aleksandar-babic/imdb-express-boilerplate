import express from 'express'

const router = express.Router();

import {
  me, register, login, logout, refresh,
} from './../services/user.service';

router.get('/auth/me', (req, res) => res.json(me(req.user)));
router.post('/auth/register', (req, res) => register(req.body)
  .then(data => res.json(data))
  .catch(err => res.json(err, 500)));
router.post('/auth/login', (req, res) => login(req.body)
  .then(data => res.json(data))
  .catch(err => res.json(err.message, 500)));
router.post('/auth/logout', (req, res) => res.json(logout()));
router.post('/auth/refresh', (req, res) => res.json(refresh()));

export default router;
