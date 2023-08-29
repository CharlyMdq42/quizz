import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StartPage from './startPage';
import Score from './Score';


function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false); // Agrega un estado para controlar si el cuestionario está completo

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get(
          'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
        );
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true); // Marcar el cuestionario como completo cuando se responden todas las preguntas
    }



  };

  const handleBeginQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizStarted(true);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (!quizStarted) {
    return <StartPage onStartQuiz={handleBeginQuiz} />;
  }


  if (quizCompleted) {
    return <Score userAnswers={userAnswers} questions={questions} />; // Pasa el arreglo questions como prop
  }
  

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App">
      <div className="container">
        <h1 className="frontPage">Trivia Challenge</h1>
        <div className="question">
          {currentQuestion.question} {/* Mostrar el contenido de la pregunta sin dangerouslySetInnerHTML */}
        </div>
        <div className="answer-buttons">
          <button className="start" onClick={() => handleAnswer('True')}>
            True
          </button>
          <button className="start" onClick={() => handleAnswer('False')}>
            False
          </button>
        </div>
        <p>
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
}

export default App;
