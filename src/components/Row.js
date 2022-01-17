import React from 'react'
import classNames from "classnames"

export default function Row(props) {
    let wordArray = ['', '', '', '', '']
    let rightWord = ['', '', '', '', '']
    if (props.word !== "") {
        wordArray = props.word.split('')
    }

    if (props.rightWord !== undefined) {
        rightWord = props.rightWord.split('')
    }


    return (
        <div className="boardRow">
            {[0, 1, 2, 3, 4].map((e, id) => (
                <div key={id} className={
                    classNames({
                        tile: true,
                        green: props.rightWord !== undefined && wordArray[e] === props.rightWord[e],
                        yellow: rightWord.includes(wordArray[e]) && wordArray[e] !== "" && wordArray[e] !== props.rightWord[e],
                        grey: props.complete && !rightWord.includes(wordArray[e]),
                    })
                }>
                    {wordArray[e]}
                </div>
            ))}

        </div>
    )
}