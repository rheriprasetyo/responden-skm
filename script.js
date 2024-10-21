// Tabel Krejcie dan Morgan berdasarkan N (populasi) dan S (sample size/responden)
const krejcieMorganTable = {
  10: 10,
  15: 14,
  20: 19,
  25: 24,
  30: 28,
  35: 32,
  40: 36,
  45: 40,
  50: 44,
  55: 48,
  60: 52,
  65: 56,
  70: 59,
  75: 63,
  80: 66,
  85: 70,
  90: 73,
  95: 76,
  100: 80,
  110: 86,
  120: 92,
  130: 97,
  140: 103,
  150: 108,
  160: 113,
  170: 118,
  180: 123,
  190: 127,
  200: 132,
  210: 136,
  220: 140,
  230: 144,
  240: 148,
  250: 152,
  260: 155,
  270: 159,
  280: 162,
  290: 165,
  300: 169,
  320: 175,
  340: 181,
  360: 186,
  380: 191,
  400: 196,
  420: 201,
  440: 205,
  460: 210,
  480: 214,
  500: 217,
  550: 226,
  600: 234,
  650: 242,
  700: 248,
  750: 254,
  800: 260,
  850: 265,
  900: 269,
  950: 274,
  1000: 278,
  1100: 285,
  1200: 291,
  1300: 297,
  1400: 302,
  1500: 306,
  1600: 310,
  1700: 313,
  1800: 317,
  1900: 320,
  2000: 322,
  2200: 327,
  2400: 331,
  2600: 335,
  2800: 338,
  3000: 341,
  3500: 346,
  4000: 351,
  4500: 354,
  5000: 357,
  6000: 361,
  7000: 364,
  8000: 367,
  9000: 368,
  10000: 370,
  15000: 375,
  20000: 377,
  30000: 379,
  40000: 380,
  50000: 381,
  75000: 382,
  100000: 384,
};

document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const totalUsers = parseInt(document.getElementById("totalUsers").value);
  let sampleSize;
  let lastSmallerKey = 0; // Menyimpan populasi terdekat yang lebih kecil

  // Cari ukuran sampel terdekat
  const keys = Object.keys(krejcieMorganTable).map(Number);
  for (let i = 0; i < keys.length; i++) {
    if (totalUsers < keys[i]) {
      sampleSize = krejcieMorganTable[lastSmallerKey];
      break;
    }
    lastSmallerKey = keys[i]; // Simpan nilai populasi terakhir yang lebih kecil
  }

  //   Jika jumlah pengguna lebih dari 100.000, ambil sampel maksimum (384)
  if (!sampleSize) {
    sampleSize = krejcieMorganTable[100000];
  }

  // Tampilkan hasil
  document.getElementById(
    "resultText"
  ).textContent = `Jumlah responden yang dibutuhkan adalah: ${sampleSize} orang.`;
  document.getElementById("result").classList.remove("hidden");
});
