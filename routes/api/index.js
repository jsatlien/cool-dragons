const dragonRoutes = require('./dragonRoutes.js');
const charRoutes = require('./characterRoutes.js');
const router = require('express').Router();

router.use('/dragons', dragonRoutes);
router.use('/characters', charRoutes);

module.exports = router;