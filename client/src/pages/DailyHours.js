import React, {useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Header from '../components/Header'
import Box from "@mui/material/Box";
import "./pages.css";
import axios from "axios";


const mondayHours = {
  day: "Monday",
  hourStarted: "12:00",
  hourEnded: "18:00",
  totalHours: 6,
};

const weekdays = [
  mondayHours,
  mondayHours,
  mondayHours,
  mondayHours,
  mondayHours,
  mondayHours,
  mondayHours,
];

/* { 
    Object.keys(subjects).map((item, i) => (
        <li className="travelcompany-input" key={i}>
            <span className="input-label">{ subjects[item].name }</span>
        </li>
    ))

     let response = await axios.get("http://localhost:5000/time");
      let data = response.data;
}  */

function DailyHours() {

  const [dailyHours, setDailyHours] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/time");
        setDailyHours(response.data);
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    };

    fetchData()
  }, []);

  
  console.log(dailyHours)
  
  
  return (
    <>
    <Header />
      <Box
      className="box-container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            {dailyHours.map((value) => (
              <Grid item key={Math.random(value.totalHours)}>
                <Card variant="outlined">
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {value.day}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Starting Time:  {value.hourStarted}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Ending Time: {value.hourEnded}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Total Hours: {value.totalHours}
                  </Typography>
                  <Button size="small">Edit</Button>
                  <Button size="small">Delete</Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default DailyHours;
