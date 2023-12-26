import React, { useCallback, useState} from "react";
import { Card } from "../UI/Card";
import quiz from "../quiz";
import { Complete } from "../UI/Complete";
import { Question } from "./Question";
export const Quiz = () => {
    const [userAnswers,setuserAnswers] = useState([]);
    const activequestionsindex = userAnswers.length;
    const handleSelectAnswer = useCallback(function handleSubmit(currentAnswer){
        setuserAnswers((prevAnswers) => {
            return [...prevAnswers,currentAnswer]
        });
    },[]);
    let NoofQuestions = quiz.reduce((accumulator) => {
        return accumulator+1
    },0)
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);
    if(activequestionsindex === NoofQuestions){
        return (
            <Complete userAnswers={userAnswers}/>
        );   
    }
 return (
  <Card id="quiz">
    <Question
      key={activequestionsindex}
      activequestionsindex={activequestionsindex} 
      onSelectAnswer={handleSelectAnswer}
      handleSkipAnswer={handleSkipAnswer}
    />
  </Card>
);
    
}