// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-sky-700">
      <div className="flex flex-rows">
        <Link href="/" className="mx-10 font-serif">
          <h4 className="text-white  text-3xl font-serif">Home</h4>
        </Link>
        <Link href="/about" className="mx-5">
          <p className="text-white text-3xl font-serif">About</p>
        </Link>
        <Link href="/stocklist" className="mx-5">
          <p className="text-white text-3xl font-serif">StockList</p>
        </Link>
        <Link href="/contact" className="mx-5">
          <p className="text-white text-3xl font-serif">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
