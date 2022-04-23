import React from "react";
import instance from "../../../axios.js";
import Fade from "react-reveal/Fade";

export default class CategoryItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Store_items: [],
      popup_active: "hidden"
    };
    instance
      .post("/furne-store-items", {
        store_type: props.name
      })
      .then((res) => {
        this.setState({
          Store_items: res.data.Result
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className=" 2xl:container 2xl:mx-auto">
        <div className=" bg-gray-50 text-start lg:py-10 md:py-8 py-6">
          <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
            Realted to {this.props.name}
          </p>
        </div>
        <div className=" py-6 lg:px-20 md:px-6 px-4">
          <p className=" font-normal text-sm leading-3 text-gray-600 ">
            Home / Category / {this.props.name}
          </p>
          <hr className=" w-full bg-gray-200 my-6" />

          <div className=" flex justify-between items-center">
            <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
              Showing {this.state.Store_items.length || 0} products
            </p>
          </div>

          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            {this.state.Store_items.map(function (name, index) {
              const Insert_into_cart = (img, name, stname, price) => {
                instance
                  .post("/insert-cart", {
                    UserId: localStorage.getItem("furne-store_gid"),
                    Category: name,
                    StoreName: stname,
                    Name: name,
                    Price: price,
                    Image: img
                  })
                  .then((res) => {
                    alert("added to cart");
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              };
              return (
                <Fade center>
                  <div>
                    <div className="relative group">
                      <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                      <img
                        className=" w-full"
                        src={name.Image}
                        alt="furne-store items"
                      />
                      <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                        <button
                          onClick={() =>
                            Insert_into_cart(
                              name.Image,
                              name.Name,
                              name.StoreName,
                              name.Price
                            )
                          }
                          className=" font-medium text-base leading-4 text-white bg-red-600 py-3 w-full flex items-center justify-center rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Add to bag
                        </button>
                      </div>
                    </div>
                    <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                      {name.Name}
                    </p>
                    <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
                      $ {name.Price}.<span className="text-xs">00</span>
                    </p>
                    <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
                      StoreName: {name.StoreName}
                    </p>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
