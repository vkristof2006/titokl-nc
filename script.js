function showRedBoxCount() {
    document.getElementById('result2').textContent = "A válasz: 4";
    document.getElementById('result2').style.color = "green";
    setTimeout(() => {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    }, 2000); // 2 másodperc múlva vált a következő oldalra
}

function checkAnswer(inputId, correctAnswer, currentPage, nextPage) {
    const userAnswer = document.getElementById(inputId).value;
    const resultElement = document.getElementById('result' + inputId.charAt(inputId.length - 1));

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Helyes válasz!";
        resultElement.style.color = "green";

        // Jelenlegi oldal elrejtése
        document.getElementById(currentPage).style.display = 'none';

        // Következő oldal megjelenítése
        if (nextPage === 'final') {
            document.getElementById('final').style.display = 'block';
        } else {
            document.getElementById(nextPage).style.display = 'block';
        }
    } else {
        resultElement.textContent = "Helytelen válasz, próbáld újra!";
        resultElement.style.color = "red";
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
