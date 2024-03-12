import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error,setErrror] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "55b2e5cdd3ceb7e190c050eb76726ab7";

  let getWeatherInfo = async () => {
    try{
      let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonRes = await res.json();
      console.log(jsonRes);
      let result ={
         city:city,
          temp: jsonRes.main.temp,
          tempMin:jsonRes.main.temp_min,
          tempMax:jsonRes.main.temp_max,
          humidity:jsonRes.main.humidity,
          feelsLike:jsonRes.main.feels_like,
          weather:jsonRes.weather[0].description,
      }
      console.log(result);
      return result;
    } catch(err){
    throw err;
    }
    
   
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try{
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      getWeatherInfo();
      updateInfo(newInfo);
    } catch(err){
      setErrror(true);
    }
   
  };
  return (
    <div className="SearchBox">
      <h3>Search for the Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="City"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such Place exists!</p>}
      </form>
    </div>
  );
}
