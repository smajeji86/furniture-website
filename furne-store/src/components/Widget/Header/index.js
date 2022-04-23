import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";
import { NavLink } from "react-router-dom";
import history from "../../../routes/history";
import instance from "../../../axios.js";
import "./header.css";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      openactive: "active",
      closeactive: "inactive",
      left__menu: "inactive",
      User_name: "Undefined",
      Cart_c: 0
    };

    instance
      .post("/get-userinfo", {
        UserId: localStorage.getItem("furne-store_gid")
      })
      .then((res) => {
        this.setState({ User_name: res.data.Result[0].Username });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    setInterval(() => {
      instance
        .post("/get-count-cart", {
          UserId: localStorage.getItem("furne-store_gid")
        })
        .then((res) => {
          this.setState({ Cart_c: res.data.Result });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }

  OpenMenu = () => {
    this.setState({
      openactive: "inactive",
      closeactive: "active",
      left__menu: "active"
    });
  };

  CloseMenu = () => {
    this.setState({
      openactive: "active",
      closeactive: "inactive",
      left__menu: "inactive"
    });
  };

  logout = () => {
    localStorage.removeItem("ftstore_gid");
    history.push("/");
    history.go();
  };
  render() {
    return (
      <div>
        <header className="bg-black text-white h-full md:h-16 lg:h-16 flex p-3 justify-center shadow shadow-gray-500">
          <nav className="flex flex-col md:flex-row lg:flex-row w-full items-start md:items-center lg:items-center justify-between pl-5 pr-5">
            <ul>
              <a href="/home">
                <li className="text-xl" style={{ fontFamily: "Satisfy" }}>
                  furne-store
                </li>
              </a>
            </ul>
            <ul
              className={`flex flex-col md:flex-row lg:flex-row text-lg ${this.state.left__menu}`}
            >
              <li className="cursor-pointer ml-0 mb-2 mt-2 md:ml-5 lg:ml-5 md:mt-0 lg:mb-0">
                Welcome {this.state.User_name}
              </li>
              <NavLink exact to="/cart" className=" flex items-center">
                <li className="ml-0 mb-2 mt-2 md:ml-5 lg:ml-5 md:mt-0 lg:mb-0 cursor-pointer flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>

                  <span class="flex -ml-2 -mt-1 h-5 w-5">
                    <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative  rounded-full h-4 w-4 bg-red-500 text-xs text-center">
                      {this.state.Cart_c}
                    </span>
                  </span>
                </li>
              </NavLink>
              <li className="ml-0 mb-2 mt-2 md:ml-5 lg:ml-5 md:mt-0 lg:mb-0 cursor-pointer flex items-center">
                <GoogleLogout
                  clientId="1056189026443-qfoneu4fkqhp43pq0q6u9f266rkq0drc.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  )}
                  buttonText="Logout"
                  onLogoutSuccess={this.logout}
                ></GoogleLogout>
              </li>
            </ul>
          </nav>
          <div
            className={`hidden ${this.state.openactive} `}
            onClick={this.OpenMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`hidden ${this.state.closeactive}`}
            onClick={this.CloseMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </header>
      </div>
    );
  }
}
