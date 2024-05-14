import React from 'react'
import "../styles/prof.css"
import { useState } from 'react'


import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollButton from '../components/ScrollButton'
import Quiz from '../components/Proforient/Quiz'
import { VKShareButton } from 'react-share'

export default function ProfOrient () {



    const [isOpen, setOpen] = useState(false);
    const shareUrl = 'navigator.krtsc.ru/proforient'



  
  return (
    <div>
      <title>Профориентация</title>
      <Header />
      <ScrollButton />
    <div className='cnt'>
    <h1>Профориентационное тестирование</h1>
    <h2>Наша команда составила тест, который поможет вам найти ваше призвание</h2>

    <div className="quiztime">
      <p>15 вопросов</p>
      <p>~10 минут</p>
    </div>

    <div>
        <button onClick={() => setOpen(!isOpen)}>Начать</button>
      </div>
    
    </div>

      <div className={`quiz ${isOpen ? "quiz___active" : ""}`}>
        <div className="quizzes">
          <div className="quizzname"><h1>Профориентационное тестирование</h1><div className="btnsquiz"><VKShareButton title='поделиться' url={shareUrl}><span className='material-symbols-outlined' style={{paddingRight: 7}}>share</span></VKShareButton><span className='material-symbols-outlined' onClick={() => setOpen(!isOpen)}>close</span></div></div>
          <div className="quizcont">
          <Quiz />
           </div>
        </div>
      </div>


    <Footer />
    </div>
  )
}



