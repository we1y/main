import React, { useState } from "react";
import Question from "../Proforient/Question";
import { questions } from "./constants/question";





const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isOpen, setOpen] = useState(false);
  


  const onAnswer = (questionId, score) => {
    const newTotalScore = totalScore + score;
    setTotalScore(newTotalScore);
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion === questions.length ? 0 : nextQuestion);
    console.log(newTotalScore)
  }


  

  return (

    
    
    <div>
      {questions[currentQuestion].id < 16 && (<p style={{fontSize: 15, fontWeight: '500'}}>Вопрос №{questions[currentQuestion].id}</p>)}
      {questions[currentQuestion] && (
        <Question
          question={questions[currentQuestion]}
          onAnswer={onAnswer}    
          />
      )}
      {
      questions[currentQuestion].id === questions.length && (

        <div className='profresult'>
          <h1>Результат теста</h1>
            {
              totalScore <= 10 && (
                <div className="totalscoreresult">
                <div className="successresult">«Человек-Человек»: {totalScore} баллов</div>
                <p>Для типа «Человек-Человек» характерна ориентация на все профессии, связанные с обслуживанием людей, с общением.
                  Предметом труда для представителей большинства профессий типа «человек-человек» являются:
                  - люди.
                  Специалистам в этой области приходится выполнять следующие виды деятельности:
                  - воспитание, обучение людей;
                  - медицинское обслуживание;
                  - бытовое обслуживание;
                  - информационное обслуживание;
                  - защита общества и государства.
                  </p>
                </div>
              )
            }
            {
              (totalScore <= 17 && totalScore > 10) && (
                <div className="totalscoreresult">
                <div className="successresult">«Человек-Техника»: {totalScore} балла</div>
                <p>Для типа «Человек-Техника» характерна ориентация на все технические профессии.
                  Если вам нравятся лабораторные работы по физике, химии, электротехнике, если вы делаете модели, разбираетесь в бытовой технике,
                  если вы хотите создавать, эксплуатировать или ремонтировать машины, механизмы, аппараты, станки, то ознакомьтесь с профессиями «человек-техника».
                  Предметом труда для представителей большинства профессий типа «человек-техника» являются:
                  - технические объекты (машины, механизмы);
                  - материалы, виды энергии.
                  </p>
                </div>
              )
            } 
            {
              totalScore > 17 && (
                <div className="totalscoreresult">
                <div className="successresult">«Человек-Знак»: {totalScore} балла</div>
                <p>Для типа «Человек-Знак» характерна ориентация на все профессии, связанные с подсчетами, цифровыми и буквенными знаками, в том числе и музыкальные специальности.
                  Если вы любите выполнять вычисления, чертежи, схемы, вести картотеки, систематизировать различные сведения, если вы хотите заниматься программированием, экономикой или статистикой и т.п., то знакомьтесь с профессиями типа «человек-знак». Большинство профессий этого типа связано с переработкой информации.
                  Предметом труда для представителей большинства профессий типа «человек-знак» являются:
                  - тексты на родном или иностранном языках;
                  - цифры, формулы, таблицы;
                  - чертежи, схемы, карты;
                  - звуковые сигналы.
                  </p>
                </div>
              )
             
            }



            

        </div>
        
  
      )}
      <div className="progressbar">
      {
        questions[currentQuestion].id < 16 && (
        questions[currentQuestion] && (
          <progress value={
            questions[currentQuestion].id === 1 && (questions[currentQuestion].id / 0) ||
            questions[currentQuestion].id === questions[currentQuestion].id && (questions[currentQuestion].id / 16)
        } />
        )
        )
      }  

      {
        questions[currentQuestion].id < 16 && (<div className="progtext">
        {
          questions[currentQuestion].id - 1 
        }
        <p>
        из 15
        </p>
        </div>)
      }
      </div>
      {
         questions[currentQuestion].id < 16 && (<div className="progdisc">
         <h3 onClick={() => setOpen(!isOpen)}><h3 style={{color:'rgb(0, 50, 131)', marginRight: 10,fontSize: 15}}>&gt;</h3>Описание теста</h3>
         <p className={`p ${isOpen ? "p___active" : ""}`}>Тест позволяет определить предрасположенность к тому или иному виду деятельности. 15 вопросов, в результате ответа на которые будет определена ваша предрасположенность к одному из видов профессиональных направлений</p>
       </div>)
      }
    </div>
  );
};

export default Quiz;