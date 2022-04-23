import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Footer from "../../Widget/Footer";
import instance from "../../../axios.js";
import history from "../../../routes/history.js";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
 

export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.revealimg();
  }

  revealimg = () => {
    setTimeout(() => {
      this.setState({ index: this.state.index + 1 });
      if (this.state.index === 4) {
        this.state.index = 0;
      }
      this.revealimg();
    }, 3000);
  };

  response = (res) => {
    instance
      .post("/add-shipping-info", {
        UserId: res.profileObj.googleId,
        Name: res.profileObj.name,
        Username: res.profileObj.givenName,
        Address: "null",
        State: "null",
        Country: "null",
        Email: res.profileObj.email,
        Phonenumber: "null"
      })
      .then((_res) => {
        localStorage.setItem("furne-store_gid", res.profileObj.googleId);
        history.push("/home");
        history.go();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* Header Section */}
        <header className="bg-black text-white h-16 flex items-center justify-center shadow shadow-gray-500">
          <nav className="flex w-full items-center justify-between pl-5 pr-5">
            <ul>
              <li className="text-xl">furne-store</li>
            </ul>
            <ul className="flex text-lg">
              <Link to="/home" ><li className="cursor-pointer">Home</li></Link>
              <div className="ml-5 cursor-pointer">
                <GoogleLogin
                  clientId="1056189026443-qfoneu4fkqhp43pq0q6u9f266rkq0drc.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={this.response}
                  onFailure={this.response}
                  isSignedIn={true}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </ul>
          </nav>
        </header>

        <section>
          <div className="flex w-full flex-col justify-around pl-10 pr-10 items-center h-screen md:flex-row lg:flex-row  ">
            <div className="mb-5 lg:mb-0 md:mb-0">
              <p
                className=" w-full md:w-96 lg:w-96  text-3xl text-gray-600"
                style={{ fontFamily: "Fira Sans" }}
              >
                <span
                  className="text-5xl text-black"
                  style={{ fontFamily: "Satisfy" }}
                >
                  <Flip left cascade>
                    furne-store
                  </Flip>
                </span>
                <br /> A online{" "}
                <span className="underline text-purple-400">STH</span>
                <span> </span>
                (Shop to Home) Online Delivery Service.
              </p>
            </div>
            <div className="mt-5">
              <div
                className={`${
                  this.state.index === 0 ? "flex flex-col" : "hidden"
                }`}
              >
                <Fade top>
                  <img
                    className="rounded-full w-80 md:w-full lg:w-full"
                    src="https://furne-store.netlify.app/asstes/beds/3.jpeg"
                  />
                  <div className="w-full flex justify-center mt-3">
                    <p className=" border-2 border-red-300 p-3 rounded cursor-pointer">
                      View more products
                    </p>
                    <span class="flex -ml-2 -mt-1 h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </Fade>
              </div>
              <div
                className={`${
                  this.state.index === 1 ? "flex flex-col" : "hidden"
                }`}
              >
                <Flip left>
                  <img
                    className="rounded-full w-80 md:w-full lg:w-full"
                    src="https://furne-store.netlify.app/asstes/chairs/1.jpeg"
                  />
                  <div className="w-full flex justify-center mt-3">
                    <p className=" border-2 border-red-300 p-3 rounded cursor-pointer">
                      View more products
                    </p>
                    <span class="flex -ml-2 -mt-1 h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </Flip>
              </div>
              <div
                className={`${
                  this.state.index === 2 ? "flex flex-col" : "hidden"
                }`}
              >
                <Fade top>
                  <img
                    className="rounded-full w-80 md:w-full lg:w-full"
                    src="https://furne-store.netlify.app/asstes/desk/4.jpeg"
                  />
                  <div className="w-full flex justify-center mt-3">
                    <p className=" border-2 border-red-300 p-3 rounded cursor-pointer">
                      View more products
                    </p>
                    <span class="flex -ml-2 -mt-1 h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </Fade>
              </div>
              <div
                className={`${
                  this.state.index === 3 ? "flex flex-col" : "hidden"
                }`}
              >
                <Fade left>
                  <img
                    className="rounded-full w-80 md:w-full lg:w-full"
                    src="https://furne-store.netlify.app/asstes/Sofas/4.jpeg"
                  />
                  <div className="w-full flex justify-center mt-3">
                    <p className=" border-2 border-red-300 p-3 rounded cursor-pointer">
                      View more products
                    </p>
                    <span class="flex -ml-2 -mt-1 h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </Fade>
              </div>
              <div
                className={`${
                  this.state.index === 4 ? "flex flex-col" : "hidden"
                }`}
              >
                <Fade top>
                  <img
                    className="rounded-full w-80 md:w-full lg:w-full"
                    src="https://furne-store.netlify.app/asstes/tables/4.jpeg"
                  />
                  <div className="w-full flex justify-center mt-3">
                    <p className=" border-2 border-red-300 p-3 rounded cursor-pointer">
                      View more products
                    </p>
                    <span class="flex -ml-2 -mt-1 h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
