import React, { useState } from "react";
import axios from "axios";


function Edit(props) {
  const [hours, setHours] = useState({});

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setHours(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(hours);
    console.log(props.id)

    axios
      .put(`http://localhost:5000/time/edit/${props.id}`, {
        week: hours.week,
        day: hours.day,
      })
      .then((res) => {
        console.log("Edited time");
      })
      .catch((err) => {
        console.log("err");
      });
    }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 500,
        width: "100%",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h1>Edit</h1>
      <form  onSubmit={handleSubmit}  style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 500,
        width: "100%",
        padding: "20px",
        borderRadius: "20px",
      }}>
        
        <label >Enter New Date</label>
        <input type="text" name="day" placeholder="day" onChange={handleChange}/>

        <label >Enter Hour Started</label>
        <input type="text" name="hourStarted" placeholder="Hour Started" onChange={handleChange}/>

        <label >Enter Hour Ended</label>
        <input type="text" name="hourEnded" placeholder="Hour Ended" onChange={handleChange}/>

        <label >Enter Total Hours</label>
        <input type="number" name="totalHours" placeholder="Total Hours" onChange={handleChange} />
        <button type="submit">
          Submit Edit
        </button>
      </form>
    </div>
  );
}

export default Edit;
