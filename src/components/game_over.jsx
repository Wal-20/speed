import React from 'react'

const Game_over = ({score,setPage,difficulty}) => {

  const highscore = JSON.parse(localStorage.getItem(difficulty)) || 0;
  
  if(score > highscore) 
    localStorage.setItem(difficulty,JSON.stringify(score));
  
  return (
    <div id='game-over'>
      <h1>Game over, you scored {score}</h1>
      <button id='again-button' onClick={setPage} type="button" className="btn btn-primary">
        Back
      </button>
    </div>
  )
  }

export default Game_over