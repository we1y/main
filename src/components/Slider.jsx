import React, {  useRef } from 'react';
import Carousel from 'react-elastic-carousel';


import ph1 from '../assets/godaddy/6.png'
import ph2 from '../assets/godaddy/ambli.jpg'
import ph3 from '../assets/godaddy/logom.png'
import ph4 from '../assets/godaddy/5-1.png'



export default function Slider() {



  
    const items = [
      {id: 1, title: 'item #1', img: ph1},
      {id: 2, title: 'item #2', img: ph2},
      {id: 3, title: 'item #3', img: ph3},
      {id: 4, title: 'item #4', img: ph4},
  
    ]


    const itemsPerPage = 1
    const carouselRef = useRef(null);
    const totalPages = Math.ceil(items.length / itemsPerPage)
    let resetTimeout;


  
    

    
    return (

      <Carousel 
      ref={carouselRef}
      enableAutoPlay 
      autoPlaySpeed={2000} 
      pagination={true} 
      enableMouseSwipe={false} 
      showArrows={false}
      disableArrowsOnEnd={false}
      onNextEnd={({ index }) => {
        clearTimeout(resetTimeout)
        if (index + 1 === totalPages) {
           resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0) 
          }, 2000) 
        }
   }}
      >
        {items.map(items => <div key={items.id}><img src={items.img} alt="" style={{width: 250}}/></div>)}
      </Carousel>
    )
  }

