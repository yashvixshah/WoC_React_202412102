const apiKey="2a733f77325f9d9b8a79f34391c88bee"
const input=document.getElementById('searchbar')
const button=document.getElementById('searchButton')
const weatherContent=document.querySelector('.weatherContent')

button.addEventListener('click',()=>{
    const cityName=input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`).then((response)=>{
        console.log(response)
        return response.json()
    }).then((data)=>{
        console.log(data)
        const currentDate = new Date(data.dt * 1000); // Convert UNIX timestamp to milliseconds
        const time = currentDate.toLocaleTimeString(); // Local time like 4:30:12 PM
        const date = currentDate.toLocaleDateString(); // Local date like 14/4/2025

        weatherContent.innerHTML=`<div id="left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qHe4a_5xwVYjAj6SMMy2zZvP7RVVZoe1ow&s">
                <p><b>${data.main.temp}°C</b></p>
                <h1>${data.name}</h1>
                <h4>${time}</h4>
                <h4>${date}</h4>
             </div>
             <div id="right">
                <h3>Today's Highlights</h3>
                <div class="grid" id="upper">
                    <div id="windspeed">
                        <h4>Wind speed</h4>
                        <h3>${data.wind.speed} km/hr</h3>
                    </div>
                    <div id="humidity">
                        <h4>Humidity</h4>
                        <h3>${data.main.humidity}%</h3>
                    </div>
                    <div id="pressure">
                        <h4>Pressure</h4>
                        <h3>${data.main.pressure}hPa</h3>
                    </div>
                </div>
              \  <div class="grid" id="lower">
                    <div id="windspeed">
                        <h4>Visibility</h4>
                        <h3>${data.visibility} km</h3>
                    </div>
                    <div id="humidity">
                        <h4>Min Temp</h4>
                        <h3>${data.main.temp_min}°C</h3>
                    </div>
                    <div id="pressure">
                        <h4>Max Temp</h4>
                        <h3>${data.main.temp_max}°C</h3>
                    </div>
                </div>
             </div>`
    })
})