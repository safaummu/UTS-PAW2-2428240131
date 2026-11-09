const mongoose = require('mongoose');

const kontakSchema = new mongoose.Schema({
  telepon: String,
  alamat :  String,
}, { _id: false });

const PesertaKursusSchema = new mongoose.Schema({
  noPeserta: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  nama: { type: String, required: [true, 'nim wajib diisi'], unique: true, trim: true },
  jumlahSesi: { type: String, required: [true, 'nim wajib diisi'], unique: true, trim: true },
  jenisSim : { type: String, required: [true, 'nim wajib diisi'], unique: true, trim: true },
  kontak : kontakSchema,
  instrukturMengemudiId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prodi' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PesertaKursus', PesertaKursusSchema);