import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-[#4c8d62] body-font px-1 m-2 ">
      <div className="container flex justify-evenly  py-20 mx-auto md:items-center lg:items-start flex-wrap">
        <div className="w-64 md:mx-0 text-center md:text-left lg:text-start md:mt-0">
          <a href="/">
            <img
              src="image.png"
              alt="logo"
              
              className="rounded-full"
              width={120}
              height={150}
            />
          </a>
          <p className="mt-2 text-sm text-white">
            Live life cleaner by making Earth greener.
          </p>
        </div>

        <div className="flex flex-wrap md:text-start text-start md:mt-0 md:pl-40">
          <div className="px-50 w-full">
            <h2 className="text-black p-1 tracking-widest text-center mb-10 bg-green-600 rounded-xl">
              CATEGORIES
            </h2>
            <nav className="list-none">
              <li>
                <a className="hover:text-white cursor-pointer" href="/about">About</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer" href="/product">Product</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer" href="/contact">Contact Us</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer" href="/blog">Blog</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
