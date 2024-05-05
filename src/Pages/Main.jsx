import React  from 'react'
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
import Forms from '../components/Forms'
import quest from '../assets/profile.png'
import Gallery from '../components/Gallery'

import q from '../assets/collegephoto/1.jpeg'
import w from '../assets/collegephoto/2.jpeg'
import e from '../assets/collegephoto/3.jpeg'
import r from '../assets/collegephoto/4.jpeg'
import t from '../assets/collegephoto/5.jpeg'
import y from '../assets/collegephoto/6.jpeg'
import u from '../assets/collegephoto/7.jpeg'
import i from '../assets/collegephoto/8.jpeg'
import o from '../assets/collegephoto/9.jpeg'
import p from '../assets/collegephoto/10.jpeg'
import a from '../assets/collegephoto/11.jpeg'
import s from '../assets/collegephoto/12.jpeg'
import d from '../assets/collegephoto/13.jpeg'
import q2 from '../assets/collegephoto/14.jpeg'
import w2 from '../assets/collegephoto/15.jpeg'
import e2 from '../assets/collegephoto/16.jpeg'
import r2 from '../assets/collegephoto/17.jpeg'
import t2 from '../assets/collegephoto/18.jpeg'
import y2 from '../assets/collegephoto/19.jpeg'
import u2 from '../assets/collegephoto/20.jpeg'
import i2 from '../assets/collegephoto/21.jpeg'



const images = [
  q,
  w,
  e,
  r,
  t,
  y,
  u,
  i,
  o,
  p,
  a,
  s,
  d,
  q2,
  w2,
  e2,
  r2,
  t2,
  y2,
  u2,
  i2,

];






export default function Main() {


  const [isOpen, setOpen] = useState(false);

    const shareUrl = 'atlas.krtsc.ru'

  


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
      
      <div className="collegeinfo">
        <div className="collegetext">
        <h1>
          Профессиональное образование в Московской области
          </h1>
          <p>Различные направления подготовки: от технологий до экономики и управления,
 современные лаборатории и оборудование для практических занятий, опытные преподаватели
  с индустриальным опытом, широкие возможности для стажировок и трудоустройства,
   а также комфортные условия для обучения и отдыха</p>
   </div>
   <div className="collegeimg">
    <img src={quest} width={200} />
   </div>
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

      <Gallery images={images}/>
      
      </div>

    </div>
    <div className='map' style={{marginBottom: -5}}>   
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A816055aac504fea416c64dd04fdcf7341cf0130315a03c3f80ae23706ea2d375&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
    </div>
    
    <Footer />
    </>
  )
}
