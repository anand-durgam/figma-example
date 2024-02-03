// src/pages/Home.js
import React from "react";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import images from "../utils/imagesData";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <ImageGallery images={images} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
