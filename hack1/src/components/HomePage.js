/****************************************************************************
  FileName      [ HomePage.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file generates the Home page.  ]
  Copyright     [ 2021 10 ]
****************************************************************************/

import React, { useState } from 'react';
import './css/HomePage.css';

{/* -- TODO 2 -- */}
const HomePage = ({startGameOnClick, mineNumOnChange, boardSizeOnChange, mineNum, boardSize /* -- something more... -- */}) => {
    const [showPanel, setShowPanel] = useState(false);      // A boolean variable. If true, the controlPanel will show.
    const [error, setError] = useState(false);              // A boolean variable. If true, means that the numbers of mines and the board size are invalid to build a game.

    {/* Some functions may be added here! */}
    const click =() => {
      return(
        <div className="controlWrapper">
          hello
            <div className="controlPanel"></div>
        </div>
      );
    }
    

    return(
      <div className = 'HomeWrapper'>
          <p className = 'title'>MineSweeper</p>
            {/* -- TODO 1-1 -- */}
            <button className = "btn" onClick={startGameOnClick}>Start Game</button>
            {/* -- TODO 6-2 -- */}
            <div className="controlContainer">
              <button className = "btn" onClick={click}>Difficulty Adjustment</button>
            </div>
            {/* Useful Hint: <input type = 'range' min = '...' max = '...' defaultValue = '...'> */}
            {/* Useful Hint: Error color: '#880000', default text color: '#0f0f4b', invisible color: 'transparent' */}
            {/* Reminder: The defaultValue of 'mineNum' is 10, and the defaultValue of 'boardSize' is 8. */}
            
        </div>
    );

}
export default HomePage;   