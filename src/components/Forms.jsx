import React, { useState } from 'react'
import '../styles/forms.css'


export default function Forms() {



    const [selectedButton, setSelectedButton] = useState(1);

    const buttons = [
      { id: 1, label: 'Очная', text: 'Очная или дневная форма  обучения - форма обучения, которая строится на аудиторных занятиях в группах при непосредственном общении с преподавателем. Включает в себя лекции, семинары, практические занятия, лабораторные работы, отработку навыков на учебно-лабораторном оборудовании, а также самостоятельное обучение' },
      { id: 2, label: 'Заочная', text: 'Форма обучения предполагает посещение обучающимися занятий от двух до четырех раз в неделю и систематические аудиторные занятия (лекции, семинары, практические занятия и пр.) в течение всего учебного года' },
    ];



  return (
    <div className='formscont'>
        
        <div className="fortext">
        <h1>Формы обучения</h1>
        <p>Выберите формат, с которым ваще обучение будет более удобным </p>
        </div>
        <div className='formes'>
      <div className='formesbtn'>
        {buttons.map((button) => (
          <span key={button.id} onClick={() => setSelectedButton(button.id)} style={{backgroundColor: selectedButton === button.id ? "rgb(0,98,255)" : "white", color: selectedButton === button.id ? "white" : "black", borderRadius: '8px'}}>
            {button.label}
          </span>
        ))}
      </div>
      <div className='formestext'>
        {buttons.map((button) => (
          <p key={button.id} style={{ display: selectedButton === button.id ? 'block' : 'none'}}>
            {button.text}
          </p>
        ))}
      </div>
    </div>
    </div>
  )
}
