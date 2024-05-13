const SecCart = ({  pr, img, top }) => {


    return (
        
        <div className="cart">
            <img src={img} alt="" />
            <div className="prtext">{pr}</div>    
            {top}
        </div>
       

    );

    
}

export default SecCart;