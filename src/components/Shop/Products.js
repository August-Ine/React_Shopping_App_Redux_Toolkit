import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Product1",
    price: 15,
    description: "This is product1"
  },
  {
    id: "p2",
    title: "Product2",
    price: 5,
    description: "This is product2"
  },
  {
    id: "p3",
    title: "Product3",
    price: 10,
    description: "This is product3"
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
