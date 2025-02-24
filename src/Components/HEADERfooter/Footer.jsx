import React from 'react'
import boxicons from 'boxicons';

const Footer = () => {
  return (
    <footer className="flex justify-center flex-col items-center h-max pt-6 bottom-0 w-full static  pb-2 bg-amber-500 text-black">
      <div className="flex justify-center gap-4 p-3 w-1/2">
        <a href="/" className="cursor-pointer  mx-3 ">
          <box-icon
            type="logo"
            className="hover:scale-150 duration-100 w-8 h-8   "
            name="facebook-circle"
          ></box-icon>
        </a>
        <a href="/" className="cursor-pointer mx-3 ">
          <box-icon
            type="logo"
            className="hover:scale-150 duration-100 w-8 h-8"
            name="twitter"
          ></box-icon>
        </a>
        <a href="/" className="cursor-pointer mx-3 ">
          <box-icon
            type="logo"
            className="hover:scale-150 duration-100 w-8 h-8"
            name="linkedin-square"
          ></box-icon>
        </a>
        <a href="/" className="cursor-pointer mx-3 ">
          <box-icon
            type="logo"
            className="hover:scale-150 duration-100 w-8 h-8"
            name="instagram-alt"
          ></box-icon>
        </a>
      </div>
      <p className="font-semibold">
        2025  &copy; only Routing. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer