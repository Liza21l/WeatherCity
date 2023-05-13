const apiKey = `191d9f54d54842afb5e113242231105`
const weatherBlock = document.querySelector('#weatherBlock')
const inputCity = document.querySelector('input[form-city]')
const btnGet = document.querySelector('button[form-btn]')
const weatherEl = document.querySelector('#weather')

inputCity.addEventListener('click', () => {
    localStorage.setItem('city', inputCity.value)
})

btnGet.addEventListener('click', () => {
    let city = localStorage.getItem('city')
    if (city.length > 0) {
        let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}=no`
        axios.get(url).then(res => {
        weatherBlock.innerHTML = `
            <div class="card">
                <p class="name">${res.data.location.name}</p>
                <img class="icon" src="${res.data.current.condition.icon}" />
                <p class="temp">Temp now: ${res.data.current.temp_c}°C</p>
                <p class="winde">Winde: ${res.data.current.wind_kph}</p>
            </div>
        `
})
    } else {
        alert('No city found')
    }
})
