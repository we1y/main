import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/itempage.css'
import  { secData }  from '../components/Filter/constants/MOCK_DATA2'
import ScrollButton from '../components/ScrollButton'
import useScript from '../hooks/useScript'




const SpecialtyPage = () => {





const  { id } = useParams();
const infoToShow = secData.find((item) => item.id === Number(id));



// useScript(infoToShow.vac)

  return (

    

    
    <div>

      <title>{infoToShow.pr}</title>
      
        <ScrollButton />
        <Header />
        

        
        <div className="ip">


        <div className="ssil"><a href="/" className='atlk'>Главная</a><div className='strel'>&gt;</div><a href="/atlas" className='atlk'>Атлас профессий</a> <div className='strel'>&gt;</div> <a>Специальности</a> <div className='strel'>&gt;</div> <a>{infoToShow.pr}</a></div>

        <div className="infcontn">


        <div className="opinf">

        <img src={infoToShow.iimg} alt="" /> 

        <div className="text">

          
        <h1>{infoToShow.pr}</h1>

        
        
        <p>{infoToShow.inf}</p>

        <h1>Ты получишь навыки:</h1>

        <p>{infoToShow.skills}</p>

        {/* <div className="hh-script"></div> */}

      


        
        {/* <button>Поступить</button> */}
        
        </div>

        </div>

        </div>

        </div>

        
    
        <Footer />
    </div>
  )
}

export default SpecialtyPage