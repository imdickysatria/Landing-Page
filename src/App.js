import React, { Component } from "react";
import Product from "../src/container/pages/Product/Product";
import Header from "../src/container/Layout/Header";
import Home from "../src/container/pages/Home/Home";
// import Footer from '../Layout/Footer';
// import { BrowserRouter } from 'react-router-dom'
import PostCard from "../src/container/pages/PostCard/PostCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../src/container/pages/About/About";
import DetailPost from "../src/container/pages/PostCard/DetailPost/DetailPost";
import Order from "../src/component/Order/Order";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/article" element={<PostCard />} />
        <Route path="/article/detail-post/:id" element={<DetailPost />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
