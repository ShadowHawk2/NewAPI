async function getWeather() {
    let weather;
    let hour;
    let temp;
    const api = await fetch("https://api.open-meteo.com/v1/forecast?latitude=59.78&longitude=5.49&hourly=temperature_2m&current_weather=true");
    const json = await api.json();
    weather = json.hourly.temperature_2m;
    hour = json.hourly.time;
    temp = json.current_weather.temperature;

    //Chart
    if (weather) {
        document.getElementById("vær").innerHTML = weather;
    }
    if (hour) {
        document.getElementById("time").innerHTML = hour;
    }
    if (temp) {
        document.getElementById("temp").innerHTML = temp;
    }
}
getWeather();


function badevær() {
    if (temp < 20 ) {
        document.getElementById("").innerHTML = '<h2>20 - Grader</h2><img class="størelse" src="Images/20-grader.jpg" alt="20-G">';
    }

    if (temp < 15 || temp < 10) {
        document.getElementById("").innerHTML = '<h2>15 - Grader</h2><img class="størelse" src="Images/15-grader.jpg" alt="15-G">';
    }

    if (temp > 10) {
        document.getElementById("").innerHTML = '<h2>20 - Grader</h2><img class="størelse" src="Images/20-grader.jpg" alt="20-G">';
    }
}