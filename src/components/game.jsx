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

    return (
      <>
          <h1 id='Word'>{word}</h1> 
        {/** the string in this h1 or the word choice buttons cannot have a space or a line break because the choice is compared to it, so any added special characters will ruin the comparison */}
        {/** for example: 'open' != 'open\n' != 'open ' */}

          <div>
  
            <button id='b1' onClick={() => {validateChoice('b1',setScore,setPage,word_count,choices)}} type="button" className="btn btn-primary">{choices[0]}</button>
            <button id='b2' onClick={() => {validateChoice('b2',setScore,setPage,word_count,choices)}} type="button" className="btn btn-primary">{choices[1]}</button>
            <button id='b3' onClick={() => {validateChoice('b3',setScore,setPage,word_count,choices)}} type="button" className="btn btn-primary">{choices[2]}</button>
            <button id='b4' onClick={() => {validateChoice('b4',setScore,setPage,word_count,choices)}} type="button" className="btn btn-primary">{choices[3]}</button>
          
          { word_count >= 6 && <>
            <br/>
            <button id='b5' onClick={() => {validateChoice('b5',setScore,setPage,word_count,choices)}} type="button" className="btn btn-primary">{choices[4]}</button>
            <button id='b6' onClick={() => {validateChoice('b6',setScore,setPage,word_count,choices)}} type="button" className="btn btn-primary">{choices[5]}</button>
          </>}

          { word_count >= 8 && <>
            <button id='b7' onClick={() => {validateChoice('b7',setScore,setPage,word_count,choices)}} type="button" className="btn btn-primary">{choices[6]}</button>
            <button id='b8' onClick={() => {validateChoice('b8',setScore,setPage,word_count,choices)}} type="button" className="btn btn-primary">{choices[7]}</button>
          </>}

          </div>
          <br />
  
      
          <CountdownTimer seconds={seconds} onTimeout={setPage}/>
       
          <h2> Score: {score} </h2>

      </>
    )
  }

export default Game