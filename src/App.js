import React from "react";
import "./App.css";
import Dice from "./components/Dice";
// import Dice6 from "./public"
// import Roll from './components/Roll';

function App() {
  const [player1, setPlayer1] = React.useState({
    score: 0,
    title:"Player1",
    // <img src=""/>,
    
  });

  return (
    <div className="App">
     <Dice player1={player1} setPlayer1={setPlayer1}/>
     {/* <Dice player1.score={0} setPlayer1.score={2} */}
    </div>
  );}




export default App;
