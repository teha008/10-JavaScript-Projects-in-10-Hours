const 캔버스 = document.getElementById("canvas");
const 증가버튼 = document.getElementById("increase");
const 감소버튼 = document.getElementById("decrease");
const 크기요소 = document.getElementById("size");
const 콘텍스트 = 캔버스.getContext("2d");

let 원크기 = 30;
let 마우스버튼눌림상태 = false;

캔버스.addEventListener("mousedown", () => {
  마우스버튼눌림상태 = true;
});

캔버스.addEventListener("mouseup", () => {
  마우스버튼눌림상태 = false;
});

캔버스.addEventListener("mousemove", (e) => {
  if (마우스버튼눌림상태) {
    const x좌표 = e.offsetX;
    const y좌표 = e.offsetY;

    원그리기(x좌표, y좌표);
  }
});

function 원그리기(x좌표, y좌표) {
  콘텍스트.beginPath();
  콘텍스트.arc(x좌표, y좌표, 원크기, 0, Math.PI * 2);
  콘텍스트.fill();
}

증가버튼.addEventListener("click", () => {
  원크기 += 5;

  if (원크기 > 50) {
    원크기 = 50;
  }

  화면크기갱신();
});

감소버튼.addEventListener("click", () => {
  원크기 -= 5;

  if (원크기 < 5) {
    원크기 = 5;
  }

  화면크기갱신();
});

function 화면크기갱신() {
  크기요소.innerText = 원크기;
}

// function draw() {
//   ctx.clearRect(0, 0, 캔버스.width, 캔버스.height);
//   원그리기(x, y);

//   requestAnimationFrame(draw);
// }

// draw();
