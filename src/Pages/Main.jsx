import React, { useEffect, useRef, useCallback } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/main.css'
import ScrollButton from '../components/ScrollButton'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import ContextMenuButton from '../components/ContextMenuButton'
import { useState } from 'react'
import diplom from "../assets/diplom_img2.jpg"
import { VKShareButton } from 'react-share'
import Gallery from "react-photo-gallery";

import Photo1 from '../assets/A5E60D96VOzgnmrS5TSR0MWZHgjbqdCpUMzDN7DakiCGyNp9JG0C9rAs5lhQJSFZ8GUDkNEODTUAOz0s682Iinq7LKNp6HEL.jpg'
import Forms from '../components/Forms'








const forms = [
  {form: 'ОЧНАЯ',
   opis: 'Очная или дневная форма  обучения - форма обучения, которая строится на аудиторных занятиях в группах при непосредственном общении с преподавателем. Включает в себя лекции, семинары, практические занятия, лабораторные работы, отработку навыков на учебно-лабораторном оборудовании, а также самостоятельное обучение',
   btn: '/och'
  },
  {form: 'ЗАОЧНАЯ',
   opis: 'На первом этапе обучающийся осваивает базовые знания, умения, компетенции путем изучения учебно-методической литературы и иных информационных ресурсов (установочная сессия), на втором - преподаватель проводит проверку освоенного обучающимся материала. Эти этапы, как правило, определяются в соответствии с графиком учебного процесса образовательной программы',
   btn: '/zaoch'
  },
  {form: 'ОЧНО-ЗАОЧНАЯ',
   opis: 'Форма обучения предполагает посещение обучающимися занятий от двух до четырех раз в неделю и систематические аудиторные занятия (лекции, семинары, практические занятия и пр.) в течение всего учебного года',
   btn: '/och-zaoch'
  }
]






export default function Main() {


  const [isOpen, setOpen] = useState(false);


  const handleScroll = () => {
    window.scrollTo({
        top: 870,
        left: 0,
        behavior: 'smooth',
      });
    }

    const shareUrl = 'atlas.krtsc.ru'

    const photos = [
      {
        src: Photo1,
        width: 4,
        height: 1
      },
      {
        src: Photo1,
        width: 2,
        height: 1
      },
      {
        src: Photo1,
        width: 3,
        height: 1
      },
    ]

    
  


  return (
    <>
    <title>Главная</title>
    <ContextMenuButton />
    <ScrollButton />
    <Header />
    
    <div className='mainsss'>
    <div className="items">
    <div className="otkr">
    <Tooltip id="my-tooltip-click" events={['click']} />
    <Tooltip id="my-dtooltip" className='tooltip'/>
      <h1>Мы обязательно поможем тебе с выбором</h1>
      <p>Быстрый и удобный сервис для поиска специальности</p>
      <div className="clpbtns">
      <Link to='/navigator'>Навигатор профессий</Link>
      <VKShareButton url={shareUrl} title="Лучший сервис по подбору профессии" style={{marginLeft: 20, color: '#262626'}} data-tooltip-id="my-dtooltip" data-tooltip-content='Поделиться'><span className='material-symbols-outlined'>share</span></VKShareButton>
      </div>
      </div>
      {/* <div className="bacs">
        <div className="forms">
        
        <h1>ФОРМА ОБУЧЕНИЯ</h1>
        <div className='formcont'>

        <Tooltip id="my-sectooltip" className='tooltip'/>
          
          {forms.map((forms) => (
            
            <Link style={{textDecoration:"none", margin: 10}} to={forms.btn} data-tooltip-id="my-sectooltip" data-tooltip-content="Подробнее">
            <div className='fform'>{forms.form}<div className='fopis'>{forms.opis}</div></div>
            </Link>
          ))}
        </div>
        </div>
      </div> */}
      
      <div className="collegeinfo">
        <h1>
          
          Профессиональное образование в Московской области! 
          </h1>
          <p>Различные направления подготовки: от технологий до экономики и управления,
 современные лаборатории и оборудование для практических занятий, опытные преподаватели
  с индустриальным опытом, широкие возможности для стажировок и трудоустройства,
   а также комфортные условия для обучения и отдыха.</p>
      </div>
      <Forms />
      <div className="diplom">
        <div onClick={() => setOpen(!isOpen)} className={`dipimg ${isOpen ? "dipimg__active" : ""}`}><img src={diplom} alt="" /><span className='material-symbols-outlined' onClick={() => setOpen(!isOpen)}>close</span></div>
        <div className="diplominfo">
      <span class="material-symbols-outlined" style={{fontSize: 50, color: 'black'}}>article</span>
        <h1>ВАШ БУДУЩИЙ ДИПЛОМ</h1>
        <p>ГОСУДАРСТВЕННЫЙ ДИПЛОМ О СРЕДНЕМ ПРОФЕССИОНАЛЬНОМ ОБРАЗОВАНИИ</p>
        <button onClick={() => setOpen(!isOpen)}>Подробнее</button>
        </div>

      </div>

  
      
      </div>

    </div>
    <div className='map' style={{marginBottom: -5}}>   
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A816055aac504fea416c64dd04fdcf7341cf0130315a03c3f80ae23706ea2d375&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
    </div>
    
    <Footer />
    </>
  )
}
