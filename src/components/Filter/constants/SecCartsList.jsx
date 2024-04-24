import { Link } from 'react-router-dom';
import SecCart from './SecCarts';

const SecCartsList = ({ secCartsList, searchTerm }) => {


    const refreshPage = () => {
        setTimeout(() => {
            window.location.reload();
        }, 100)
    }



    return (
        <div className='jej'>
            {secCartsList.map((secCart, id) => {
                return (
                    <Link className='lnk' to={`/specialty/` + secCart.id} onClick={refreshPage}>
                    <SecCart
                        img={secCart.img}
                        pr={secCart.pr}
                        ot={secCart.ot}
                    />
                    </Link>
                )
            })}
        </div>

    );

}

export default SecCartsList;