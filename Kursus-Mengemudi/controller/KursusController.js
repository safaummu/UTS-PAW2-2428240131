const gymMemberModel = require('../models/kursusModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.getAll = (req, res) => {
  const { j } = req.query;
  res.json(kursusModel.getAll(jumlahSesi));
};


exports.getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = kursusModel.getById(id);

  if (!data) return next(errorHttp(404, 'peserta tidak ditemukan'));

  res.json(data);
};

exports.create = (req, res, next) => {
  const {
    noPeserta,
    nama,
    jumlahSesi,
    jenisSim,
    kontak
  } = req.body;

  if (!noPeserta || !nama || !jumlahSesi) {
    return next(errorHttp(400, 'noPeserta, nama dan jumlahSesi wajib diisi'));
  }

  const baru = kursusModel.create({
    noPeserta,
    nama,
    jumlahSesi,
    jenisSim,
    kontak
  });

  res.status(201).json(baru);
};

exports.update = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = kursusModel.update(id, req.body);

  if (!data) return next(errorHttp(404, 'peserta tidak ditemukan'));

  res.json(data);
};

exports.remove = (req, res, next) => {
  const id = parseInt(req.params.id);
  const berhasil = kursusModel.remove(id);

  if (!berhasil) return next(errorHttp(404, 'peserta tidak ditemukan'));

  res.status(204).send();
};