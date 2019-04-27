const express = require('express');

const router = express.Router();

router.get('/auth', (req, res) => res.send('auth'));

module.exports = router;
