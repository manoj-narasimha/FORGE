import "./App.css";
import Eventspage from "./components/Eventspage/Eventspage";
import About from "./components/about/About.jsx";
import { Intro } from "./components/intro/Intro";
import Introloader from "./components/intro/Introloader";
import Footer from "./components/Footer/Footer.jsx";
import Events_landing from "./components/Events_landing/Events_landing.jsx";

function App() {
  return (
    <div className="App">
      <div className="">
        <Introloader />
      </div>
      <section className="intro-start ">
        <Intro />
      </section>
      <div className="">
        <Events_landing />
    </div>
      <div className="">
        <About />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
