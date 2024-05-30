const qustionDataBase = [
  //1
  {
    question: "Cik ir Latvijas kopējais apkārtmērs?",
    option1: "1038 km",
    option2: "1293 km",
    option3: "1878 km",
    option4: "2203 km",
    ans: "answer3",
  },
  //2
  {
    question: "Cik ir Latvijas teritorijas kopējā platība?",
    option1: "64 588 km²",
    option2: "56 687 km²",
    option3: "102 012 km²",
    option4: "Neviens atbilžu variants nav pareizs",
    ans: "answer4",
  },
  //3
  {
    question: "Ar cik valstīm Latvijai ir robeža?",
    option1: "3",
    option2: "4",
    option3: "5",
    option4: "6",
    ans: "answer3",
  },
  //5
  {
    question: "Latvija ir ...",
    option1: "Līdzenumu valsts",
    option2: "Kalnu valsts",
    option3: "Pauguru valsts",
    option4: "Ūdeņu valsts",
    ans: "answer1",
  },
  //6
  {
    question: "Cik % no Latvijas aizņem teritorija, kas ir augstāka par 200 m?",
    option1: "20.0%",
    option2: "10.0%",
    option3: "2.5%",
    option4: "Neviena no opcijām nav pareiza",
    ans: "answer3",
  },
  //7
  {
    question: "Cik novadi ir Latvijas valsts teritorijā pašlaik?",
    option1: "39",
    option2: "36",
    option3: "33",
    option4: "30",
    ans: "answer2",
  },
  //8
  {
    question: "Cik latvijā ir valstspilsētas?",
    option1: "7",
    option2: "6",
    option3: "5",
    option4: "4",
    ans: "answer1",
  },
  //9
  {
    question: "Latvijā tiek iegūtas kvarca smiltis.",
    option1: "Jā, taču mazos apjomos.",
    option2: "Jā, ļoti labas kvalitātes.",
    option3: "Nē.",
    option4: "Nav tādu kvarca smilšu.",
    ans: "answer2",
  },
  
];

// Getting reference
const questionContainer = document.querySelector("h2");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector("button");
const usersAnswer = document.querySelectorAll(".answer");
const scoreArea = document.querySelector("#ShowScore");

// This function is rendering all the texts
let questionCount = 0;
let score = 0;
const mainFunc = () => {
  const list = qustionDataBase[questionCount];
  questionContainer.innerText = list.question;
  option1.innerText = list.option1;
  option2.innerText = list.option2;
  option3.innerText = list.option3;
  option4.innerText = list.option4;
};

mainFunc();

// This function is for answer checking
const goCheckAnswer = () => {
  let answers;
  usersAnswer.forEach((data) => {
    if (data.checked) {
      answers = data.id;
    }
  });
  return answers;
};

const deselectAll = () => {
  usersAnswer.forEach((data) => {
    data.checked = false;
  });
};

// Function to get the code based on the score
const getCodeForScore = (score, totalQuestions) => {
  const percentage = (score / totalQuestions) * 100;
  if (percentage === 100) {
    return "Kods: 15784";
  } else if (percentage >= 80) {
    return "Kods: 29303";
  } else if (percentage >= 60) {
    return "Kods: 34595";
  } else if (percentage >= 40) {
    return "Kods: 45698";
  } else if (percentage >= 20) {
    return "Kods: 50293";
  } else {
    return "Kods: 60292";
  }
};

submitButton.addEventListener("click", () => {
  const checkAnswer = goCheckAnswer();
  console.log(checkAnswer);

  if (checkAnswer === qustionDataBase[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < qustionDataBase.length) {
    mainFunc();
  } else {
    const code = getCodeForScore(score, qustionDataBase.length);
    scoreArea.style.display = "block";
    scoreArea.innerHTML = `
      <h3>Jūsu rezultāts ir ${score} / ${qustionDataBase.length}</h3>
      <p>${code}</p>
      <button class='btn' onclick='location.reload()'>Spēlēt vēlreiz</button>
      `;
  }
});
