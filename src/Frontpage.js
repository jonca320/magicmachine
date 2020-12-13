import React from "react";

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useParams,
    useLocation,
  } from "react-router-dom";

import cardicon from'./CrypticCards.png'
import dieicon from'./DeviousDie.png'
import wheelicon from'./Wheel.png'

const Frontpage = () => {
    return (
        <div className="frontpage">
            <div className="ct"><span className="clickText">Choose a machine!</span></div>
            
            <div className="fpLinks">
                
                <div className="fpLink">
                    
                    <NavLink className="fpNav" to="/die">
                        <img className="NavImg" src={dieicon}></img>
                    </NavLink>
                    
                    <Link className="info" to="/die">
                    
                                <h2 className="infoText">Devious Die</h2>
                                <p className="infoText">Roll a die!</p>
                    
                  </Link>
                </div>

                <div className="fpLink">    
                    <NavLink className="fpNav" to="/wheel">
                        <img className="NavImg" src={wheelicon}></img>
                        
                    </NavLink>
                    <Link to="/wheel" className="info">
                                <h2 className="infoText">Whicked Wheel</h2>
                                <p className="infoText">Spin a wheel to decide the winner!</p>
                            </Link>
                </div>

                <div className="fpLink">
                    <NavLink className="fpNav" to="/cards">
                            <img className="NavImg" src={cardicon}></img>
                            
                    </NavLink>
                    <Link to="/cards" className="info">
                                <h2 className="infoText">Cryptic Cards</h2>
                                <p className="infoText">Swipe a shuffled card deck!</p>
                            </Link>
                </div>
            </div>
        </div>
    )
}

export default Frontpage;