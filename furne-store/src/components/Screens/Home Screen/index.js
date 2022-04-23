import React, { Component } from "react";
import CategoryCard from "../../Widget/Category Cards";
import Footer from "../../Widget/Footer";
import Header from "../../Widget/Header";
import Welcomecard from "../../Widget/Welcome card";
import CategoryItems from "../../Widget/Category Items";

export default class HomeScreen extends Component {
  ToTop = () => {
    document.body.scrollTop = 40;
    document.documentElement.scrollTop = 40;
  };

  render() {
    document.title = "Home | ftstore";
    return (
      <div>
        <Header />
        <Welcomecard />
        <section>
          <div className="pb-16">
            <div className="flex justify-center items-center">
              <div className="py-12 px-4 sm:px-6 xl:px-10 w-full">
                <div className="flex flex-col jusitfy-center items-center space-y-10">
                  <div className="w-full flex justify-start items-center">
                    <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                      Category
                    </h1>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 space-x-3 space-y-3 w-full">
                    <CategoryCard
                      name="beds"
                      image="https://furne-store.netlify.app/asstes/beds/3.jpeg"
                    />
                    <CategoryCard
                      name="cabinets"
                      image="https://furne-store.netlify.app/asstes/cabinets/8.jpeg"
                    />
                    <CategoryCard
                      name="chairs"
                      image="https://furne-store.netlify.app/asstes/chairs/2.jpeg"
                    />
                    <CategoryCard
                      name="clocks"
                      image="https://furne-store.netlify.app/asstes/clocks/3.jpeg"
                    />
                    <CategoryCard
                      name="curtains"
                      image="https://furne-store.netlify.app/asstes/Curtains/2.jpeg"
                    />
                    <CategoryCard
                      name="cushions"
                      image="https://furne-store.netlify.app/asstes/Cushions/3.jpeg"
                    />
                    <CategoryCard
                      name="desk"
                      image="https://furne-store.netlify.app/asstes/desk/2.jpeg"
                    />
                    <CategoryCard
                      name="rugs"
                      image="https://furne-store.netlify.app/asstes/Rugs/1.jpeg"
                    />
                    <CategoryCard
                      name="sofas"
                      image="https://furne-store.netlify.app/asstes/Sofas/7.jpeg"
                    />
                    <CategoryCard
                      name="tables"
                      image="https://furne-store.netlify.app/asstes/tables/8.jpeg"
                    />
                    <CategoryCard
                      name="others"
                      image="https://furne-store.netlify.app/asstes/others/4.jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beds Section */}
        <section id="beds">
          <div className="pb-0">
            <CategoryItems name="Beds" />
          </div>
        </section>

        {/* Cabinets Section */}
        <section id="cabinets">
          <div className="pb-0">
            <CategoryItems name="Cabinets" />
          </div>
        </section>

        {/* Chairs Section */}
        <section id="chairs">
          <div className="pb-0">
            <CategoryItems name="Chairs" />
          </div>
        </section>

        {/* Clocks Section */}
        <section id="clocks">
          <div className="pb-0">
            <CategoryItems name="Clocks" />
          </div>
        </section>

        {/* Curtains Section */}
        <section id="curtains">
          <div className="pb-0">
            <CategoryItems name="Curtains" />
          </div>
        </section>

        {/* Cushions Section */}
        <section id="cushions">
          <div className="pb-0">
            <CategoryItems name="Cushions" />
          </div>
        </section>

        {/* Desk Section */}
        <section id="desk">
          <div className="pb-0">
            <CategoryItems name="Desk" />
          </div>
        </section>

        {/* Rugs Section */}
        <section id="rugs">
          <div className="pb-0">
            <CategoryItems name="Rugs" />
          </div>
        </section>

        {/* Sofas Section */}
        <section id="sofas">
          <div className="pb-0">
            <CategoryItems name="Sofas" />
          </div>
        </section>

        {/* Tables Section */}
        <section id="tables">
          <div className="pb-0">
            <CategoryItems name="Tables" />
          </div>
        </section>

        {/* Others Section */}
        <section id="others">
          <div className="pb-0">
            <CategoryItems name="Others" />
          </div>
        </section>

        <div className="absolute" onClick={() => this.ToTop()}>
          <div className="bg-red-700 w-32 text-white text-center p-3 fixed right-1 bottom-0 rounded cursor-pointer">
            <p>Back to Top</p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
