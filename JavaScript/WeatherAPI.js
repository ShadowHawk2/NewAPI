async function getWeather() {
    let temp;
    let far;
    const api = await fetch("https://api.open-meteo.com/v1/forecast?latitude=59.78&longitude=5.49&hourly=temperature_2m&current_weather=true");
    const json = await api.json();
    temp = json.current_weather.temperature;
    far = (temp*1.8)+32;

// Skjekker om temp er noe.
    if (temp > -10000000000) {
        document.getElementById("temp").innerHTML = "Det er " +temp + "°C no. " + "<br>" + "I Fahrenheit er det " + far + "F";
    }
    
// Får iformasjon om kva bilde som skal brukes.
    if (temp >= 20 ) {
        document.getElementById("vær").innerHTML = '<h2>20°C - Grader</h2><img class="størelse" id="shadow" src="Images/20-grader.jpg" alt="20-G">';
    }

    else if (temp < 20 && temp >= 15) {
        document.getElementById("vær").innerHTML = '<h2>15°C - Grader</h2><img class="størelse" id="shadow" src="Images/15-grader.jpg" alt="15-G">';
    }

    else if (temp < 15 && temp > 1) {
        document.getElementById("vær").innerHTML = '<h2>10°C - Grader</h2><img class="størelse" id="shadow" src="Images/10-grader.jpg" alt="10-G">';
    }

    else {
        document.getElementById("vær").innerHTML = '<h2>Minus°C - Grader</h2><img class="størelse" id="shadow" src="Images/minus - grader.jpg" alt="Minus-G">'
    }

}
getWeather();

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum*1.8)+32 + "F";
  }