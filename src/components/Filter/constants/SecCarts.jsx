const SecCart = ({  pr, img }) => {


    return (
        
        <div className="cart">
            <img src={img} alt="" />
            <div className="prtext">{pr}</div>    
        </div>
       

    );

    
}

export default SecCart;