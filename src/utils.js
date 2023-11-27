  export function getRandomInt(max) {

    return Math.floor(Math.random() * max);
  } // generate a random integer less than max
  

  export function getRandomDistinctElements(arr, count) {

    const shuffledArray = [...arr];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray.slice(0, count);     // Take the first 'count' elements from the shuffled array.
  }
  // use this function to guarantee there are no duplicates in word choices
  
  
  export const words = new Set([

   'Bolt','Coin','Drum','Edge','Fire','Gate','Hike','Iron','Lake','Mule','Pail','Quip','Ripe','Sock','Tilt','Vase','Wave','Yawn',
   'Bear','Cake','Door','Eggs','Fall','Gold','Hill','Joke','Lamp','Moon','Nose','Park','Rain','Sand','Tree','Vine','Wind','Yard',
   'Zest','Army','Bump','Club','Fish','Gaze','Jump','Lend','Milk','Note','Pink','Star',"Ants", "Band", "Cave", "Dusk", "Fern",
   "Glim", "Hush", "Icy", "Jaws","Kite","Lush", "Mice", "Nova", "Pave", "Quit", "Rats", "Sift", "Torn", "Ugly", "Vast","Wisp", 
   "Xray", "Yell", "Zero", "Aqua", "Bane", "Crag", "Dare", "Earl", "Fizz", "Glow", "Haze", "Inch", "Jolt", "Knee", "Loom", 
   "Mint", "Nail", "Oath","Puff", "Quiz", "Rise", "Sway", "Tide", "Urge", "Veil", "Wand", "Xeno", "Yarn","Void","Echo",'Zeal',
   "Apple", "Happy", "Sunny", "Dream", "Music", "Fancy", "Chance", "Guitar", "Jolly", "Smile", 
   "Magic", "Quick", "Dance", "Funny", "Brave", "Witty", "Sugar", "Green", "Cloud", "Cheer", 
   "Laugh", "Peace", "Beach", "Heart", "Shine", "Party", "Proud", "Sweet", "Grace", "Honor", 
   "Power", "Tiger", "Flame", "Ocean", "Faith", "Light", "Grin", "Spark", "Joyful", "Flower", 
   "Dreamy", "Zebra", "Joker", "Happy", "Sunny", "Fresh", "Smirk", "Swift", "Bliss", "Whimsy", 
   "Peace", "Fancy", "Lucky", "Heart", "Jolly", "Music", "Globe", "Smile", "Candy", "Vivid", 
   "Glow", "Frost", "Moon", "Bloom", "Calm", "Sugar", "Green", "Cloud", "Cheer", "Laugh", 
   "Honey", "Blaze", "Magic", "Chill", "Beach", "Dream", "Sweet", "Grace", "Power", "Faith", 
   "Tiger", "Flame", "Ocean", "Proud", "Honor", "Sugar", "Quick", "Sunny", "Brave", "Witty", 
   "Dream", "Party", "Shine", "Zebra", "Happy", "Swift"
]);
  //length: 100
  
  
  // export function changeElements(word_count,choices){
          
  //     document.getElementById('b1').innerHTML = choices[0];
  //     document.getElementById('b2').innerHTML = choices[1];
  //     document.getElementById('b3').innerHTML = choices[2];
  //     document.getElementById('b4').innerHTML = choices[3];
    
  //   if(word_count >= 6){
  //     document.getElementById('b5').innerHTML = choices[4];
  //     document.getElementById('b6').innerHTML = choices[5];
  //   }
  //   if(word_count >= 8){
  //     document.getElementById('b7').innerHTML = choices[6];
  //     document.getElementById('b8').innerHTML = choices[7];      
  //   }
  //   document.getElementById('Word').innerHTML = choices[getRandomInt(choices.length)];

  // }
  
  export function validateChoice(clicked_id,setScore,setPage){
    
    const wordElement = document.getElementById('Word').innerHTML;
    const clickedElement = document.getElementById(clicked_id).innerHTML;

    if(wordElement === clickedElement){
      //changeElements(word_count,choices);
      setScore((prevScore) => prevScore + 1);
    }
    
    else setPage('game over');
  
  }
