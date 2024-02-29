  const getRandomInt = (max) => Math.floor(Math.random() * max);
  // generate a random integer less than max
  
  function getRandomDistinctElements(arr, count) {

    const shuffledArray = [...arr];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray.slice(0, count);     // Take the first 'count' elements from the shuffled array.
  }
  // use this function to guarantee there are no duplicates in word choices
  
  
  const words = new Set([

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
   "Dream", "Party", "Shine", "Zebra", "Happy", "Swift","Acorn", "Badge", "Cedar", "Drift",
   "Eagle", "Flask", "Gourd", "Hazel", "Ivory", "Juice",
   "Kiosk", "Lemon", "Mango", "Nudge", "Olive", "Plank", "Quack", "Ridge", "Snail", "Tulip",
   "Unity", "Viper", "Wagon", "Xenon", "Yacht", "Zebra", "Amber", "Blush", "Clove", "Daisy",
   "Elixir", "Fable", "Glimpse", "Harbor", "Icicle", "Jester", "Kale", "Lagoon", "Mimic", "Nectar",
   "Oasis", "Petal", "Quartz", "Radiant", "Sable", "Tranquil", "Umbra", "Valley", "Whisper", "Xylophone",
   "Yonder", "Zenith", "Arrow", "Blizzard", "Cascade", "Dewdrop", "Ember", "Frost", "Glimmer", "Horizon",
   "Infinity", "Journey", "Kindle", "Luminous", "Mist", "Nimbus", "Orbit", "Pebble", "Quiver", "Radiance",
   "Sunset", "Twilight", "Uplift", "Vivid", "Wander", "Xenial", "Yearn", "Zephyr", "Aura", "Breeze",
   "Crystal", "Dawn", "Eclipse", "Fern", "Galaxy", "Halo", "Illuminate", "Jubilee", "Kite", "Lagoon"
   
]);
  //length: 200

  function validateChoice(clicked_id,setScore,setPage) {
    
    const wordElement = document.getElementById('Word').innerHTML;
    const clickedElement = document.getElementById(clicked_id).innerHTML;

    if(wordElement === clickedElement){
      //changeElements(word_count,choices);
      setScore((prevScore) => prevScore + 1);
    }
    
    else setPage('game over');
  
  }

  export { getRandomInt, getRandomDistinctElements, words, validateChoice };