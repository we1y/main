import React, { useState, useEffect } from 'react'
import { data } from './constants/MOCK_DATA'
import { secData } from './constants/MOCK_DATA2.js';
import CartsList from './constants/CartsList';
import "../../styles/filterstyle.css"
import Slider from '../Slider';
import SecCartsList from './constants/SecCartsList.jsx';
import { CgWorkAlt } from 'react-icons/cg';
import { MdWorkspacesOutline } from 'react-icons/md';
import $ from 'jquery';




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
  const [isOpen, setIsOpen] = useState('');
  const [secIsOpen, setSecIsOpen] = useState('');



  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCarts = filterCarts(searchTerm, data);
      const secFilteredCarts = filterCarts(searchTerm, secData);
      setCartsList(filteredCarts);
      setSecCartList(secFilteredCarts);
    }, 300);


    

    return () => clearTimeout(Debounce);
  }, [searchTerm]);


  const visib = () => {

    if(secIsOpen) {

      setSecIsOpen(!isOpen)
      setIsOpen(!isOpen)

    }
 }

 const secvisib = () => {

  if(!isOpen) {
    setIsOpen(!isOpen)
    setSecIsOpen(!secIsOpen)
  }

  
}

var footer = $('.footgr'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		footer.addClass('out');
	} else {
		footer.removeClass('out');
	}
	scrollPrev = scrolled;
});


  return (
    <div className='mainatlas'>
      <div className='cartcont'>
        <div className="inj">
        <div className="searchtext">
          
        <h1>Мы поможем тебе определиться с профессией</h1>
        <p>25 специальностей в 6 филиалах – у нас ты точно найдешь свое место во взрослой жизни и получишь современное образование</p>
        <input 
        placeholder='Поиск по специальностям и отраслям'
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        <div className="sliderr">
          {/* <h1>При поддержке:</h1> */}
        <Slider />
        </div>
        </div>
        <h1 className='ss'>Отрасли</h1>
        <div className={`d ${isOpen ? "d___active" : ""}`}>
        <CartsList cartsList={cartsList}/>
        </div>
        <h1 className='ss'>Специальности</h1>
        <div className={`l ${secIsOpen ? "l___active" : ""}`}>
        <SecCartsList secCartsList={secCartsList} />
        </div>
      </div>
      <footer className='footgr'>
        <div className="mobf">
        <a className={`af ${!isOpen ? "af___active" : ""}`} onClick={visib}><MdWorkspacesOutline/><p>Отрасли</p></a>
        <a className={`af ${secIsOpen ? "af___active" : ""}`} onClick={secvisib}><CgWorkAlt /><p>Специальности</p></a>
        </div>
    </footer>
    </div>
  )
}
