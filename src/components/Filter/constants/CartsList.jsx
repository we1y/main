import { Link } from 'react-router-dom';
import Cart from './Carts';

const CartsList = ({ cartsList, searchTerm }) => {
    return (
        <div className='jej'>
            {cartsList.map((cart, id) => {
                return (
                    <Link className='lnk' to={`/industry/` + cart.id}>
                    <Cart
                        img={cart.img}
                        pr={cart.pr}
                        ot={cart.ot}
                    />
                    </Link>
                )
            })}
        </div>

    );

}

export default CartsList;