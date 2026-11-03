let kursusMengemudi = [
  { noPeserta: 1, nama: 'Rizky Maulana', jumlahSesi: '11', jenisSim: 'A' , kontak: 'rumah'},
  { noPeserta: 2, nama: 'Alya Putri', jumlahsesi: '10', jenisSim: 'A', kontak: 'telepon'},
  { noPeserta: 3, nama: 'Fajar Ramadhan', jumlahSesi: '11', jenisSim: 'WA'}
];

    noPeserta,
    nama,
    jumlahSesi,
    jenisSim,
    kontak

let nextId = 4;
const getAll = (jumlahSesi) => {
  if (jumlahSesi) {
    return kursusMengemudi.filter(
      (kursus) => kursus.jumlahSesi === jumlahSesi
    );
  }

  return kursusMengemudi;
};

const getById = (id) => {
  return kursusMengemudi.find((kursus) => kursus.id === id);
};

const create = (data) => {
  const baru = {
    id: nextId++,
    ...data
  };

  kursusMengemudi.push(baru);

  return baru;
};

const update = (id, data) => {
  const index = kursusMengemudi.findIndex((member) => member.id === id);

  if (index === -1) {
    return null;
  }

  kursusMengemudi[index] = {
    ...kursusMengemudi[index],
    ...data,
    id
  };

  return kursusMengemudi[index];
};

const remove = (id) => {
  const index = kursusMengemudi.findIndex((kursus) => kursus.id === id);

  if (index === -1) {
    return false;
  }

  kursusMengemudi.splice(index, 1);

  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};