import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";

import EditModal from './EditModal'




function DailyHours() {
  const [dailyHours, setDailyHours] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);

  const editHours = () => {
    setOpenEditModal(true)
  }



  
  const deleteTime = (id, e) => {
    axios.delete(`http://localhost:5000/time/delete/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    const time = dailyHours.filter((item) => item.id !== id);
    setDailyHours(time);
  };

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

    fetchData();
  }, []);

  console.log(dailyHours);

  return (
    <>
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
                      Starting Time: {value.hourStarted}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Ending Time: {value.hourEnded}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Total Hours: {value.totalHours}
                    </Typography>
                    <Button size="small" onClick={editHours}> Edit </Button>
                    {openEditModal && <EditModal closeModal={setOpenEditModal} id={value._id}/>}
                    <Button
                      size="small"
                      onClick={(e) => deleteTime(value._id, e)}
                    >
                      Delete
                    </Button>
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
