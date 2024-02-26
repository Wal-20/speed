import {React} from 'react'
import { getRandomInt, validateChoice, words, getRandomDistinctElements  } from '../utils';
import CountdownTimer from './CountdownTimer';


const Game = ({score,page,setPage,setScore,word_count,seconds}) => {

  const choices = getRandomDistinctElements(words,word_count);
  const word = choices[getRandomInt(word_count)];
  
  const buttonIndices = Array.from({ length: word_count }, (_, index) => index);
  const buttonClass = page === 'game easy' ? 'easy-buttons' : page === 'game medium' ? 'medium-buttons' : 'hard-buttons';

  return (
      <div>
          <h1 id='Word'>{word}</h1> 
        {/** the string in this h1 or the word choice buttons cannot have a space or a line break because the choice is compared to it, so any added special characters will ruin the comparison */}
        {/** for example: 'open' != 'open\n' != 'open ' */}


        {buttonIndices.map((index) => (
          <>
            <button id={`b${index + 1}`} 
                    className={buttonClass}
                    onClick={() => {
                      validateChoice(`b${index + 1}`, setScore, setPage)
                    }} 
                    type="button">

                    {choices[index]}
            </button>

            {(index + 1) % 4 === 0 && index + 1 !== word_count && <br/> /** line break every 4 buttons unless the fourth button in the sequence is the very last button */} 
          </>
          
        ))}
          <br />

          <CountdownTimer seconds={seconds} onTimeout={setPage}/>
          <h2> Score: {score} </h2>
      </div>
    )
  }

export default Game
