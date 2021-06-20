const 캔버스 = document.getElementById("canvas");
const 증가버튼 = document.getElementById("increase");
const 감소버튼 = document.getElementById("decrease");
const 크기요소 = document.getElementById("size");
const 색상요소 = document.getElementById("color");
const 지우기요소 = document.getElementById("clear");
const 콘텍스트 = 캔버스.getContext("2d");

let 붓크기 = 30;
let 마우스버튼눌림상태 = false;
let 색상 = "black";
let 마우스버튼눌린x1좌표위치 = undefined;
let 마우스버튼눌린y1좌표위치 = undefined;

캔버스.addEventListener("mousedown", (e) => {
  마우스버튼눌림상태 = true;

  마우스버튼눌린x1좌표위치 = e.offsetX;
  마우스버튼눌린y1좌표위치 = e.offsetY;
});

캔버스.addEventListener("mouseup", (e) => {
  마우스버튼눌림상태 = false;

  마우스버튼눌린x1좌표위치 = undefined;
  마우스버튼눌린y1좌표위치 = undefined;
});

캔버스.addEventListener("mousemove", (e) => {
  if (마우스버튼눌림상태) {
    const 마우스이동x2좌표 = e.offsetX;
    const 마우스이동y2좌표 = e.offsetY;

    원그리기(마우스이동x2좌표, 마우스이동y2좌표);

    선그리기(
      마우스버튼눌린x1좌표위치,
      마우스버튼눌린y1좌표위치,
      마우스이동x2좌표,
      마우스이동y2좌표,
    );

    마우스버튼눌린x1좌표위치 = 마우스이동x2좌표;
    마우스버튼눌린y1좌표위치 = 마우스이동y2좌표;
  }
});

function 원그리기(마우스이동x2좌표, 마우스이동y2좌표) {
  콘텍스트.beginPath();
  콘텍스트.arc(마우스이동x2좌표, 마우스이동y2좌표, 붓크기, 0, Math.PI * 2);
  콘텍스트.fillStyle = 색상;
  콘텍스트.fill();
}

function 선그리기(x1, y1, x2, y2) {
  콘텍스트.beginPath();
  콘텍스트.moveTo(x1, y1);
  콘텍스트.lineTo(x2, y2);
  콘텍스트.strokeStyle = 색상;
  콘텍스트.lineWidth = 붓크기 * 2;
  콘텍스트.stroke();
}

증가버튼.addEventListener("click", () => {
  붓크기 += 5;

  if (붓크기 > 50) {
    붓크기 = 50;
  }

  화면크기갱신();
});

감소버튼.addEventListener("click", () => {
  붓크기 -= 5;

  if (붓크기 < 5) {
    붓크기 = 5;
  }

  화면크기갱신();
});

색상요소.addEventListener("change", (e) => {
  색상 = e.target.value;
});

지우기요소.addEventListener("click", () => {
  콘텍스트.clearRect(0, 0, 캔버스.width, 캔버스.height);
});

function 화면크기갱신() {
  크기요소.innerText = 붓크기;
}
