import React, { useEffect } from 'react'
import Row from './Row'

export default function Board(props) {

    return (
        <div className="board">
            {props.words.map((word, id) => (
                props.currentTry === id ? (
                    <div key={id} >
                        <Row word={props.currentWord} complete={props.currentTry > id}/>
                    </div>
                ) : 
                (<div key={id} >
                    <Row word={word} rightWord={props.rightWord} complete={props.currentTry > id}/>
                </div>
                )
                
            ))}
        </div>

    )
}
