import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS =[
  {
    id:'p1',
    name:'Product 1',
    price:5,
    description:'This is a first product - amazing!',
  },
  {
    id:'p2',
    name:'Product 2',
    price:10,
    description:'This is a second product - amazing!',
  },
  {
    id:'p3',
    name:'Product 3',
    price:20,
    description:'This is a third product - amazing!',
  }
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(p=><ProductItem key={p.id} name={p.name} description={p.description} price={p.price} id ={p.id}></ProductItem>)}
      </ul>
    </section>
  );
};

export default Products;
