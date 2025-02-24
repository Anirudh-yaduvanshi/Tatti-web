import React from "react";
// import { Card } from 'react-boot strap';
import Card from "../Card";

const Services = () => {
  return (
    <>
    <div className=" p-10 flex flex-col w-full h-full bg-black">
      <div className="w-full m-10 text-center">
        <h1 className=" mx-auto text-4xl text-yellow-300 underline p-2">
          OUR SERVICES
        </h1>
      </div>

      <div className="grid grid-cols-1 w-full justify-center items-center mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
        <div className="flex item-center justify-center">
          <Card
            title="STRATEGIC STORYTELLING"
            image="https://upload.wikimedia.org/wikipedia/commons/e/e5/Book_PNG2116.png"
            description="The story of the story of the story of the lorem ipsum dolor sit amet, consectetur adipiscing elit. The story of the story of the story of the lorem ipsum dolor sit amet, consectetur adipiscing eliThe story of the story of the story of the lorem ipsum dolor sit amet, consectetur adipiscing eli"
          />
        </div>
        <div className="flex item-center justify-center">
          <Card
            title="EXPERIENCE DESIGN"
            image="https://static.vecteezy.com/system/resources/previews/022/448/543/original/illustration-of-colorful-pencil-with-eraser-free-png.png"
            description="The story of the story of the story of the lorem ipsum dolor sit amet, consectetur adipiscing elit. The story of the story of the story of the lorem ipsum dolor sit amet, consectetur adipiscing eliThe story of the story of the story of the lorem ipsum dolor sit amet, consectetur adipiscing eli"
          />
        </div>
        <div className="flex item-center justify-center">
          <Card
            title="VOICE OF THE CUSTOMER"
            image="https://cdn-icons-png.flaticon.com/512/10257/10257973.png"
            description="The story of the story of the story of the lorem ipsum dolor sit amet, consectetur adipiscing elit. The story of the story of the story of the lorem ipsum dolor sit amet, consectetur adipiscing eliThe story of the story of the story of the lorem ipsum dolor sit amet, consectetur adipiscing eli"
          />
        </div>
        </div >
        

<button className="px-4 py-1 text-center hover:bg-yellow-300 hover:text-black hover:font-semibold duration-200  rounded-3xl border-2 border-yellow-300 text-yellow-300 border-solid mx-auto "> learn more</button>
    </div>

    
    </>
  );
};

export default Services;
