import React from "react";

const lia = "hover:text-green-900 cursor-pointer";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-green-100 sm:justify-center">
      <div className="container px-20 py-24 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-auto flex-shrink-0  md:mx-0 mx-auto text-center md:text-left lg:justify-center  ">
          <a
            href="/"
            className="flex text-green-500 justify-center"
          >
            <img
              src="image.png"
              alt="logo"
              className="rounded-full"
              width={60}
              height={60}
            />
            <h1 className="pl-3 mt-3 text-4xl">Plant</h1>
          </a>
          <p className="mt-5 pl-5 text-sm text-gray-500">
            Live life cleaner by making Earth greener.
          </p>
        </div>
        <div className="flex p-auto lg:justify-start md:p-auto -mb-10 md:mt-0 m-auto md:text-left">
          <div className="w-50 lg:text-start md:text-start sm:text-center ">
            <h2 className="text-green-500 p-auto tracking-widest text-2xl m-1">
              CATEGORIES
            </h2>
            <nav className="list-none text-center gap-10">
              <li>
                <a className={lia} href="/about">
                  About
                </a>
              </li>
              <li>
                <a className={lia} href="/product">
                  Product
                </a>
              </li>
              <li>
                <a className={lia} href="/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className={lia} href="/blog">
                  Blog
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
