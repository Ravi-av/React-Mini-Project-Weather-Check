import Card from "@mui/material/Card";
import "./InfoBox.css"; 
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import Typography from "@mui/material/Typography";

export default function InfoBox({info}) {
 
  let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL ="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

 
  return (
    <div className="InfoBox"> 
  
      <div className="cardContainer"> 
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image=
            {info.humidity>80
              ?RAIN_URL
              :info.temp>15
              ?HOT_URL
              :COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}  {
               info.humidity>80
               ? <ThunderstormIcon />
               :info.temp>15
               ?<WbSunnyIcon />
               :<AcUnitIcon />
               }  
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temparature {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
