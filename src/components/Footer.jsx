import React from "react";

const lia = "hover:text-white cursor-pointer";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-green-100">
      <div className="container justify-around px-5 py-24 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-61 pr-2 flex-shrink-0  md:mx-0 mx-auto text-center md:text-left lg:justify-center  ">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-center text-green-600"
          >
            <img
              src="image.png"
              alt="logo"
              className="rounded-full"
              width={70}
              height={70}
            />
            <h1 className="ml-1 pl-6 text-6xl">Plant</h1>
          </a>
          <p className="mt-4 pl-4 text-sm text-gray-500">
            Live life cleaner by making Earth greener.
          </p>
        </div>
        <div className="flex  pl-14 lg:justify-center md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
          <div className="w-50 lg:text-start md: sm:text-center pl-20">
            <h2 className="text-white p-1 tracking-widest text-center mb-1 bg-[#51a642ac] rounded-3xl">
              CATEGORIES
            </h2>
            <hr />
            <nav className="list-none text-center gap-20">
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
