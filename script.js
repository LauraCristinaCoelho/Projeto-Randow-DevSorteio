const numMin = document.querySelector('.input-min'); 
const numMax = document.querySelector('.input-max');
const btnReset = document.querySelector('.btnReset'); 
const drawNumber = document.querySelector ('.drawn-number');

function generateNumber() {
    const min = Math.ceil(numMin.value)
    const max = Math.floor(numMax.value)


    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    drawNumber.innerHTML = `Resultado do Sorteio: ${result}`;

}

btnReset.addEventListener('click', function() {
    numMin.value = ''
    numMax.value = ''
    drawNumber.innerHTML = ''
})

