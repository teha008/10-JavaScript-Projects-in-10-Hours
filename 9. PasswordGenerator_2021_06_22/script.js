const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  if (upperEl.checked || lowerEl.checked || numberEl.checked || symbolEl.checked) {
    const len = lenEl.value;

    if (len >= 2 && len <= 30) {
      let password = "";

      if (upperEl.checked) {
        password += getUppercase();
      }

      if (lowerEl.checked) {
        password += getLowercase();
      }

      if (numberEl.checked) {
        password += getNumber();
      }

      if (symbolEl.checked) {
        password += getSymbol();
      }

      for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
      }

      pwEl.innerText = password;
    } else {
      alert("비번 길이는 2자 이상 30자 이하로 작성해주세요.");
    }
  } else {
    alert("체크박스를 단 1개라도 선택하세요.");
  }
}

function generateX() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercase());
  }

  if (lowerEl.checked) {
    xs.push(getLowercase());
  }

  if (numberEl.checked) {
    xs.push(getNumber());
  }

  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("패스워드 클립보드에 복사");
});
