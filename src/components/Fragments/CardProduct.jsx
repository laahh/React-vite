import React from "react";
import Button from "../Elements/Buttton/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="group border-gray-100/30 flex max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">{children}</div>;
};

const Header = (props) => {
  const { gambar } = props;
  return (
    <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
      <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={gambar} alt="product image" />
      <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src={gambar} alt="product image" />
    </a>
  );
};

const Body = (props) => {
  const { name, price } = props;
  return (
    <div className="mt-4 px-5 pb-5">
      <a href="#">
        <h5 className="text-xl tracking-tight text-white">{name.substring(0, 20)}...</h5>
      </a>
      <div className="mt-2 mb-2 flex items-center justify-between">
        <p>
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-sm text-white line-through">$699</span>
        </p>
      </div>
    </div>
  );
};

const Footer = (props) => {
  const { description, handleAddToCart, id } = props;
  return (
    <div className="px-5 pb-5">
      <div>
        <p className="text-white mb-3">{description.substring(0, 70)}</p>
      </div>
      <Button
        onClick={() => handleAddToCart(id)}
        className="hover:border-white flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
