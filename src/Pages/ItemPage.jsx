import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/itempage.css'
import  { data }  from '../components/Filter/constants/MOCK_DATA'
import ScrollButton from '../components/ScrollButton'






const ItemPage = () => {


const  { id } = useParams();
const infoToShow = data.find((item) => item.id === Number(id));


  return (

    <div>

      <title>{infoToShow.ot}</title>
      
        <ScrollButton />
        <Header />
        
        <div className="hhg">

        <div className="ssil"><a href="/" className='atlk'>Главная</a><div className='strel'>/</div><a href="/navigator" className='atlk'>Навигатор профессий</a><div className='strel'>/</div><a>Отрасли</a><div className='strel'>/</div><a>{infoToShow.ot}</a></div>


        <div className="nameops">
        <img src={infoToShow.img} alt=""/>

        <div className="nmif">
              <h1>{infoToShow.ot}</h1>
              <p>{infoToShow.inf}</p>
          
              <div className="blockscont">
        </div>

        </div>

            </div>

            <div className="blocked">

            <div className="fits">
          <h1>Идеально подходит для тех, кто</h1>
          <p>{infoToShow.fits}</p>
        </div>

        <div className="default">


        <div className="enroll">
            <h1>Поступление</h1>
            <ul>
              <li>Очно, во время приемной комиссии</li>
              <li>Позвонить: +7 (498) 568-48-20, +7 (936) 173-78-89</li>
            </ul>
          </div>

        <div className='species'>
          <h1>Специальности</h1>
          <p>{infoToShow.species}</p>
        </div>

        
       

          </div>

        </div>



        </div>

        
    
        <Footer />
    </div>
  )
}

export default ItemPage