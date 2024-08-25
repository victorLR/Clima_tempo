const key= "65c6bb698ba6e51ed0bc62f0e6e52569"

function dataOnScreen(dados){
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".degree").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".climate").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade " + dados.main.humidity +"%"
    document.querySelector(".imgForecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
    console.log(dados)
}

function buttonClick() {
    const city = document.querySelector(".cityName").value
    searchCity(city)
}

async function searchCity(city){
const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    dataOnScreen(dados)
}