import React from "react";
import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const App = () => (
  <div className="app">
    <Header />
    <Search />

    <Categories title="Mi lista">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Tendencias">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Originales de Platzi Video">
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
