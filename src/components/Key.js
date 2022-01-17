import React from 'react'
import classNames from "classnames"

export default function Key(props) {

    const handleClick=()=>{
        props.onLetterClick && props.onLetterClick(props.letter)

        //If the key is "Enter" it will have this prop
        props.onEnter && props.onEnter("banana")

        //If the key is delete it will have this prop
        props.onDelete && props.onDelete()
    }

    return (
        <button className={
            classNames({
                key: true,
                bigKey : props.bigKey,
                green : props.letterState === 3,
                yellow : props.letterState === 2,
                grey : props.letterState === 1
            })
        } onClick={handleClick}>
            {props.letter}
        </button>
    )
}
