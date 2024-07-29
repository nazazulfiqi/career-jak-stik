// utils/dateHelper.ts

/**
 * Mengonversi tanggal dari format ISO string ke format Indonesia
 * @param isoDate - Tanggal dalam format ISO string
 * @returns Tanggal yang diformat sesuai dengan format Indonesia
 */
export const formatDate = (isoDate: string): string => {
  // Membuat objek Date dari string tanggal
  const date = new Date(isoDate);

  // Mengatur opsi format tanggal
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', // Menampilkan nama hari dalam format lengkap
    day: '2-digit',  // Menampilkan tanggal dengan dua digit
    month: 'long',   // Menampilkan nama bulan dalam format lengkap
    year: 'numeric'  // Menampilkan tahun dalam format lengkap
  };

  // Menggunakan Intl.DateTimeFormat untuk format tanggal
  return new Intl.DateTimeFormat('id-ID', options).format(date);
};
