/****************************************************************************
  FileName      [ Modal.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file generates the Modal component. ]
  Copyright     [ 2021 10 ]
****************************************************************************/

import React, { useEffect, useState } from "react";
import './css/Modal.css'

export default function Modal({restartGame, backToHome, win}){
    const [render, setRender] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 1000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            win=true;
        }, 3000);
    }, []);

    return (
        /* -- TODO 5-1 -- */
        /* Useful Hint: style = {{opacity: 1 or 0 }} */
        <div className="modal">
            <div className="modalWrapper"></div>
            <div className="modalContent">
                <div className="modalResult">{!win?"WIN Game Over":"Game Over"}</div>
                <div className="modalBtnWrapper">
                    <div className="modalBtn">
                        <button onClick={restartGame}>{!win?"New Game Try Again":"Try Again"}</button>
                    </div>
                    <div className="modalBtn">
                        <button onClick={backToHome}>Back to Home</button>
                    </div>
                </div>
            </div>
            <div className="modalWrapper"></div>
        </div>
    );
}