import React, {  useRef } from 'react';
import Carousel from 'react-elastic-carousel';


import ph1 from '../assets/godaddy/6.png'
import ph2 from '../assets/godaddy/1280px-KMZ_logo.svg.png'
import ph3 from '../assets/godaddy/5-1.png'
import ph4 from '../assets/godaddy/55bb89bb-ab6f-4c0a-80dc-3c00d2750991.png'
import ph5 from '../assets/godaddy/eb978114-bdf5-4ed1-8e6f-6cc134379659.png'



export default function Slider() {



  
    const items = [
      {id: 1, title: 'item #1', img: ph1},
      {id: 2, title: 'item #2', img: ph2},
      {id: 3, title: 'item #3', img: ph3},
      {id: 4, title: 'item #3', img: ph4},
      {id: 5, title: 'item #3', img: ph5},
  
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

