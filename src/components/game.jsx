import {React} from 'react'
import { getRandomInt } from '../utils';
import { validateChoice } from '../utils';
import { words } from '../utils';
import { updateHighscore } from '../utils';
import { getRandomDistinctElements } from '../utils';
import CountdownTimer from './CountdownTimer';
import users from '../users.json'


const Game = ({score,setPage,setScore,word_count,seconds}) => {
  const choices = getRandomDistinctElements(words,word_count);
  const word = choices[getRandomInt(word_count)];

    const buttonIndices = Array.from({ length: word_count }, (_, index) => index);

    return (
      <>
          <h1 id='Word'>{word}</h1> 
        {/** the string in this h1 or the word choice buttons cannot have a space or a line break because the choice is compared to it, so any added special characters will ruin the comparison */}
        {/** for example: 'open' != 'open\n' != 'open ' */}

        

        {buttonIndices.map((index) => (
          <>
            <button id={`b${index + 1}`} onClick={() => {
              validateChoice(`b${index + 1}`, setScore, setPage);
              }}
              type="button" className="btn btn-primary">

              {choices[index]}

            </button>
            {(index + 1) % 4 === 0 && <br/>}
          </>
          
        ))}
          <br />


          <CountdownTimer seconds={seconds} onTimeout={setPage}/>
       
          <h2> Score: {score} </h2>

      </>
    )
  }

export default Game