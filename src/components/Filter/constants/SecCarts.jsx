const SecCart = ({  pr, img, top, profess }) => {


    return (
        
        <div className="cart">
            <img src={img} alt="" />
            <div className="prtext">{pr}</div>    
            {top}
            {profess}
        </div>
       

    );

    
}

export default SecCart;