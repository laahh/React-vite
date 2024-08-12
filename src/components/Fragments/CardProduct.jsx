const CardProduct = (props) => {
  const { children } = props;
  return <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">{children}</div>;
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
        <h5 className="text-xl tracking-tight text-white">{name}</h5>
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
  const { description } = props;
  return (
    <div className="px-5 pb-5">
      <div>
        <p className="text-white mb-3">{description}</p>
      </div>
      <a
        href="#"
        className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2" // Mengubah stroke-width menjadi strokeWidth
        >
          <path
            strokeLinecap="round" // Mengubah stroke-linecap menjadi strokeLinecap
            strokeLinejoin="round" // Mengubah stroke-linejoin menjadi strokeLinejoin
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </a>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
