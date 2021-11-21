import { useState } from 'react';
import './index.css';
import { guess, startGame, restart } from './axios';

function App() {

  //Define states
  const [hasStarted, setHasStarted] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleGuess = async () => {
    const response = await guess(number);
    if(response === 'Equal') setHasWon(true);
    else {
      setStatus(response);
      setNumber('');
    }
  }
  
  const input = (e) => {
    setNumber(e.target.value);
  }
  //Define three different views
  const startMenu = (
    <div>
      <button onClick={() => startGame(setHasStarted)}> start game </button>
    </div>
    //onClick內 someFunctionToBackend and setHasStarted
  );
  const gameMode = (
    <> 
      <p>Guess a number between 1 to 100</p>
      <input type="text" value={number} onChange={input}></input> 
      <button onClick={handleGuess} disabled={!number}>guess!</button>
      <p>{status}</p>
    </>
    //input -> get the value from input(onChange)
    //button -> send number to backend
  );
  const winningMode = (
    <>
      <p>you won! the number was {number}.</p>
      <button onClick={() => restart(setHasWon,setStatus,setNumber)}>restart</button>
    </>
    //button -> handle restart for backend and frontend
  );

  const game = (
    <div>
      {hasWon ? winningMode : gameMode}
    </div>
  );

  return (
    <div className="App">
      {hasStarted ? game : startMenu}
    </div>
  );
}

export default App;
