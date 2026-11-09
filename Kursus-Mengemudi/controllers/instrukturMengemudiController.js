const InstrukturMengemudi = require('../models/instrukturMengemudiModel');

exports.create = async (req, res) => {
  try {
    const instruksiMengemudi = await InstrukturMengemudi.create(req.body);
    res.status(201).json(instruksiMengemudi);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await InstrukturMengemudi.find());
};