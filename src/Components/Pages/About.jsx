import React from "react";

const About = () => {
  return (
    <div className="flex  flex-col  items-center h-fit bg-yellow-300">
      <div className="w-full m-10 text-center mb-15">
        <h1 className=" mx-auto text-4xl text-black font-bold underline p-2">
          ABOUT US
        </h1>
      </div>

      <div className="flex w-3/4  gap-2 md:flex-row flex-col">
        <div className="w-full p-4 ">
          <h1 className=" mx-auto w-fit text-4xl text-black font-semibold underline p-2">
            OUR TEAM
          </h1>
          <div className="text-center text-balance font-normal font-serif p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            suscipit nobis porro voluptas quo explicabo totam ratione
            consequuntur dolorum, praesentium repudiandae ullam dolores.
            Voluptas corrupti, debitis totam harum non sit ea quibusdam nisi
            <div className="w-full mt-15">
              <button className="border-3  rounded-lg px-6 py-1 w-fit hover:text-yellow-300 hover:bg-black hover:font-semibold  border-solid border-black">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-4 ">
          <h1 className=" w-fit mx-auto text-4xl text-black underline p-2 font-semibold ">
            OUR ACHIEVEMENTS
          </h1>
          <div className="text-center text-balance font-normal font-serif p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A tempora
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A tempora
            eveniet dolores eius placeat voluptatibus minima aperiam, unde aut
            minus atque, voluptate autem illum? Laborum officiis accusantium
            minus atque, voluptate autem illum? Laborum officiis accusantium
            facilis doloremque, a natus nesciunt assumenda quis, beatae del
            <div className="w-full mt-15">
              <button className="border-3  rounded-lg px-6 py-1 w-fit hover:text-yellow-300 hover:bg-black hover:font-semibold  border-solid border-black">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
