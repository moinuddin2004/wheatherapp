window.getWeather = ()=>{
    let c_name = document.querySelector("#cityname").value
    axios.get(`/weather/${c_name}`)
    .then((res)=>{
        // console.log(res.data)
        let cityname0 = c_name[0]
        let cityname1 = c_name.slice(1)
        let citynamecaps = cityname0.toUpperCase()
        let newCityName  = citynamecaps+cityname1

        document.querySelector('#weathercity').innerHTML = newCityName + "&nbsp; &nbsp;"
        document.querySelector("#temp").innerHTML = res.data.temp + "&nbsp;&deg;C"
        document.querySelector("#feels").innerHTML = res.data.feels_like + "&nbsp;&deg;C"
        document.querySelector("#humidity").innerHTML = res.data.humidity + "&percnt;"
        document.querySelector("#pressure").innerHTML = res.data.pressure + "hPa"


        console.log(res.data)
   
    })
    .catch((err)=>{
        console.log(err)
        let cityname0 = c_name[0]
        let cityname1 = c_name.slice(1)
        let citynamecaps = cityname0.toUpperCase()
        let newCityName  = citynamecaps+cityname1
        document.querySelector('#weathercity').innerHTML = newCityName + "&nbsp;not found"
        document.querySelector("#temp").innerHTML =  "N/A"
        document.querySelector("#feels").innerHTML = "N/A"
        document.querySelector("#humidity").innerHTML = "N/A"
        document.querySelector("#pressure").innerHTML = "N/A"
        document.querySelector("#modalText").innerHTML =  `The city (${c_name}) you are trying to search is not available in our data set. <br> Available Cities: Karachi, Lahore, Islamabad, Quetta, Peshawar
        `
        let modal = ()=>{
            document.getElementById('modalButton').click();
          }

          modal()


    })
}