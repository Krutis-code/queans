import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const questions = data; 
  
  return  <main>
  <div  className="container">
      
        <h2>Questions an answers about Login</h2>
      
   
      <section className="info" >
        {questions.map((question)=>{
            return <SingleQuestion key={question.id}question={question}></SingleQuestion>
        })}
      </section>

  </div>
  </main>
}

export default App;
