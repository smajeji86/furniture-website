import React, { Component } from "react";

export default class Welcomecard extends Component {
  render() {
    return (
      <div className="p-5">
        <div className="w-full h-full p-8 bg-gradient-to-tl from-[#b92b27] to-[#1565C0] flex flex-col items-center justify-center text-white rounded">
          <span className="text-3xl">Welcome to</span>
          <span className="text-xl p-3" style={{ fontFamily: "Satisfy" }}>
            furne-store
          </span>
          <div className="flex gap-2 mt-2 flex-col md:flex-row lg:flex-row">
            <span className="text-black bg-gray-200 rounded p-1">
              #fast-delivery
            </span>
            <span className="text-black bg-gray-200 rounded p-1">
              #safe-delivery
            </span>
            <span className="text-black bg-gray-200 rounded p-1">#sth</span>
            <span className="text-black bg-gray-200 rounded p-1">
              #furne-store
            </span>
          </div>
        </div>
      </div>
    );
  }
}
