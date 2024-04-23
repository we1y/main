import React from "react";

const Question = ({ question, onAnswer }) => {
  const { id, text, options } = question;


  return (
    <div>
      <h3>{text}</h3>
      {options.map((option) => (
        <button key={option.id} onClick={() => onAnswer(id, option.score)} style={{marginBottom: 20}}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Question;