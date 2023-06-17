import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {FetchApi}  from './Services/Service_api';
import { QuizQuestion,Quiz } from "./Service_Types/Sevices_Types"
import QuestionCard from './components/QuestionCard';

function App() {
  const [flag, setFlag] = useState<boolean>( false)
  const [quiz, setQuiz] = useState<Quiz[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  useEffect(()=>{
   async function fetchQuiz(){
    const data = await FetchApi(5,'easy');
    setQuiz(data) 
    }
    fetchQuiz();
  },[])
  
  
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    const currentQuestion: Quiz = quiz[currentStep];
    // console.log("correct And: " + currentQuestion.correct_answer + " --user Selection:" + userAns)
    if (userAns === currentQuestion.correct_answer) {
      setScore(++score);
    }
    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else {
      setFlag(true);
    }
  }
  




console.log(quiz)

  if(!quiz.length){
    return <h1>Loading...</h1>
  }
  if(flag){
    return (<div className="question-container result-container">
      <h2>Result</h2>

      <p className="result-text">
        You final score is 
          <b> {score}</b> out of <b>{quiz.length}</b>
      </p>
    </div>
    )}
  return (
    <div className="App">
      <QuestionCard options={quiz[currentStep].options}
        question={quiz[currentStep].question}
        callback={handleSubmit}/>
    </div>
  );
}

export default App;
