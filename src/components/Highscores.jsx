import React, { useState } from 'react';
import users from '../users.json';


const Highscores = (user) => {
    
  return (
    <div>
        <p>Your highscores are:</p><br></br>
        <p>Easy: {users.user.hs_easy}</p>
        <p>Medium: {users.user.hs_medium}</p>
        <p>Hard: {users.user.hs_hard}</p>
    </div>
  )
}

export default Highscores;