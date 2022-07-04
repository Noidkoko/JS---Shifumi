const screen = document.querySelector('.screen')

var pierreIA = document.querySelector('#pierreIA')
var feuilleIA = document.querySelector('#feuilleIA')
var ciseauIA = document.querySelector('#ciseauIA')
var resultat =document.querySelector('.resultat')
var choix = ""

function pierre() {
    console.log('pierre')
    choix = 'p'
    jouer(choix)
}
function feuille() {
    console.log('feuille')
    choix = 'f'
    jouer(choix)
}
function ciseau() {
    console.log('ciseau')
    choix = 'c'
    jouer(choix)
}

function jouer(choix) {
    pierreIA.style = "display: none;"
    feuilleIA.style = "display: none;"
    ciseauIA.style = "display: none;"
    var choixIA = Math.floor(Math.random() * 3)
    if (choix == 'p') {
        if (choixIA == 0) {
            resultat.textContent ="egalité"
            resultat.style = "color: black;"
            pierreIA.style = "display: block;"

        }
        else if (choixIA == 1) {

            resultat.textContent ="perdu"
            resultat.style = "color: red;"
            feuilleIA.style = "display: block;"
        }
        else if (choixIA == 2) {
            resultat.textContent ="gagné"
            resultat.style = "color: green;"
            ciseauIA.style = "display: block;"
        }
    }
    else if (choix == 'f') {
        if (choixIA == 1) {

            resultat.textContent ="egalité"
            resultat.style = "color: black;"
            feuilleIA.style = "display: block;"
        }
        else if (choixIA == 2) {
            resultat.textContent ="perdu"
            resultat.style = "color: red;"
            ciseauIA.style = "display: block;"

        }
        else if (choixIA == 0) {
            resultat.textContent ="gagné"
            resultat.style = "color: green;"
            pierreIA.style = "display: block;"
        }
    }
    else if (choix == 'c') {
        if (choixIA == 2) {
            resultat.textContent ="egalité"
            resultat.style = "color: black;"
            ciseauIA.style = "display: block;"

        }
        else if (choixIA == 0) {
            resultat.textContent ="perdu"
            resultat.style = "color: red;"
            pierreIA.style = "display: block;"
        }
        else if (choixIA == 1) {
            resultat.textContent ="gagné"
            resultat.style = "color: green;"
            feuilleIA.style = "display: block;"
        }
    }
}