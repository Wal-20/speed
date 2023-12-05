import React from 'react'
import { useState } from 'react';

const Start = ({setPageEasy,setPageMedium,setPageHard}) => {
  
  const [easyHS, setEasyHS] = useState(localStorage.getItem('Easy') || 0);
  const [mediumHS, setMediumHS] = useState(localStorage.getItem('Medium') || 0);
  const [hardHS, setHardHS] = useState(localStorage.getItem('Hard') || 0);

  const handleClearHighscores = () => {
    localStorage.clear();
    setEasyHS(0);
    setMediumHS(0);
    setHardHS(0);
  };
  // NOTE: Don't forget to use useState to display any change in a value in the browser

    return (
        <h2>
            Welcome to speed reactions,<br></br>
            You must select the right word that is on the screen<br></br><br></br>
            
            <div id='difficulties'>
              <h5>Select your difficulty</h5>
              
              <button id='easy' className='diff' onClick={setPageEasy}>
                Easy <p className='hide'>4 options per word, 40 seconds</p>
                </button> 

                <button id='medium' className='diff' onClick={setPageMedium}>
                Medium <p className='hide'>6 options per word, 30 seconds</p>
                </button>
                
                <button id='hard' className='diff' onClick={setPageHard}>
                Hard <p className='hide'>8 options per word, 20 seconds</p>
                </button>

                <br />
            </div>
            <br/><br/><br/>
            
          <table id='highscores'>
            
            <tr>
              <td>Easy highscore</td>
              <td>Medium highscore</td>
              <td>Hard highscore</td>
            </tr>
            
            <tr>
              <td>{easyHS}</td>
              <td>{mediumHS}</td>
              <td>{hardHS}</td>
            </tr>

          </table>
          <br/><br/><br/><br/>

          <button id='clear-highscores' onClick={ handleClearHighscores }>Clear highscores</button>

        </h2>      
    )
  }

export default Start

// TODO: create a UI to show highscores here / add alert on clear highscores