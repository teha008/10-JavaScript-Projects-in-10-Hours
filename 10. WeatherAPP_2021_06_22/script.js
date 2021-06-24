const api키 = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (도시) => `https://api.openweathermap.org/data/2.5/weather?q=${도시}&appid=${api키}`;

async function 지역날씨정보얻기(도시) {
  const 날씨정보 = await fetch(url(도시));
  const 날씨정보json값 = await 날씨정보.json();

  console.log(날씨정보json값);
  페이지에날씨추가(날씨정보json값);
}

function 페이지에날씨추가(받은데이터) {
  const 온도 = 켈빈을섭씨로변경(받은데이터.main.temp);
  console.log(온도);

  const 날씨 = document.createElement("div");
  날씨.classList.add("weather");

  날씨.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${받은데이터.weather[0].icon}.png"/> ${온도}℃ <img src="https://openweathermap.org/img/wn/${받은데이터.weather[0].icon}.png"/></h2>
    <small>${받은데이터.weather[0].main}</small>
  `;

  // 정리하다
  main.innerHTML = "";

  main.appendChild(날씨);
}

function 켈빈을섭씨로변경(K) {
  // return (K - 273.15).toFixed(2);
  return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // main 태그 안에 이미 기존에 검색한
  // 날씨 지역 정보가 존재한다면 제거
  // 없으면 패스
  // if (main.hasChildNodes()) {
  //   main.removeChild(main.childNodes[0]);
  // }

  const 도시 = search.value;

  if (도시) {
    지역날씨정보얻기(도시);
  }
});
