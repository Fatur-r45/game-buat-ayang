class Ayang {
  constructor(nama, hobi, umur, nama_ayang, hobi_ayang, umur_ayang, point) {
    this.nama = nama;
    this.hobi = hobi;
    this.umur = umur;
    this.nama_ayang = nama_ayang;
    this.hobi_ayang = hobi_ayang;
    this.umur_ayang = umur_ayang;
    this.point = point;
  }

  tebakNamaAyang(nama) {
    if (nama.toUpperCase() === this.nama_ayang.toUpperCase()) {
      this.point += 10;
      return `yeey bener sekali beee😘, kamu tau nama panjang aku <span>${this.nama_ayang}</span> kamu sekarang nambah 10 point`;
    } else {
      this.point -= 10;
      return `yahhh sayang sekali beee 😩, kamu salah menjawab nama aku, oleh karena itu kamu di kurangin 10 point`;
    }
  }
  tebakHobiAyang(hobi) {
    if (hobi.toUpperCase() === this.hobi_ayang.toUpperCase()) {
      this.point += 10;
      return `yeey bener sekali beee 😍, kamu tau hobi aku <span>${this.hobi_ayang}</span> kamu sekarang nambah 10 point `;
    } else {
      this.point -= 10;
      return `yahhh kamu kuran beruntung be😩, kamu salah menjawab hobi aku, oleh karena itu kamu di kurangin 10 point`;
    }
  }
  tebakUmurAyang(umur) {
    if (umur === this.umur_ayang) {
      this.point += 10;
      return `yeey tepat sekali be ku yang cantik dan yang paling maniss ❤️, kamu tau umur aku adalah <span>${this.umur_ayang}</span> kamu sekarang nambah 10 point`;
    } else {
      this.point -= 10;
      return `yahhh bee 😩, kamu salah menjawab umur aku, cobalagi ya be, tapi sekarang karena kamu salah, kamu harus di kurangin 10 point`;
    }
  }
  dataKamu() {
    return `Nama kamu ${this.nama}, kamu lahir di bogor pada tanggal 14 pebruari, tahun 2002, dan sekarang kamu berumur ${this.umur}, dan hobi kamu juga aku tau, hobi kamu yaitu ${this.hobi}, dan point kamu sekarang ${this.point}`;
  }
}

const Rivna = new Ayang(
  "Rivna Sonia Valentina",
  "nonton drakor",
  20,
  "fatur rahman gandi",
  "baca komik",
  20,
  50
);

console.log(Rivna);

const namaInp = document.querySelector("#nama");
const umurInp = document.querySelector("#umur");
const hobiInp = document.querySelector("#hobi");
const semesterInp = document.querySelector("#semester");
const submit = document.querySelector("#submit");
const naik = document.querySelector("#naik_semester");
const alert = document.querySelector(".alert");
const namaUser = document.querySelector(".nama_user");
const dataUser = document.querySelector(".data_user");
const hasilKeterangan = document.querySelector(".hasil_keterangan");
const exit = document.querySelector(".exit");

exit.addEventListener("click", () => {
  alert.classList.add("none");
});

namaInp.addEventListener("change", (event) => {
  const nama = event.target.value;
  Rivna.tebakNamaAyang(nama);
  submit.addEventListener("click", (event) => {
    console.log(Rivna);
    event.preventDefault();
    alert.classList.remove("none");
    hasilKeterangan.innerHTML = `${Rivna.tebakNamaAyang(nama)} 😘`;
  });
});

hobiInp.addEventListener("change", (event) => {
  const hobi = event.target.value;
  Rivna.tebakHobiAyang(hobi);
  submit.addEventListener("click", (event) => {
    console.log(Rivna);
    event.preventDefault();
    alert.classList.remove("none");
    hasilKeterangan.innerHTML = `${Rivna.tebakHobiAyang(hobi)} 😘`;
  });
});

umurInp.addEventListener("change", (event) => {
  const umur = event.target.value;
  Rivna.tebakUmurAyang(parseInt(umur));
  submit.addEventListener("click", (event) => {
    console.log(Rivna);
    event.preventDefault();
    alert.classList.remove("none");
    hasilKeterangan.innerHTML = `${Rivna.tebakUmurAyang(parseInt(umur))} 😘`;
  });
});

submit.addEventListener("click", () => {
  namaUser.innerHTML = `<span>${Rivna.nama}</span>`;
  dataUser.innerHTML = Rivna.dataKamu();
});
