import React from "react";
import web from "../src/image/hero4.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
        <Common
        name="Grow Your Knowledge with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
