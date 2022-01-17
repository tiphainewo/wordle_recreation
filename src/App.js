import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import { wordsList } from './const/words'

function App() {
  const [words, setWords] = useState(["", "", "", "", "", ""])
  const [currentWord, setCurrentWord] = useState("")
  const [rightWord, setRightWord] = useState(wordsList[Math.floor(Math.random() * wordsList.length)])
  const [currentTry, setCurrentTry] = useState(0)
  const [letterState, setLetterState] = useState({})

  //Confirm current word
  const onEnter = () => {
    console.log(currentTry)
    if (currentWord.length < 5) {
      alert("Not enough letters")
    }
    else if (!wordsList.includes(currentWord.toLowerCase())) {
      alert("Not in word list")
    }
    else {
      let tempWordsArray = words
      tempWordsArray[currentTry] = currentWord
      setWords(tempWordsArray)

      if (currentTry <= 5) {
        
        //Check if the letters are in the words to display on keyboard
        let wordArray = currentWord.split('')
        let rightWordArray = rightWord.split('')
        let tempDict = letterState
        wordArray.forEach((letter, i) => {
          if (letter === rightWordArray[i]) { tempDict[letter] = 3 }
          else if (rightWordArray.includes(letter)) { tempDict[letter] = 2 }
          else { tempDict[letter] = 1 }
        });
        setLetterState(tempDict)
        setCurrentWord("")
        setCurrentTry(currentTry + 1)

        if (currentWord === rightWord) {
          setTimeout(() => {
            alert("You win !")
          }, 1000);
          
        } else if (currentTry === 5)
        {
          setTimeout(() => {
            alert("You lose, the word was : "+rightWord)
          }, 1000);
          
        }
      } 
      
    }
  }

  //Add letter to current word
  const onLetterClick = (letter) => {
    let tempWord = currentWord
    if (tempWord.length < 5) {
      tempWord += letter
    }
    setCurrentWord(tempWord)
  }

  //Clear current word
  const onDelete = () => {
    let tempWord = currentWord.slice(0, -1)
    setCurrentWord(tempWord)
  }

  useEffect(() => {
    setRightWord(rightWord.toUpperCase())
    console.log(rightWord)
    //Initialize array for the state of each letter on the keyboard
    let tempDict = letterState
    for (let letter in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']) {
      tempDict[letter] = 0;
    };
    setLetterState(tempDict)
  }, [])

  return (
    <div className="App">
      <Header />
      <Board key={words} words={words} currentWord={currentWord} currentTry={currentTry} rightWord={rightWord} />
      <Keyboard onEnter={onEnter} onLetterClick={onLetterClick} onDelete={onDelete} letterState={letterState} />
    </div>
  );
}

export default App;
