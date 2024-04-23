import React, {  useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import Photo from '../assets/findir.svg'

export default function Slider() {



  
    const items = [
      {id: 1, title: 'item #1', img: Photo},
      {id: 2, title: 'item #2', img: Photo},
      {id: 3, title: 'item #3', img: Photo},
      {id: 4, title: 'item #4', img: Photo},
      {id: 5, title: 'item #5', img: Photo}
    ]


    const itemsPerPage = 1
    const carouselRef = useRef(null);
    const totalPages = Math.ceil(items.length / itemsPerPage)
    let resetTimeout;


  
    

    
    return (

      <Carousel 
      ref={carouselRef}
      enableAutoPlay 
      autoPlaySpeed={7000} 
      pagination={true} 
      enableMouseSwipe={false} 
      showArrows={false}
      disableArrowsOnEnd={false}
      onNextEnd={({ index }) => {
        clearTimeout(resetTimeout)
        if (index + 1 === totalPages) {
           resetTimeout = setTimeout(() => {
              // carouselRef.current.goTo(0) // багнутая хуета
          }, 7000) 
        }
   }}
      >
        {items.map(item => <div key={item.id}><img src={item.img} alt="" /></div>)}
      </Carousel>
    )
  }

