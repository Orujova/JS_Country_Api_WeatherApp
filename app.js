const input = document.querySelector(".input");
    const btn = document.querySelector("#btn");
    const result = document.querySelector(".result");

    btn.addEventListener("click", () => {
      const cityName = input.value;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a636e0fa01ec890b256bfc0a127a6ba9&units=metric&lang=az`
      )
        .then(response => response.json())
        .then(data => {
          const ul = document.createElement("ul");
          const li1 = document.createElement("li");
          li1.textContent = `Name: ${cityName}`;
          const li2 = document.createElement("li");
          li2.textContent = `Temperature: ${data.main.temp} °C`;
          const li3 = document.createElement("li");
          li3.textContent = `Wind: ${data.wind.speed} m/s`;
          const li4 = document.createElement("li");
          li4.textContent = `Description: ${data.weather[0].description}`;
          ul.append(li1, li2, li3, li4);
          result.innerHTML = "";
          result.appendChild(ul);
        })
        .catch(error => {
          result.textContent = "Error fetching weather data";
        });
    });