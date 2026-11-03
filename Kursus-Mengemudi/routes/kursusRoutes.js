const express = require('express');
const router = express.Router();

const KursusController = require('../controllers/KursusController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', KursusController.getAll);

router.get('/:id', KursusController.getById);

router.post('/', cekApiKey, KursusController.create);

router.put('/:id', cekApiKey, KursusController.update);

router.delete('/:id', cekApiKey, KursusController.remove);

module.exports = router;