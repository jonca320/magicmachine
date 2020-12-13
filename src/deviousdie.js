import './App.css';
import React from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

import cardicon from'./CrypticCards.png'
import dieicon from'./DeviousDie.png'
import wheelicon from'./Wheel.png'
 
class App extends React.Component {
  render() {
   return (
     
        <div className="DiceHolder">
          <link href='https://fonts.googleapis.com/css?family=Aladin' rel='stylesheet'></link>
          <div className="DropShadow"></div>
          <h1 className="Title">Devious Die</h1>
             <ReactDice
              numDice={1}
              outline={false}
              outlineColor={"rgb(200, 200, 200)"}
              faceColor={ " radial-gradient(circle, rgb(255, 255, 255) 0%,  rgb(200, 200, 200) 90%)"}
              dotColor={"radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(40, 40, 40) 90%)"}
              dieSize={150}
              rollTime={2}
              defaultRoll={1}

              disableIndividual={false}
              ref={dice => this.reactDice = dice}
            />
            
          <h2 className="Description">Press to roll!</h2>
           
        </div>
        



  )
}
rollAll() {
  this.reactDice.rollAll()
}

rollDoneCallback(num) {
  console.log(`You rolled a ${num}`)
}

}

export default App;
