import React from "react";
import { useRef } from "react";
export const Answers = ({answers,selectedAnswer,answerState,onSelect}) => {
    const Random_Answers = useRef();
    if(!Random_Answers.current){
        Random_Answers.current = [...answers];
        Random_Answers.current.sort(() => Math.random()-0.5);
        }
    return (
        <ul id="answers">
        {Random_Answers.current.map((answer) => {
          const isSelected = selectedAnswer ===answer;
          let cssClasses = '';
          if(answerState == 'answered' && isSelected){
              cssClasses = 'selected';
          }
          if((answerState === 'correct' || answerState === 'wrong') && isSelected){
              cssClasses = answerState;
          }
          console.log(cssClasses);
          return(
            <li key={answer} className="answer">
                <button onClick={() => onSelect(answer)} className={cssClasses}
                disabled={answerState!==''}>{answer}</button>
            </li>
        )})}
    </ul>
    );
}