import React, { Component } from "react";
import Header from "../../Widget/Header";
import instance from "../../../axios.js";
import history from "../../../routes/history.js";

export default class StoreCartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cart_items: [],
      Total_cost: 0
    };
    instance
      .post("/show-cart-items", {
        UserId: localStorage.getItem("furne-store_gid")
      })
      .then((res) => {
        this.setState({
          Cart_items: res.data.Result
        });
      })
      .catch((err) => {
        console.log(err);
      });
    instance
      .post("/total-cart-cost", {
        UserId: localStorage.getItem("furne-store_gid")
      })
      .then((res) => {
        this.setState({
          Total_cost: res.data.Result
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    document.title = "Cart | ftstore";
    return (
      <div>
        <Header />
        <div className="w-full h-full">
          <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div
              className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
              id="scroll"
            >
              <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                Your Cart
              </p>
              {this.state.Cart_items.map(function (name, index) {
                const Delete_item = () => {
                  {
                    instance
                      .post("/delete-show-cart-items", {
                        UserId: localStorage.getItem("furne-store_gid"),
                        id: name._id
                      })
                      .then((res) => {
                        history.go();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                };
                return (
                  <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                    <div className="w-1/5">
                      <img
                        src={name.Image}
                        alt=""
                        className="w-full h-full object-center object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4 pb-2">
                        {name.StoreName}
                      </p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                          {name.Name}
                        </p>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 py-5">
                        Category: {name.Category}
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex items-center">
                          <p
                            onClick={Delete_item}
                            className="text-xs leading-3 underline text-red-500 cursor-pointer"
                          >
                            Remove
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          ${name.Price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      ${this.state.Total_cost}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800">$20</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">$35</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      ${parseInt(this.state.Total_cost + 20 + 35)}
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      history.push("/cart-invoice");
                      history.go();
                    }}
                    className="text-base text-center leading-none w-full py-3 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white cursor-pointer"
                  >
                    Generate Invoice
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
