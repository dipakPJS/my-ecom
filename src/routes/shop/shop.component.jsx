import { useContext } from 'react';


import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import "./shop.styles.scss"

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {/* {
        products.map((product) => {
          return (
          <ProductCard key={product.id} product={product} />
        )})
      } */}
      <h2>Hello this is shop page</h2>
    </div>
  );
};

export default Shop;