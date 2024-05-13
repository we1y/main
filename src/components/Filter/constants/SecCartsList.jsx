import { Link } from 'react-router-dom';
import SecCart from './SecCarts';

const SecCartsList = ({ secCartsList, searchTerm }) => {


    return (
        <div className='jej'>
            {secCartsList.map((secCart, id) => {
                return (
                    <Link className='lnk' to={`/specialty/` + secCart.id}>
                    <SecCart
                        img={secCart.img}
                        pr={secCart.pr}
                        ot={secCart.ot}
                        top={secCart.top}
                    />
                    </Link>
                )
            })}
        </div>

    );

}

export default SecCartsList;