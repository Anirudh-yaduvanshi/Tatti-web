import React from "react";

const Home = () => {
  return (
    <>
      {/* yellow landig page */}
      <div className="  gap-4  p-10  h-screen bg-yellow-300">
        {/* logo + likha hua */}
        <div className="w-full text-center">
          <div className="flex flex-col  md:flex-row gap-1 mt-5 md:mx-auto md:w-fit w-full md:h-1/4 h-fit ">
            <div className="md:flex md:justify-center md:w-fit  md:items-center   ">
              <img
                className="md:w-40 w-30 mx-auto  "
                src="https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-a-letter-style-png-image_6499118.png"
                height={20}
              />
            </div>

            <div className="md:flex md:flex-col md:justify-center w-full md:items-center md:border-l-2  border-dotted border-gray-800 ">
              <p className="md:text-6xl text-3xl text-black font-semibold">
                STRATEGY
              </p>
              <p className="md:text-6xl text-3xl  text-black font-semibold">
                ACTIVIST
              </p>
            </div>
          </div>
        </div>
        {/* likha hua para */}
        <div className="m-5 ">
          <div className="flex flex-col items-center h-1/4 mx-auto w-fit">
            <p className="md:text-3xl text-4xl text-black font-thin mt-5 font-serif">
              HELPING BUSSINESS TOTHRIVE & SURVIVE
            </p>
            <p className="md:text-3xl text-4xl text-black font-thin md:mt-5 font-serif">
              IN THE AGE OF DISTRUPTION BY
            </p>
            <p className="text-3xl font-bold text-black md:mt-5 font-serif">
              PUTTING THE CUSTOMER FIRST
            </p>
            <button className="bg-black text-2xl mx-auto mt-15  text-yellow-300 border-2 border-solid px-8 py-1 rounded-3xl cursor-pointer hover:bg-yellow-300 hover:text-black">
              FIND OUT MORE
            </button>
          </div>
        </div>
        {/* niche ka boxicon */}
        <div className="w-full hidden md:block h-10  absolute bottom-0 text-center">
          <box-icon
            className="w-1/4 hover:animate-ping "
            name="down-arrow-alt"
          ></box-icon>
        </div>
      </div>

      {/* black following page */}
      <div className="flex flex-col  gap-5 p-15 h-fit bg-black">
        <div className="w-full text-4xl text-center p-10 text-white">
          <h1 className="mx-auto w-fit p-6"> OUR EXPERIENCE</h1>
          <p className=" h-1 bg-amber-300"></p>
        </div>
        <p className="text-white hidden md:block text-center ">
          we have worked with a large number of industries some of them are :{" "}
        </p>
        <p className="text-white md:hidden text-center ">
          we have worked with :{" "}
        </p>
        <div className="flex flex-wrap gap-5 md:mt-10 justify-center">
          <div className="rounded-lg overflow-hidden h-40">
            <img
              src="https://th.bing.com/th/id/OIP.oahh4ebMzGubwOo6-73QqwHaEe?w=1536&h=930&rs=1&pid=ImgDetMain"
              className="h-40 bg-center bg-contain"
            />
          </div>

          <div className="rounded-lg overflow-hidden h-40">
            <img
              src="https://iconape.com/wp-content/png_logo_vector/american-century-53940.png"
              className="h-40 bg-center bg-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-40">
            <img
              src="https://th.bing.com/th/id/OIP.8M5MbafD3KR_hB-g8pff2QAAAA?w=400&h=489&rs=1&pid=ImgDetMain"
              className="h-40 bg-center bg-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-40">
            <img
              src="https://th.bing.com/th/id/OIP.978cQPkkPH-GxoS4BCP8MAAAAA?rs=1&pid=ImgDetMain"
              className="h-40 bg-center bg-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-40">
            <img
              src="https://th.bing.com/th/id/OIP.OKmtUFaEhWwMLcFkbnVRoQHaGj?rs=1&pid=ImgDetMain"
              className="h-40 bg-center bg-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-40">
            <img
              src="https://th.bing.com/th/id/OIP.8Au800Hb3gTZqU66xvJ3nwHaEK?rs=1&pid=ImgDetMain"
              className="h-40 bg-center bg-contain"
            />
          </div>
        </div>

        <div className="w-full md:mt-10 text-center">
          <button className=" hover:bg-black text-2xl mx-auto mt-15 duration-300  hover:text-yellow-300 border-2 border-solid px-8 py-1 rounded-3xl cursor-pointer bg-yellow-300 text-black">
            VIEW MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
