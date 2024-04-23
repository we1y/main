import React, { useState, useEffect } from 'react'
import { data } from './constants/MOCK_DATA'
import { secData } from './constants/MOCK_DATA2.js';
import CartsList from './constants/CartsList';
import "../../styles/filterstyle.css"
import Slider from '../Slider';
import SecCartsList from './constants/SecCartsList.jsx';



const filterCarts = (searchText, listOfCarts) => {
  if (!searchText) {
    return listOfCarts;
  }
  
  return listOfCarts.filter(({pr, ot}) =>
    pr.toLowerCase().includes(searchText.toLowerCase() || ot.toLowerCase().includes(searchText.toLowerCase())
  ))
  

}

export default function Filter() {

  const [cartsList, setCartsList] = useState(data);
  const [secCartsList, setSecCartList] = useState(secData);
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCarts = filterCarts(searchTerm, data);
      const secFilteredCarts = filterCarts(searchTerm, secData);
      setCartsList(filteredCarts);
      setSecCartList(secFilteredCarts);
    }, 300);

    

    return () => clearTimeout(Debounce);
  }, [searchTerm]);


  return (
    <div className='mainatlas'>
      <div className='cartcont'>
        <div className="inj">
        <div className="searchtext">
          
        <h1>Мы поможем тебе определиться с профессией</h1>
        <p>27 специальностей в 6 филиалах – у нас ты точно найдешь свое место во взрослой жизни и получишь современное образование</p>
        {/* <i class="material-symbols-outlined">search</i> */}
        <input 
        placeholder='Поиск по специальностям и отраслям'
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        <div className="sliderr">
        <Slider />
        </div>
        </div>
        <h1 className='ss'>Отрасли</h1>
        <div className="l">
        <CartsList cartsList={cartsList} />
        </div>
        <h1 className='ss'>Специальности</h1>
        <div className="l">
        <SecCartsList secCartsList={secCartsList} />
        </div>
      </div>
    </div>
  )
}
