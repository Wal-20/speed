import React from 'react'

const Ok_screen = ({setPageEasy,setPageMedium,setPageHard}) => {
  
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
            <br></br>
        </h2>      
    )
  }

export default Ok_screen