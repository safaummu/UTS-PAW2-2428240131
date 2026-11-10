
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const logger = require('./middlewares/logger');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const instruksiMengemudiRoutes = require('./routes/instrukturMengemudiRoute');
const pesertaKursusRoutes = require('./routes/pesertaKursusRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware global
app.use(logger);
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

// Route dasar
app.get('/', (req, res) => {
  res.send('Server Express.js berjalan!');
});

// Route per modul
app.use('/peserta-kursus', pesertaKursusRoutes);
app.use('/instruktur-mengemudi', instruksiMengemudiRoutes);

// Handler 404 dan error
app.use(notFoundHandler);
app.use(errorHandler);

// Koneksi MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('Terhubung ke MongoDB');
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Gagal terhubung:', err.message);
    process.exit(1);
  });
