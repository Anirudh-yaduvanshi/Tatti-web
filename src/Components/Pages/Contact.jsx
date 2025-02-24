import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center p-10 md:items-center h-screen bg-yellow-300">
      <div className="p-10  w-full   h-3/4 ">
        <form className="flex flex-col  gap-10 p-10 w-full">
          <input
            className="border-b-2 px-2 py-2 outline-none border-solid border-black"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            id="name"
          />
          <input
            className="border-b-2 px-2 py-2 outline-none border-solid border-black"
            type="email"
            name="email"
            id="email"
            placeholder="Enter a Valid E-mail"
          />
          <input
            className="border-b-2 px-2 py-4 outline-none border-solid border-black"
            type="text"
            name="subject"
            id="subject"
            placeholder="Elaborate your vision"
          />

          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="border-3  rounded-lg px-6 py-1 w-fit hover:text-yellow-300 hover:bg-black hover:font-semibold  border-solid border-black"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="px-10 w-full h-3/4 flex flex-col pt-20 gap-10  ">
        <h1 className="text-3xl w-fit mx-auto font-bold">CONTACT US</h1>

        <div className="md:flex hidden  justify-center mx-auto gap-4 p-3 w-1/2">
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
        <div className="w-fit text-center mx-auto">
          <p>For any queries, feel free to reach out to us</p>
          <p>Email: 123@example.com</p>
          <p>Phone: 1234567890</p>
        </div>
      </div>
    </div>
  );
}

export default Contact