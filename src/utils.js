  export function getRandomInt(max) {

    return Math.floor(Math.random() * max);
  } // generate a random integer less than max
  

  export function getRandomDistinctElements(arr, count) {

    const shuffledArray = [...arr];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    // Take the first 'count' elements from the shuffled array.
    return shuffledArray.slice(0, count);
  }
  // use this function to guarantee there are no duplicates in word choices
  
  
  export const words = new Set([

   'Bolt','Coin','Drum','Edge','Fire','Gate','Hike','Iron','Lake','Mule','Pail','Quip','Ripe','Sock','Tilt','Vase','Wave','Yawn',
   'Bear','Cake','Door','Eggs','Fall','Gold','Hill','Joke','Lamp','Moon','Nose','Park','Rain','Sand','Tree','Vine','Wind','Yard',
   'Zest','Army','Bump','Club','Fish','Gaze','Jump','Lend','Milk','Note','Pink','Star',"Ants", "Band", "Cave", "Dusk", "Fern",
   "Glim", "Hush", "Icy", "Jaws","Kite","Lush", "Mice", "Nova", "Pave", "Quit", "Rats", "Sift", "Torn", "Ugly", "Vast","Wisp", 
   "Xray", "Yell", "Zero", "Aqua", "Bane", "Crag", "Dare", "Earl", "Fizz", "Glow", "Haze", "Inch", "Jolt", "Knee", "Loom", 
   "Mint", "Nail", "Oath","Puff", "Quiz", "Rise", "Sway", "Tide", "Urge", "Veil", "Wand", "Xeno", "Yarn","Void","Echo",'Zeal'
]);
  //length: 100
  
  
  export function changeElements(word_count,choices){
          
      document.getElementById('b1').innerHTML = choices[0];
      document.getElementById('b2').innerHTML = choices[1];
      document.getElementById('b3').innerHTML = choices[2];
      document.getElementById('b4').innerHTML = choices[3];
    
    if(word_count >= 6){
      document.getElementById('b5').innerHTML = choices[4];
      document.getElementById('b6').innerHTML = choices[5];
    }
    if(word_count >= 8){
      document.getElementById('b7').innerHTML = choices[6];
      document.getElementById('b8').innerHTML = choices[7];      
    }
    document.getElementById('Word').innerHTML = choices[getRandomInt(choices.length)];

  }
  
  export function validateChoice(clicked_id,setScore,setPage,word_count,choices){
  
    if(document.getElementById(clicked_id).innerHTML === document.getElementById('Word').innerHTML){
      changeElements(word_count,choices);
      setScore();
    }
    
    else setPage();
  
  }


  export function updateHighscore(score,user,diff){
    // user is the username
    // called as users.(argument for user)
    
    switch(diff){
      case 'easy': 
      if(score > user.hs_easy){
        user.hs_easy = score;
      }
      break;

      case 'medium': 
      if(score > user.hs_medium){
        user.hs_medium = score;
      }
      break;

      case 'hard': 
      if(score > user.hs_hard){
        user.hs_hard = score;
      }
      break;
      
        
    }
    console.log(user)
  }