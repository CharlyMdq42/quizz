import React from 'react';

function Score({ userAnswers, questions }) {
  const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correct_answer);
  const incorrectAnswers = userAnswers.filter((answer, index) => answer !== questions[index].correct_answer);

  const totalPoints = correctAnswers.length;

  return (
    <div className='container'>
    <div className="score-page">
      <h1>Your Score</h1>
      <p>Total Points: {totalPoints}</p>
      <div className="summary">
        <h2>Summary</h2>
        <p>Correct Answers: {correctAnswers.length}</p>
        <ul>
          {correctAnswers.map((answer, index) => (
            <li key={index}>{questions[index].question}</li>
          ))}
        </ul>
        <p>Incorrect Answers: {incorrectAnswers.length}</p>
        <ul>
          {incorrectAnswers.map((answer, index) => (
            <li key={index}>{questions[index].question}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Score;

