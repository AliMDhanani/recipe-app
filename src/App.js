import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Landing />
        <Skills />
      </div>
    </div>
  );
}

export default App;
