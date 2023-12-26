import React from "react";
import quizComplete from '../assets/quiz-complete.png'
import Questions from '../quiz.js';
export const Complete = ({userAnswers}) => {
    const skippedAnswer = userAnswers.filter(answer=>answer===null);
    const correctAnswers =  userAnswers.filter((answer,index) => answer === Questions[index].answers[0]);
    const skippedAnswersPercent = Math.round((skippedAnswer.length/userAnswers.length)*100);
    const correctAnswersPercent = Math.round((correctAnswers.length/userAnswers.length)*100);
    const incorrectAnswersPercent = 100-skippedAnswersPercent-correctAnswersPercent;
    
    return (
        <div id="summary">
            <img src={quizComplete} alt="completion"/>
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersPercent}%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersPercent}%</span>
                    <span className="text">Answered Correctly</span>
                </p>
                <p>
                    <span className="number">{incorrectAnswersPercent}%</span>
                    <span className="text">Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer,index) => {
                    let cssClass = 'user-answer';
                    if(answer === null){
                        cssClass += 'skipped';
                    }
                    else if(answer === Questions[index].answers[0]){
                        cssClass+='correct';
                    }
                    else if(answer !== Questions[index].answers[0]){
                        cssClass+='wrong';
                    }
                    // console.log(cssClass);
                    return(
                        <li key={Questions[index].id}>
                        <h3>{index+1}</h3>
                        <p className="question">{Questions[index].text}</p>
                        <p className={cssClass}>{answer}</p>
                    </li>
                    )
                })}
            </ol>
        </div>
    );
}