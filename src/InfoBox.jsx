import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Hot weather
import AcUnitIcon from "@mui/icons-material/AcUnit"; // Cold weather
import UmbrellaIcon from "@mui/icons-material/Umbrella"; // Rainy weather
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/893092946/photo/clouds-in-the-sky.jpg?s=1024x1024&w=is&k=20&c=X2OP_cI1L0gGmruCP9U0tvpy9nIMkMTNauPM461IBtU=";
  const HOT_URL =
    "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=1024x1024&w=is&k=20&c=5hofX5ZVagxBLLoWcKePmk7EJqWg39J_egG5JsVIj_E=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/2028599109/photo/mid-summer-torrential-rain-storm-water-overflowing-roof-gutters.jpg?s=1024x1024&w=is&k=20&c=v5lXJsVH2Y-Zo__wp0GSMm0hRt2stj1i9C7kfa57WKw=";

  const getWeatherIcon = () => {
    if (info.humidity > 80) {
      return <UmbrellaIcon />;
    } else if (info.temp > 15) {
      return <WbSunnyIcon />;
    } else {
      return <AcUnitIcon />;
    }
  };
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {getWeatherIcon()}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather} </i>and feels
                like {info.feelslike}C&deg;
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
