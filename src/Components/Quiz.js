import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult'

function Quiz() {

  const [currentQuestion,setcorrentQuestion] = useState(0)
  const [score,setscore] = useState(0)
  const [clickOption, setClickOption] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const changeQuestion = () => {
    updateScore();
    if(currentQuestion < QuizData.length-1){
      setcorrentQuestion(currentQuestion+1)
      setClickOption(0)
    }
    else{
      setShowResult(true)
    }
  }

  const updateScore = () => {
    if(clickOption === QuizData[currentQuestion].answer){
      setscore(score+1);
    }
  }

  const resetAll = () => {
    setShowResult(false)
    setcorrentQuestion(0)
    setClickOption(0)
    setscore(0)
  }

  return (
    <div>
      <p className='heading-txt'>QUIZ APP</p>
      <div className='container'>
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
        ):(
        <>
        <div className='question'>
            <div className='que-num'>
              <span id='question-number'>{currentQuestion+1}.</span>
            </div>
            <span id='question-txt'>{QuizData[currentQuestion].question}</span>
        </div>
        <div className='option-container'>
            {
                QuizData[currentQuestion].options.map((val,i) => {
                    return(
                        <button key={val} className={'option-btn ${clickOption == i+1?"checked":null}'} onClick={() => setClickOption(i+1)}>
                          {val}
                        </button>
                    )
                })
            }
        </div>
        <input type='button' value="Next" id='next-button' onClick={changeQuestion} />
        </>)}
      </div>
    </div>
  )
}

export default Quiz
