import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Quote from "./components/Quote";
import ChefProfile from "./components/ChefProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Landing />
        <Skills />
        <Quote />
        <ChefProfile />
      </div>
        <Footer />
    </div>
  );
}

export default App;
