document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('startButton');
  const scoreElement = document.getElementById('score');
  const num1Input = document.getElementById('num1');
  const operatorRadios = document.getElementsByName('operator');
  const num2Input = document.getElementById('num2');
  const userAnswerInput = document.getElementById('userAnswer');
  const answerButton = document.getElementById('answerButton');
  const resultText = document.getElementById('resultText');
  let score = 0;
  let totalQuestions = 0;

  generateQuestion();

  

  startButton.addEventListener('click', function () {
    score = 0;
    totalQuestions = 0;
    scoreElement.textContent = '0/0';
    generateQuestion();
    resultText.textContent = '';
  });

  for (const radio of operatorRadios) {
    radio.addEventListener('change', function () {
      generateQuestion();
      resultText.textContent = '';
    });
  }

  answerButton.addEventListener('click', function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let operator;

    for (const radio of operatorRadios) {
      if (radio.checked) {
        operator = radio.value;
        break;
      }
    }

    const userAnswer = parseFloat(userAnswerInput.value);
    const correctAnswer = calculateCorrectAnswer(num1, num2, operator);

    if (userAnswer === correctAnswer) {
      resultText.textContent = 'คำตอบถูกต้อง Baby!';
      score++;
    } else {
      resultText.textContent = 'ตอบผิดนะครับ Baby~!!';
    }

    totalQuestions++;
    scoreElement.textContent = `${score}/${totalQuestions}`;
    generateQuestion();
    userAnswerInput.value = '';
  });

  function generateQuestion() {
    num1Input.value = Math.floor(Math.random() * 100);
    num2Input.value = Math.floor(Math.random() * 100);
  }

  function calculateCorrectAnswer(num1, num2, operator) {
    switch (operator) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num1 / num2;
    }
  }
});

const display = document.getElementById('display');
  const operatorRadios = document.getElementsByName('operator');

  operatorRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      display.textContent = radio.labels[0].textContent;
    });
  });