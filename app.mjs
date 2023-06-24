
import express from 'express'
import path from 'path'
import cors from 'cors';
const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 27001




app.get('/weather/:cityName', (req, res) => {
    
  
    let weatherData = {

        karachi: {

            temp: 36,
            max_temp: 40,
            min_temp: 30,
            humidity: 79,
            feels_like: 45,
            pressure: 45
            

        },

        
        lahore: {

            temp: 26,
            max_temp: 30,
            min_temp: 20,
            humidity: 64,
            feels_like: 33,
            pressure: 47
            

        },

        
        islamabad: {

            temp: 20,
            max_temp: 25,
            min_temp: 10,
            humidity: 58,
            feels_like: 24,
            pressure: 40
            

        },

        
        quetta: {

            temp: 32,
            max_temp: 38,
            min_temp: 31,
            humidity: 78,
            feels_like: 40,
            pressure: 63
            

        },

        
        peshawar: {

            temp: 38,
            max_temp: 38,
            min_temp: 33,
            humidity: 81,
            feels_like: 45,
            pressure: 76
            

        },

    }

    let userCityName = req.params.cityName.toLowerCase();
    let requestedWeatherData = weatherData[userCityName];
    if(requestedWeatherData){
       res.send(requestedWeatherData)
    }
    else{
        res.status(404).send(
            `Weather data is not available for ${req.params.cityName}`
        )
    }
  
  
    
  })

  app.use(express.static(path.join(__dirname, `public`)))

app.listen(port, () => {
  console.log(`My app is listening on port ${port}`)
})