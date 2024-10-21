function showRedBoxCount() {
    document.getElementById('result2').textContent = "A válasz: 4";
    document.getElementById('result2').style.color = "green";
    setTimeout(() => {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    }, 2000);
}

function checkAnswer(inputId, correctAnswer, currentPage, nextPage) {
    const userAnswer = document.getElementById(inputId).value;
    const resultElement = document.getElementById('result' + inputId.charAt(inputId.length - 1));

    document.getElementById(currentPage).style.display = 'none';
    document.getElementById(nextPage).style.display = 'block';
}

function checkBoxColor(color, currentPage, nextPage) {
    const resultElement = document.getElementById('result2');
    const colorBox = document.getElementById('colorBox');

    // Szín beállítása
    colorBox.style.backgroundColor = color;
    colorBox.style.display = 'block'; // Négyzet megjelenítése

    if (color === 'red') {
        colorBox.textContent = "4"; // Piros doboz esetén
        resultElement.style.color = "green";
    } else {
        // Csak megjeleníti a színes négyzetet, de nem ír ki semmit
        let randomNumber = Math.floor(Math.random() * 10) + 1; // Véletlenszerű szám 1-10 között
        while (randomNumber === 4) {
            randomNumber = Math.floor(Math.random() * 10) + 1; // Ha 4, újra generál
        }
        colorBox.textContent = `${randomNumber}`; // Megjeleníti a véletlenszámot
        colorBox.style.color = "black"; // Szöveg színének beállítása
    }

    // Mindig vált a következő oldalra
    setTimeout(() => {
        document.getElementById(currentPage).style.display = 'none';
        document.getElementById(nextPage).style.display = 'block';
    }, 2000);
}

function checkFinalCode() {
    const userCode = document.getElementById('finalCode').value.toUpperCase();
    const correctCode = "JDWH"; 
    const resultElement = document.getElementById('codeResult');

    if (userCode === correctCode) {
        resultElement.textContent = "Helyes kód!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Helytelen kód, próbáld újra!";
        resultElement.style.color = "red";
    }
}
