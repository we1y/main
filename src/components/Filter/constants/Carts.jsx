

const Cart = ({  ot, img }) => {




    return (
        
        <div className="cart">
            <img src={img} alt="" />
            <div className="prtext">{ot}</div>    
            <div className=""></div>
        </div>
       

    );

    
}

export default Cart;