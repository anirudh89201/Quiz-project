import React from "react";
import  Image from '../assets/quiz-logo.png'
export const Header = () => {
    return (
        <header>
            <nav>
                <img src={Image} alt="quiz-logo"/>
                <h1>REACT QUIZ</h1>
            </nav>
        </header>
    );
}