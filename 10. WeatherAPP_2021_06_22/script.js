const apiKey = "3265874a2c77ae4a04bb96236a642d2f";

const url = (location) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

async function 지역날씨정보얻기(location) {
  const 날씨정보 = await fetch(url(location), {
    origin: "cors",
  });
  const 날씨정보json값 = await 날씨정보.json();

  console.log(날씨정보json값);
  console.log(`현재 ${location}의 온도는 ${켈빈을섭씨로변경(날씨정보json값.main.temp)}도`);
}

지역날씨정보얻기("Seoul");

function 켈빈을섭씨로변경(K) {
  return (K - 273.15).toFixed(2);
}
