import Button from "../components/Elements/Buttton/Button";
import CardProduct from "../components/Fragments/CardProduct";

// data Products
const Products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.0,
    image: "images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20.0,
    image: "images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30.0,
    image: "images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40.0,
    image: "images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ProductPage = () => {
  return (
    <>
      <div className="mt-5 mx-5">
        <div className="flex gap-4">
          {Products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header gambar={product.image}></CardProduct.Header>
              <CardProduct.Body price={product.price} name={product.name} />
              <CardProduct.Footer description={product.description} />
            </CardProduct>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
