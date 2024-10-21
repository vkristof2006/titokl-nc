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

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Helyes válasz!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Helytelen válasz, próbáld újra!";
        resultElement.style.color = "red";
    }

    document.getElementById(currentPage).style.display = 'none';
    document.getElementById(nextPage).style.display = 'block';
}

function checkBoxColor(color, currentPage, nextPage) {
    const resultElement = document.getElementById('result2');
    const colorBox = document.getElementById('colorBox');

    colorBox.style.backgroundColor = color;
    colorBox.style.display = 'block'; // Négyzet megjelenítése

    if (color === 'red') {
        colorBox.textContent = "Véletlenszerű szám: 4"; // Piros doboz esetén
        resultElement.textContent = "Helyes válasz!";
        resultElement.style.color = "green";
    } else {
        let randomNumber = Math.floor(Math.random() * 10) + 1; // Véletlenszerű szám 1-10 között
        while (randomNumber === 4) {
            randomNumber = Math.floor(Math.random() * 10) + 1; // Ha 4, újra generál
        }
        colorBox.textContent = `Véletlenszerű szám: ${randomNumber}`; // Megjeleníti a véletlenszámot
        colorBox.style.color = "black"; // Szöveg színének beállítása
    }

    // Mindig vált a következő oldalra
    setTimeout(() => {
        document.getElementById(currentPage).style.display = 'none';
        document.getElementById(nextPage).style.display = 'block';
    }, 2000);
}

function placeGreenBoxes() {
    const positions = [
        { top: '10%', left: '10%' }, // Cím mellett
        { top: '50%', left: '50%' }, // Középen
        { bottom: '10%', right: '10%' }, // Jobb alsó sarok
        { top: '10%', right: '10%' }, // Jobb felső sarok
        { bottom: '10%', left: '10%' } // Bal alsó sarok
    ];
    const boxesContainer = document.getElementById('boxesContainer');

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * positions.length);
        const position = positions[randomIndex];
        const box = document.createElement('div');
        box.className = 'green-box';
        box.style.top = position.top;
        box.style.left = position.left;

        boxesContainer.appendChild(box);
        positions.splice(randomIndex, 1); // Eltávolítja a pozíciót, hogy ne ismétlődjön
    }
}

function checkFinalCode() {
    const userCode = document.getElementById('finalCode').value.toUpperCase();
    const correctCode = "JDWH"; // A titkosított kód
    const resultElement = document.getElementById('codeResult');

    if (userCode === correctCode) {
        resultElement.textContent = "Helyes kód!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Helytelen kód, próbáld újra!";
        resultElement.style.color = "red";
    }
}

// Hívjuk meg a green box funkciót, amikor az oldal betöltődik
window.onload = function() {
    placeGreenBoxes();
}
