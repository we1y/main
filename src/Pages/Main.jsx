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

import Photo1 from '../assets/A5E60D96VOzgnmrS5TSR0MWZHgjbqdCpUMzDN7DakiCGyNp9JG0C9rAs5lhQJSFZ8GUDkNEODTUAOz0s682Iinq7LKNp6HEL.jpg'
import Forms from '../components/Forms'
import quest from '../assets/profile.png'
import Gallery from '../components/Gallery'



const images = [
  'https://source.unsplash.com/random/1920x1080',
  'https://source.unsplash.com/random/800x601',
  'https://source.unsplash.com/random/800x602',
  'https://source.unsplash.com/random/800x603',
  'https://source.unsplash.com/random/800x604',
  'https://source.unsplash.com/random/800x605',
  'https://source.unsplash.com/random/800x606',
  'https://source.unsplash.com/random/800x607',
  'https://source.unsplash.com/random/800x608',
  'https://source.unsplash.com/random/800x609',
];






export default function Main() {


  const [isOpen, setOpen] = useState(false);


  // const handleScroll = () => {
  //   window.scrollTo({
  //       top: 870,
  //       left: 0,
  //       behavior: 'smooth',
  //     });
  //   }



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
