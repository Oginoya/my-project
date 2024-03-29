// APIキーを設定する
const apiKey = "feff3ca11ea73ee6aaf2558cbb6bf067";

// ブラウザで位置情報を取得する
navigator.geolocation.getCurrentPosition(position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // 天気情報を取得する
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // 天気情報を表示する
      const weather = data.weather[0].description;
      const temperature = data.main.temp;
      const cityName = data.name;
      const country = data.sys.country;
      document.getElementById("weather").textContent = `${cityName}, ${country}: ${weather}, ${temperature}℃`;
    })
    .catch(error => console.error(error));
}, error => {
  console.error(error);
  document.getElementById("weather").textContent = "天気情報を取得できませんでした。";
});
