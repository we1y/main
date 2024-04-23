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
        

        
        <div className="ip">


        <div className="ssil"><a href="/" className='atlk'>Главная</a><div className='strel'>&gt;</div><a href="/atlas" className='atlk'>Атлас профессий</a> <div className='strel'>&gt;</div><a>Отрасли</a> <div className='strel'>&gt;</div> <a>{infoToShow.ot}</a> </div>

        <div className="infcontn">


        <div className="opinf">

        <img src={infoToShow.iimg} alt="" /> 

        <div className="text">
        
        <h1>{infoToShow.ot}</h1>
        <p>{infoToShow.fil}</p> 
        
        <h1>Описание: </h1>
        <p>{infoToShow.inf}</p>

      

          
        

         
       
          
          



        
        {/* <button>Поступить</button> */}
        
        </div>

        </div>

        </div>

        </div>

        
    
        <Footer />
    </div>
  )
}

export default ItemPage