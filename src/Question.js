import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {title,info} = props.question;
  const [showInfo,setShowInfo] = useState(false);
  const [icon,setIcon] = useState(<AiOutlinePlus></AiOutlinePlus>);
  
  const handleanswer = () =>{
    setShowInfo(!showInfo)
    
    setIcon(

       <AiOutlineMinus></AiOutlineMinus>
    )
    if(showInfo == true){
      setIcon(<AiOutlinePlus></AiOutlinePlus>)
    }
    
  } 
  return (<div className="question">
    <div className="header">
      <h4>{title}</h4>
      <button className="btn" onClick={handleanswer}>{icon}</button>
    </div>
    { showInfo && <p>{info}</p>}
  </div>)
};

export default Question;
