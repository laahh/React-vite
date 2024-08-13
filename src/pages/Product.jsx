import Button from "../components/Elements/Buttton/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { react, useState, useEffect } from "react";
import { getProducts } from "../services/product.service";

// data products
// const products = [
//   {
//     id: 1,
//     name: "Sepatu1",
//     price: 10.0,
//     image: "images/shoes.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: 2,
//     name: "Sepatu2",
//     price: 20.0,
//     image: "images/shoes.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: 3,
//     name: "Sepatu3",
//     price: 20.0,
//     image: "images/shoes.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

// mengambil email dari local storage
const email = localStorage.getItem("email");

const ProductPage = () => {
  // use state cart
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [products, setProduct] = useState([]);

  // useEffect Cart digunakan untuk menyimpan data keranjang belanja seperti id dan qty
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProduct(data);
    });
  }, []);

  // useEffect untuk menambahkan totalPrice dari chart
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      // menggunakan reduce untuk menambahkan totalPrice dari chart
      const sum = cart.reduce((accumulator, item) => {
        // menggunakan find untuk menemukan product berdasarkan id item
        const product = products.find((product) => product.id === item.id);
        // menggunakan accumulator untuk menambahkan totalPrice dari chart dengan product.price * item.qty
        return accumulator + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);
      // digunakan untuk menyimpan data keranjang ke local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // useState Cart digunakan untuk menyimpan data keranjang belanja seperti id dan qty
  const handleAddToCart = (id) => {
    // jika id item pada cart === id item yang diklik
    if (cart.find((item) => item.id === id)) {
      // maka setCart mengupdate data keranjang dengan menambahkan qty + 1 dari item yang sama dengan id item yang diklik di keranjang
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      // jika id item pada cart !== id item yang diklik maka setCart mengupdate data keranjang dengan menambahkan item baru
      // ...cart digunakan untuk menambahkan item baru ke keranjang
      // { ...item, qty: 1 } digunakan untuk menambahkan qty item baru ke keranjang
      //
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  // Menghitung total keseluruhan
  // const total = cart.reduce((accumulator, item) => {
  //   const product = products.find((product) => product.id === item.id);
  //   return accumulator + product.price * item.qty;
  // }, 0); // Mulai dengan total 0

  const handleLogout = () => {
    // remove local storage
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="images/shoes.jpg" alt="user photo" />
            </button>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{email}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Earnings
                  </a>
                </li>
                <Button type="submit" onClick={handleLogout}>
                  Logout
                </Button>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex justify-center mt-5 mx-5">
        <div className="flex gap-3 w-3/4 flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header gambar={product.image}></CardProduct.Header>
                <CardProduct.Body price={product.price} name={product.title} />
                <CardProduct.Footer id={product.id} handleAddToCart={handleAddToCart} description={product.description} />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4">
          <h3 className="text-black text-xl">Chart</h3>
          <table>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  // mengambil data product yang sama dengan id yang ada di cart
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr>
                      <td scope="col" className="px-6 py-3">
                        {product.title}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {product.price}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {item.qty}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {product.price * item.qty}
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td colSpan="3" className="px-6 py-3 text-right">
                  <strong>Total:</strong>
                </td>
                <td className="px-6 py-3">
                  <strong>{totalPrice}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
