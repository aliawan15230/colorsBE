const express = require('express');
const router = express.Router();
const colors = require('../controllers/colors');

router.post('/color', colors.addColor);

router.get('/color/:id', colors.getColor);

router.get('/', colors.getAllColors);

router.put('/color/:id', colors.updateColor)

module.exports = router;