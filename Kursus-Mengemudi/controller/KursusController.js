const gymMemberModel = require('../models/kursusmodel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.getAll = (req, res) => {
  const { jenisMembership } = req.query;
  res.json(kursusModel.getAll(jenisMembership));
};

exports.getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = kursusModel.getById(id);

  if (!data) return next(errorHttp(404, 'Member tidak ditemukan'));

  res.json(data);
};

exports.create = (req, res, next) => {
  const {
  } = req.body;

  if (!nama || !jenisMembership || !tanggalDaftar) {
    return next(errorHttp(400, 'nama, jenisMembership, dan tanggalDaftar wajib diisi'));
  }

  const baru = gymMemberModel.create({
    nama,
    noHp,
    jenisMembership,
    tanggalDaftar,
    aktif
  });

  res.status(201).json(baru);
};

exports.update = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = gymMemberModel.update(id, req.body);

  if (!data) return next(errorHttp(404, 'Member tidak ditemukan'));

  res.json(data);
};

exports.remove = (req, res, next) => {
  const id = parseInt(req.params.id);
  const berhasil = gymMemberModel.remove(id);

  if (!berhasil) return next(errorHttp(404, 'Member tidak ditemukan'));

  res.status(204).send();
};