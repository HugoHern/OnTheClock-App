import React from "react";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Header from '../components/Header'

import Box from "@mui/material/Box";

import "./pages.css";

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

function DailyHours() {
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
            {weekdays.map((value) => (
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
