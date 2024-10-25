let redBoxCount = 0; 
let firstAnswer = ''; 
let thirdAnswer = ''; 

function showRedBoxCount() {
    redBoxCount = 4; 
    const colorBox = document.getElementById('colorBox');
    colorBox.textContent = redBoxCount; 
    colorBox.style.color = "black"; 
    colorBox.style.display = 'block'; 

    document.getElementById('result2').textContent = "A válasz: " + redBoxCount;
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
        
        
        if (inputId === 'answer1') {
            firstAnswer = userAnswer; 
        } else if (inputId === 'answer3') {
            thirdAnswer = userAnswer; 
        }
        
        setTimeout(() => {
            document.getElementById(currentPage).style.display = 'none';
            document.getElementById(nextPage).style.display = 'block';
        }, 2000);
    } else {
        resultElement.textContent = "Helytelen válasz, próbáld újra!";
        resultElement.style.color = "red";
    }
}

function checkBoxColor(color, currentPage, nextPage) {
    const resultElement = document.getElementById('result2');
    const colorBox = document.getElementById('colorBox');

    colorBox.style.backgroundColor = color;

    if (color === 'blue') {
        showRedBoxCount(); 
    } else {
        colorBox.textContent = 0; 
        colorBox.style.color = "black";
        resultElement.textContent = "A válasz: " + colorBox.textContent; 
        resultElement.style.color = "orange"; 
    }

    
    setTimeout(() => {
        document.getElementById(currentPage).style.display = 'none';
        document.getElementById(nextPage).style.display = 'block';
    }, 2000);
}

function checkFinalCode() {
    const userCode = document.getElementById('finalCode').value.toUpperCase();
    const correctCode = "TNGR"; 
    const resultElement = document.getElementById('codeResult');

    if (userCode === correctCode) {
        resultElement.textContent = "Helyes kód!";
        resultElement.style.color = "green";
        
        
        setTimeout(() => {
            window.location.href = "https://www.uj-weboldal.com"; 
        }, 2000); 
    } else {
        resultElement.textContent = "Helytelen kód, próbáld újra!";
        resultElement.style.color = "red";
    }

    
    const finalMessage = `Tipp: mintha betük lennének 6${redBoxCount}73. Mi a kód? (Ceasar-jelkód 13-mas eltolás)`;
    document.getElementById('finalMessage').textContent = finalMessage;
}

