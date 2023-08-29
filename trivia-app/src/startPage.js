import React from 'react';
import './App.css';


function StartPage({ onStartQuiz }) {
  return (
    <div className="App">
      <div className="container">
       <h1 className="frontPage">Welcome to Trivia Challenge!</h1>
       <p className="text1">You will be presented with 10 True or False questions.</p>
       <button className="start" onClick={onStartQuiz}>Begin</button>
      </div>
    </div>
  );
}

export default StartPage;
