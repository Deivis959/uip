import { Link } from 'react-router-dom';

function Product(props) {
  return (
    <div className='products'>
        <div className='product'>
            <img className='productImage' src={props.image}/>
            <h2 className='productName'>{props.name}</h2>
            <spam className='productPrice'>{props.price} $</spam>
            <Link to='https://api.whatsapp.com/message/BEMXBXWFQKBHA1?autoload=1&app_absent=0'>
                <h2 className='buyProduct'>Compralo Aquí</h2>
            </Link>
        </div>
    </div>
  );
}

export default Product;
