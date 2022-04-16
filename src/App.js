import React from "react";
// import ReactDOM from "react-dom";

import "./App.css";

import MainContent from "./MainContent";
import Footer from "./Footer";
import Header from "./Header"

export default function App() {
  return (
    <div className="">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}