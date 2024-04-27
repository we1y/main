import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/itempage.css'
import  { secData }  from '../components/Filter/constants/MOCK_DATA2'
import ScrollButton from '../components/ScrollButton'
import useScript from '../hooks/useScript'
import img from '../assets/asdadaaa.png'



const SpecialtyPage = () => {






const  { id } = useParams();
const infoToShow = secData.find((item) => item.id === Number(id));

useEffect(() => {
  const hasRefreshed = localStorage.getItem('hasRefreshed');

  if (!hasRefreshed) {
      localStorage.setItem('hasRefreshed', 'true');
      window.location.reload();
  } else {
    localStorage.removeItem('hasRefreshed');
  }
}, []);



useScript(infoToShow.vac)

  return (

    

    
    <div>

      <title>{infoToShow.pr}</title>
      
        <ScrollButton />
        <Header />
    

        <div className="hhg">

        <div className="ssil"><a href="/" className='atlk'>Главная</a><div className='strel'>/</div><a href="/navigator" className='atlk'>Навигатор профессий</a><div className='strel'>/</div> <a>{infoToShow.pr}</a></div>


        <div className="nameops">
        <img src={img} alt=""/>

        <div className="nmif">
              <h1>{infoToShow.pr}</h1>
              <p>{infoToShow.inf}</p>
          
              <div className="blockscont">
          <div>
            <h1>Форма оубчения</h1>
            <p>{infoToShow.form}</p>
            </div>
          <div>
            <h1>Срок обучения</h1>
            {infoToShow.time}
            </div>

            <div className='fills'>
            <h1>Филлиалы</h1>
            <p>{infoToShow.fil}</p>
            </div>
        </div>

        </div>

            </div>


        <div className='study'>
          <h1>Навыки, которые ты получишь</h1>
          <p>{infoToShow.skills}</p>
        </div>

      
        <div className="enroll">
            <h1>Как поступить?</h1>
            <ul>
              <li>Очно, во время приемной комиссии</li>
              <li>Позвонить: +7(498)568-48-20, +7(936)173-78-89</li>
            </ul>
          </div>

        <div className="mores">
          <div className="hh-script"></div>
          </div>


        </div>


    
        <Footer />
    </div>
  )
}

export default SpecialtyPage