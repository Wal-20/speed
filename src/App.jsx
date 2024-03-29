import { useState } from 'react'
import './App.css'
import Start from './components/start';
import Game from './components/game';
import Game_over from './components/game_over';


function App() {
  
  const [page,setPage] = useState('Ok');
  const [score,setScore] = useState(0);
  
  return (
    <>
      {page === 'Ok' && <Start setPageEasy={()=> setPage('game easy')} setPageMedium={()=> setPage('game medium')} setPageHard={()=> setPage('game hard')}/>}
      {page === 'game easy' && <Game setPage={()=> {setPage('game over')}} difficulty={'Easy'} score={score} setScore={()=>setScore(score + 1)} word_count={4} seconds={40}/>}
      {page === 'game medium' && <Game setPage={()=> {setPage('game over')}} difficulty={'Medium'} score={score} setScore={()=>setScore(score + 1)} word_count={6} seconds={30}/>}
      {page === 'game hard' && <Game setPage={()=> {setPage('game over')}} difficulty={'Hard'} score={score} setScore={()=>setScore(score + 1)} word_count={8} seconds={20}/>}
      {page === 'game over' && <Game_over score={score} setPage={() => {setPage('Ok'); setScore(0)}}/>}
    </>
  )
}

export default App;