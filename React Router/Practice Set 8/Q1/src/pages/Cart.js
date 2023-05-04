import { products } from "../api/fakefetch";
export const Cart = () => {
  const productData = products.find((product) => product.id === 2);

  console.log(productData);
  console.log(products);

  return (
    <div>
      <h1>My Cart</h1>
      <p>Name: {productData.name}</p>
      <p>Descriptipn: {productData.description}</p>
      <p>Quantity: {productData.quantity}</p>
      <p>Category: {productData.category}</p>
      <p>Brand: {productData.brand}</p>
    </div>
  );
};
