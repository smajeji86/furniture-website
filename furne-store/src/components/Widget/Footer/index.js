import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer Section */}
        <section>
          <footer className="bg-black h-40 p-10">
            <div className="w-full flex flex-col items-center justify-center">
              <ul className="flex text-white">
                <li>Home</li>
                <li className="ml-5">Contact Us</li>
              </ul>
              <p className="text-white mt-3 text-center">
                smajeji86@gmail.com
              </p>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}
