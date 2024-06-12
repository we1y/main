import React, { useState } from 'react'
import '../styles/contextmenubutton.css'
import { Tooltip } from 'react-tooltip'



export default function ContextMenuButton() {

const [isOpen, setOpen] = useState(false);




const ScrollToFirst = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}

const ScrollToSecond = () => {
    window.scrollTo({
        top: 200,
        behavior: 'smooth'
      });
}

const ScrollToThird = () => {
    window.scrollTo({
        top: 500,
        behavior: 'smooth'
      });
}

const ScrollToFourth = () => {
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
      });
}

const ScrollToFifth = () => {
    window.scrollTo({
        top: 1100,
        behavior: 'smooth'
      });
}

const ScrollToSix = () => {
  window.scrollTo({
      top: 1400,
      behavior: 'smooth'
    });
}

const ScrollToSeven = () => {
  window.scrollTo({
      top: 2000,
      behavior: 'smooth'
    });
}


  return (

    
    <div className="conxbtn">

        <Tooltip id="my-tooltipthr" className='tooltip'></Tooltip>
        <button onClick={() => setOpen(!isOpen)} data-tooltip-id="my-tooltipthr" data-tooltip-content="Навигация">
                    <span className="material-symbols-outlined">menu</span>
                    </button>
                    <nav className={`menu__list ${isOpen ? "menu__active" : ""}`}>
                        <li className="menu__item" onClick={ScrollToFirst}>Навигатор профессий</li>
                        <li className="menu__item" onClick={ScrollToSecond}>Виртуальный помощник</li>
                        <li className="menu__item" onClick={ScrollToThird} >Формы обучения</li>
                        <li className="menu__item" onClick={ScrollToFourth}>Диплом</li>
                        <li className="menu__item" onClick={ScrollToFifth}>Фотогалерея</li>
                        <li className="menu__item" onClick={ScrollToSix}>Партнеры</li>
                        <li className="menu__item" onClick={ScrollToSeven}>Наши филиалы</li>
                    </nav>
    </div>
  )
}
