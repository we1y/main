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
        top: 880,
        behavior: 'smooth'
      });
}

const ScrollToThird = () => {
    window.scrollTo({
        top: 1200,
        behavior: 'smooth'
      });
}

const ScrollToFourth = () => {
    window.scrollTo({
        top: 1600,
        behavior: 'smooth'
      });
}

const ScrollToFifth = () => {
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
                        <li className="menu__item" onClick={ScrollToFirst}>Атлас профессий</li>
                        <li className="menu__item" onClick={ScrollToSecond} >Форма обучения</li>
                        <li className="menu__item" onClick={ScrollToThird}>Диплом</li>
                        <li className="menu__item" onClick={ScrollToFourth}>Отзывы</li>
                        <li className="menu__item" onClick={ScrollToFifth}>Наши филиалы</li>
                    </nav>
    </div>
  )
}
