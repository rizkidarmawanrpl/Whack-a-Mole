const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if(tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;

    return t;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    const tanahRandom = tanah[tRandom];
    const tikusRandom = tikus[tRandom];
    const wRandom = randomWaktu(300, 1000);

    tikusRandom.classList.remove('hidden');
    tanahRandom.classList.add('muncul');

    setTimeout(() => {
        tanahRandom.classList.remove('muncul');
        if(!selesai) {
            munculkanTikus();
        }
    }, 3000);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;

    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    this.classList.add('hidden');
    papanSkor.textContent = skor;

    console.log('pukul');
}

tikus.forEach(t => {
    t.addEventListener('click', pukul);
});