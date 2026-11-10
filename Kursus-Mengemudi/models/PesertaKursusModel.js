const mongoose = require('mongoose');

const kontakSchema = new mongoose.Schema({
  telepon: String,
  alamat :  String,
}, { _id: false });

const PesertaKursusSchema = new mongoose.Schema({
  noPeserta: { type: String, required: [true, 'nomor peserta wajib diisi'], trim: true },
  nama: { type: String, required: [true, 'nama wajib diisi'], unique: true, trim: true },
  jumlahSesi: { type: String, required: [true, 'jumlah sesi wajib diisi'], unique: true, trim: true },
  jenisSim : { type: String, required: [true, 'jenis sim wajib diisi'], unique: true, trim: true },
  kontak : kontakSchema,
  instrukturMengemudiId: { type: mongoose.Schema.Types.ObjectId, ref: 'InstrukturMengemudi' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PesertaKursus', PesertaKursusSchema);