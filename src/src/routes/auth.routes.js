const { Router } = require('express');
const { test } = require('../controllers/auth.controllers');

const router = Router();

router.get('/', test);

module.exports = router;