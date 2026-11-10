
const express = require('express');
const router = express.Router();

const pesertaKursusController = require('../controllers/pesertaKursusController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', pesertaKursusController.getAll);
router.get('/:id', pesertaKursusController.getById);
router.post('/', cekApiKey, pesertaKursusController.create);
router.put('/:id', cekApiKey, pesertaKursusController.update);
router.delete('/:id', cekApiKey, pesertaKursusController.remove);

module.exports = router;
