import React from "react";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Quote from "../components/Quote";
import ChefProfile from "../components/ChefProfile";

const Home = () => {
  return (
    <div>
      <Landing />
      <Skills />
      <Quote />
      <ChefProfile />
    </div>
  );
};

export default Home;
