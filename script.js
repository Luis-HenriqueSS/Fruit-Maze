const crianca = document.getElementById('crianca')
const fruta = document.querySelectorAll('fruta')
let posicao = 350
let movimento = 10

document.addEventListener('keydown', function (event) {
    if (event.key === 'Shift') {
        movimento = 20
    }
})

document.addEventListener('keyup', function (event) {
    if (event.key === 'Shift') {
        movimento = 10
    }
})

document.addEventListener('keydown', (event) => {

    if (event.key === 'a' || event.key === 'A') {
        posicao -= movimento
        crianca.style.backgroundImage = "url('crianca.gif')"

        if (posicao < 0) {
            posicao = 0
        }
    } else if (event.key === 'd' || event.key === 'D') {
        posicao += movimento
        if (posicao > 700) {
            posicao = 700
        }
    } //Sprites???

    crianca.style.left = posicao + 'px'

    if (colisaoDetectada(crianca, target)) {
        alert('Colisão detectada!')
    }
})

function colisaoDetectada(el1, el2) {
    const rect1 = el1.getBoundingClientRect()
    const rect2 = el2.getBoundingClientRect()

    if (rect1.top > rect2.bottom) {
        return false
    }
    if (rect1.bottom < rect2.top) {
        return false
    }
    if (rect1.left > rect2.right) {
        return false
    }
    if (rect1.right < rect2.left) {
        return false
    }

    return true
}

//VOU FAZER A PARTE DAS FRUTAS CAINDO - ASS. menezes e todo mundo fds
function criarFrutas() {
    let posXfrutas = Math.floor(Math.random() * 700)
    let escolhaFruta = Math.floor(Math.random() * 3)
    if (escolhaFruta == 1) {
        fruta.style.background = 'orange.png'

    } else if (escolhaFruta == 2) {
        fruta.style.background = 'grape.png'

    } else if (escolhaFruta == 3) {
        fruta.style.background = 'cherry.png'

    }
    fruta.style.left = `${posXfrutas}`
    frutaDescer()

    function frutaDescer() {
        for (let i = 0; i < 100; i++) {

        }
        fruta.style.top

    }
}


setInterval(function () {
}, 100)


//Deus lhe pague
