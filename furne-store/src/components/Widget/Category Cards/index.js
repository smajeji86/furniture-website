import React from "react";

export default function CategoryCard(props) {
  return (
    <div className="shadow hover:bg-gray-100">
      <div className="flex flex-col mt-4 md:mt-0">
        <div className="relative group flex justify-center items-center h-full w-full">
          <img
            className="object-center object-cover h-40 w-40 m-3 rounded"
            src={props.image}
            alt="furne-store"
          />
          <a
            href={`#${props.name}`}
            className="focus:outline-none text-center focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
          >
            {props.name}
          </a>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
        </div>
      </div>
    </div>
  );
}
