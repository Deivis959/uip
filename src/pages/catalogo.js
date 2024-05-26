import '../css/catalogo.css'
import Product from '../components/product';

function Catalogo() {
  return (
    <div>
        <nav>
          <h1>CATALOGO</h1>
        </nav>
        <div className='products'>
          <Product name="Product 1" price="1" image="https://i0.wp.com/iguanasmoke.com/wp-content/uploads/2023/11/FBKK-2-webp.webp?fit=500%2C500&ssl=1" />
          <Product name="Product 2" price="2" image="https://i0.wp.com/iguanasmoke.com/wp-content/uploads/2023/08/Vape-Banana-Ice-Pocket.webp?w=500&ssl=1" />
          <Product name="Product 3" price="3" image="https://i0.wp.com/iguanasmoke.com/wp-content/uploads/2023/08/Vape-Gorilla-Glue-Pocket.webp?w=500&ssl=1" />
          <Product name="Product 4" price="4" image="https://i0.wp.com/iguanasmoke.com/wp-content/uploads/2023/08/Vape-Lemon-Haze-Pocket.webp?w=500&ssl=1" />
          <Product name="Product 5" price="5" image="https://i0.wp.com/iguanasmoke.com/wp-content/uploads/2022/10/Bolsa-pop-corn.webp?w=500&ssl=1" />
        </div>
    </div>
  );
}

export default Catalogo;
