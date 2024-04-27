import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/itempage.css'
import  { data }  from '../components/Filter/constants/MOCK_DATA'
import ScrollButton from '../components/ScrollButton'
import img from '../assets/asdadaaa.png'





const ItemPage = () => {


const  { id } = useParams();
const infoToShow = data.find((item) => item.id === Number(id));


  return (

    <div>

      <title>{infoToShow.ot}</title>
      
        <ScrollButton />
        <Header />
        
        <div className="hhg">

        <div className="ssil"><a href="/" className='atlk'>Главная</a><div className='strel'>/</div><a href="/navigator" className='atlk'>Навигатор профессий</a><div className='strel'>/</div> <a>{infoToShow.ot}</a></div>


        <div className="nameops">
        <img src={img} alt=""/>

        <div className="nmif">
              <h1>{infoToShow.ot}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima, esse eaque sint sequi optio, aspernatur voluptatum exercitationem molestias maxime provident dolore aperiam perspiciatis, nisi recusandae molestiae! Consequatur, amet cupiditate!</p>
          
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