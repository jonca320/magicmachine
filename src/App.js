import React from "react";

import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  NavLink,
  
} from "react-router-dom";

import WickedWheel from './wickedwheel.js';
import DeviousDie from './deviousdie.js';
import CrypticCards from './Cards.js';
import Frontpage from './Frontpage.js';

import cardicon from'./CrypticCards.png'
import dieicon from'./DeviousDie.png'
import wheelicon from'./Wheel.png'

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



function App() {


  return (
 
    <Router>
      
        {/* A <Switch> looks through its children <Route>s and
                      renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/die">
            
            <DeviousDie/>
            <div className="Links">
        
                <NavLink exact activeClassName="active" className="inactive" to="/cards"><img src={cardicon}></img></NavLink>
                <NavLink exact activeClassName="active" className="inactive" to="/die"><img src={dieicon}></img></NavLink>
                <NavLink exact activeClassName="active" className="inactive" to="/wheel"><img src={wheelicon}></img></NavLink>
            </div>
          </Route>
          <Route path="/cards">
            <CrypticCards/>
            <div className="Links">
                
                <NavLink exact activeClassName="active" className="inactive" to="/cards"><img src={cardicon}></img></NavLink>
                <NavLink exact activeClassName="active" className="inactive" to="/die"><img src={dieicon}></img></NavLink>
                <NavLink exact activeClassName="active" className="inactive" to="/wheel"><img src={wheelicon}></img></NavLink>
            </div>
          </Route>
          <Route path="/wheel">
            
            <WickedWheel />
            <div className="Links">
        
              <NavLink exact activeClassName="active" className="inactive" to="/cards"><img src={cardicon}></img></NavLink>
              <NavLink exact activeClassName="active" className="inactive" to="/die"><img src={dieicon}></img></NavLink>
              <NavLink exact activeClassName="active" className="inactive" to="/wheel"><img src={wheelicon}></img></NavLink>
          </div>
          </Route>
          <Route path="/">
            <Frontpage/>
          </Route>
        </Switch>
        <link href='https://fonts.googleapis.com/css?family=Aladin' rel='stylesheet'></link>
    
      

    </Router>
   
    );
}

export default App;
