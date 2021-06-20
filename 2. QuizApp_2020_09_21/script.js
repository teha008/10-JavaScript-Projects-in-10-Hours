const quizData = [
  {
    question: '1. Florin의 나이는?',
    a: '10살',
    b: '17살',
    c: '26살',
    d: '110살',
    correct: 'c'
  },
  {
    question: '2. 2019년 가장 많이 사용하는 프로그래밍 언어는?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd'
  },
  {
    question: '3. 미국의 대통령은 누구?',
    a: 'Florin Pop',
    b: 'Donal Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b'
  },
  {
    question: '4. HTML은 무엇을 의미합니까?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorobots Lamborginins',
    correct: 'a'
  },
  {
    question: '5. 자바스크립트 런칭 시기는?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b'
  }
];

const answerEls = document.querySelectorAll(".answer");

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}


submitBtn.addEventListener('click', () => {
  // check to see the answer 
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML =
        `<h2>
         ${quizData.length}점 만점에 ${score}점 입니다.
         </h2> 
      
         <button onClick="location.reload()">
         재시작
         </button>`;
    }
  }
});