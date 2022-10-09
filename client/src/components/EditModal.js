import React, { useState } from "react";
import axios from "axios";

function Modal({ closeModal, id }) {
  const [time, setTime] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTime((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/time/edit/${id}`, {
        day: time.day,
        hourStarted: time.hourStarted,
        hourEnded: time.hourEnded,
        totalHours: time.totalHours,
      })
      .then((res) => {
        console.log("Posted Time");
      })
      .catch((err) => {
        console.log("err");
      });
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          {" "}
          X{" "}
        </button>
      </div>
      <div>
        <form>
          <input
            type="text"
            name="day"
            onChange={handleChange}
            placeholder="Enter Date"
          />
          <input
            type="text"
            name="hourStarted"
            onChange={handleChange}
            placeholder="Enter Hour Started"
          />
          <input
            type="text"
            name="hourEnded"
            onChange={handleChange}
            placeholder="Enter Hour Ended"
          />
          <input
            type="number"
            name="totalHours"
            onChange={handleChange}
            placeholder="Enter Total Daily Hours"
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Modal;
