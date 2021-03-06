
// Un alert() espone 5 numeri generati casualmente.
let generatedNumbers = []
while (generatedNumbers.length < 5) {
    let randomNumber = getRandomNumber(0, 20)
    if (!generatedNumbers.includes(randomNumber)) {
        generatedNumbers.push(randomNumber)
    }
}
alert(`
Ricordati questa sequenza di numeri:
${generatedNumbers}`)


let timer = 29
let result = []
let resultEl = document.querySelector('.result')
// Da li parte un timer di 30 secondi.
let countdown = setInterval(function () {
    document.querySelector('.timer').innerHTML = timer
    timer--

    if (timer == -2) {
        clearInterval(countdown)
        document.querySelector('.timer').innerHTML = ''

        /* Dopo 30 secondi l'utente deve inserire, uno alla volta,
        i numeri che ha visto precedentemente, tramite il prompt(). */
        for (let i = 0; i < generatedNumbers.length; i++) {
            let userNumber = parseInt(prompt('inserisci uno dei numeri della sequenza precedente'))
            if (generatedNumbers.includes(userNumber)) {
                compareAndPushInArray(result, userNumber)
            }
        }
        /* Dopo che sono stati inseriti i 5 numeri,
        il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
        resultEl.innerHTML = `Punteggio = ${result.length}. <br>
         I numeri ricordati: <br> ${result} `
    }

}, 1000);

/**
 * Checks if a number is already included in an array and if not, it gets included.
 * @param {array} array - The array where we put the element
 * @param {number} number - Number to be compared with element inside array
 */
function compareAndPushInArray(array, number) {
    if (!array.includes(number)) {
        array.push(number)
    }
}

/**
 * Generates a random number between a min and max
 * @param {number} min - min value of result
 * @param {numuber} max - maximum value of result
 * @returns - random number
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

