import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './App.css'
import cardBack from './images/cardback.png';


import cardAH from './cards/AH.jpg';
import card2H from './cards/2H.jpg';
import card3H from './cards/3H.jpg';
import card4H from './cards/4H.jpg';
import card5H from './cards/5H.jpg';
import card6H from './cards/6H.jpg';
import card7H from './cards/7H.jpg';
import card8H from './cards/8H.jpg';
import card9H from './cards/9H.jpg';
import card10H from './cards/10H.jpg';
import cardJH from './cards/JH.jpg';
import cardQH from './cards/QH.jpg';
import cardKH from './cards/KH.jpg';

import cardAS from './cards/AS.jpg';
import card2S from './cards/2S.jpg';
import card3S from './cards/3S.jpg';
import card4S from './cards/4S.jpg';
import card5S from './cards/5S.jpg';
import card6S from './cards/6S.jpg';
import card7S from './cards/7S.jpg';
import card8S from './cards/8S.jpg';
import card9S from './cards/9S.jpg';
import card10S from './cards/10S.jpg';
import cardJS from './cards/JS.jpg';
import cardQS from './cards/QS.jpg';
import cardKS from './cards/KS.jpg';

import cardAC from './cards/AC.jpg';
import card2C from './cards/2C.jpg';
import card3C from './cards/3C.jpg';
import card4C from './cards/4C.jpg';
import card5C from './cards/5C.jpg';
import card6C from './cards/6C.jpg';
import card7C from './cards/7C.jpg';
import card8C from './cards/8C.jpg';
import card9C from './cards/9C.jpg';
import card10C from './cards/10C.jpg';
import cardJC from './cards/JC.jpg';
import cardQC from './cards/QC.jpg';
import cardKC from './cards/KC.jpg';

import cardAD from './cards/AD.jpg';
import card2D from './cards/2D.jpg';
import card3D from './cards/3D.jpg';
import card4D from './cards/4D.jpg';
import card5D from './cards/5D.jpg';
import card6D from './cards/6D.jpg';
import card7D from './cards/7D.jpg';
import card8D from './cards/8D.jpg';
import card9D from './cards/9D.jpg';
import card10D from './cards/10D.jpg';
import cardJD from './cards/JD.jpg';
import cardQD from './cards/QD.jpg';
import cardKD from './cards/KD.jpg';

const textElement = <h1>Cryptic Cards</h1>;


const cards = [

  (cardAD),
  (card2D),
  (card3D),
  (card4D),
  (card5D),
  (card6D),
  (card7D),
  (card8D),
  (card9D),
  (card10D),
  (cardJD),
  (cardQD),
  (cardKD),

  
  (cardAH),
  (card2H),
  (card3H),
  (card4H),
  (card5H),
  (card6H),
  (card7H),
  (card8H),
  (card9H),
  (card10H),
  (cardJH),
  (cardQH),
  (cardKH),

  
  (cardAC),
  (card2C),
  (card3C),
  (card4C),
  (card5C),
  (card6C),
  (card7C),
  (card8C),
  (card9C),
  (card10C),
  (cardJC),
  (cardQC),
  (cardKC),

  
  (cardAS),
  (card2S),
  (card3S),
  (card4S),
  (card5S),
  (card6S),
  (card7S),
  (card8S),
  (card9S),
  (card10S),
  (cardJS),
  (cardQS),
  (cardKS)

]

function getRandomInt(min, max) {
  
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
   //The maximum is exclusive and the minimum is inclusive
}
var kort=[1,2,3,4,5,6,7,8,9,10,11,12,13,
          14,15,16,17,18,19,20,21,22,23,
          24,25,26,27,28,28,30,31,32,33,
          34,35,36,37,38,39,40,41,42,43,
          44,45,46,47,48,49,50,51,52];



function OncePlease () {
  
  var i=0; 
  var temp = getRandomInt(0,kort.length );
  
 // console.log(temp);

  while(i < kort.length) {


  if(kort[temp] === kort[i]){ 
    
    
    var retKort = kort[temp];
    

    kort.splice(i,1);
    
  
    i++;
    return retKort; 
    }
    
    i++;
}
}


// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: 0, scale: 1.0, rot: 0, delay: i * 5 })
const from = i => ({ x: 0, rot: 0, scale: 1.0, y: 10000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(15000px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = () => {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1  // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = 0//xDelta / 100 + (isGone ? dir * 1 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.0 : 1 // Active cards lift up a bit
      
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  
  function refreshPage() {
    window.location.reload(false);
  }
  
    return <div id="cardholder">
    <div id="cards">
       <h1 id="headText" >Cryptic Cards</h1>
          <span className="clickText" >Click Card! Then Swipe Away! </span>

       { props.map(({ x, y, rot, scale}, i) => (
      <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
        {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
        
        <animated.div class="flip-card" {...bind(i)} style={{ transform: interpolate([rot, scale,], trans), backgroundImage: `url(${cardBack})` }}> 
          {/*<img src={card} class="cardImages" alt="tarotCard" unselectable="on"  />
          <img src={tess} class="cardImages" alt="Tess" unselectable="on"  />*/} 
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img className="cardImages" src={cardBack} alt="cardbackside" />
      </div>
      <div className="flip-card-back">
       <img src={cards[OncePlease()-1]} className="cardImages" alt="tarotCard" unselectable="on"  />
      </div>
    </div>
    
        {/*<img src={card}  alt="Alps" />*/}
          {/*console.log("hello")*/}
          {/*backgroundImage: `url(${cards[i]})` */}
    {/*</animated.div>*/}
        </animated.div>
      </animated.div>
  ))
}
<div className="Refresh">
      <button className="REText" onClick={refreshPage}>SHUFFLE</button>
    </div>
</div>


  </div>
}

export default Deck;
