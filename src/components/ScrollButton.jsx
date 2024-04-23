import React, { useState } from 'react'
import '../styles/scrollbtn.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'




export default function ScrollButton() {


    const [visible, setVisible] = useState(false) 

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
      }; 

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }


    window.addEventListener('scroll', toggleVisible); 


    

        return (

            


            <div className='scrb'>
                <Tooltip id="my-tooltip" className='tooltip'/>
                
                <button style={{display: visible ? 'inline' : 'none'}} onClick={handleScroll} data-tooltip-id="my-tooltip" data-tooltip-content="Вернуться наверх">
                    <span className="material-symbols-outlined">arrow_upward</span>
                    </button>
                    
            </div>
        )
    



  

}
