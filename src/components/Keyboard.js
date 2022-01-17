import React from "react";
import Key from "./Key";

export default function keyboard(props) {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="keyboard">
      <div className="row">
        {firstRow.map((letter) => (
          <div key={letter}>
            <Key letter={letter} onLetterClick={props.onLetterClick} letterState={props.letterState[letter]}/>
          </div>
        ))}
      </div>

      <div className="row">
        {secondRow.map((letter) => (
          <div key={letter}>
            <Key letter={letter} onLetterClick={props.onLetterClick} letterState={props.letterState[letter]}/>
          </div>
        ))}
      </div>

      <div className="row">
        <Key letter="ENTER" onEnter={props.onEnter} bigKey={true}/>
        {thirdRow.map((letter) => (
          <div key={letter}>
            <Key letter={letter} onLetterClick={props.onLetterClick} letterState={props.letterState[letter]}/>
          </div>
        ))}
        <Key letter="⇦" onDelete={props.onDelete} bigKey={true}/>
      </div>
    </div>
  );
}
