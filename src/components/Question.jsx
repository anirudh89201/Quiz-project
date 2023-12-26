import React, { useState } from "react";
import { Timer } from "../UI/Timer";
import { Answers } from "./Answers";
import Questions  from '../quiz.js';
export const Question = ({
  activequestionsindex,
  onSelectAnswer,
  handleSkipAnswer
}) => {
    const NoofQuestions = Questions.length;
    const [answer,setAnswer] = useState({
        selectedAnswer:'',
        isCorrect:null
    });
    let timer = 10000;
    if(answer.selectedAnswer){
      timer = 1000;
    }
    else if(answer.isCorrect!==null){
      timer = 2000;
    }
    const handleSelectAnswer = (answer) =>{
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
        })
        setTimeout(() => {
            setAnswer(
                {
                    selectedAnswer:answer,
                    isCorrect: answer === Questions[activequestionsindex].answers[0]

                })
        setTimeout(() => {
            onSelectAnswer(answer);
        },2000);
        },1000)
    }
    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect!=null){
        answerState = answer.isCorrect?'correct':'wrong'
    }else if(answer.selectedAnswer){
      answerState = 'answered';
    }
  return (
    <React.Fragment>
      {activequestionsindex < NoofQuestions && (
        <React.Fragment>
          <Timer
           key={activequestionsindex} 
           timeout={timer}
           onTimeout={answer.selectedAnswer==='' ? handleSkipAnswer:null}
           mode={answerState} 
           />
          <h2 className="question-overview">{Questions[activequestionsindex].text}</h2>
          <Answers
            key={Questions[activequestionsindex].id}
            answers={Questions[activequestionsindex].answers}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
