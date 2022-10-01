import React from "react";

function Greeting({user}) {
  return (
    <div>
   
      <h1>Welcome {user.username} </h1>
      <h3>Here are your hours!</h3>
    </div>
  );
}

export default Greeting;
