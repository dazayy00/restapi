const { Router } = require('express');
//const controllers = require('../controllers'); 

const router = Router();

router.get('/', (req, res) => res.send('Welcome to Dazayy api version 1'))
router.get('/pokemon', (req, res) => res.send('Welcome to pokemon api'))
router.get('/nasa', (req, res) => res.send('Welcome to nasa api'))

module.exports = router;