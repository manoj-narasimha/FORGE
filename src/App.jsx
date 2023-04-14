import "./App.css";
import Eventspage from "./Eventspage/Eventspage";
import { Intro } from "./intro/Intro";
import Introloader from "./intro/Introloader";

function App() {
  return (
    <div className="App">
      {/* <section className="intro-1 ff-tc ds-no">
        <div className="intro-box">
          <div className="intro-btn"></div>
          <div className="intro-btn-txt">GG</div>
        </div>
      </section> */}
      <div className="">
        <Introloader />
      </div>
      <section className="intro-start ">
        <Intro />
      </section>
      {/* <section className="eventspage"></section> */}
      <div className="">
        <Eventspage />
      </div>
    </div>
  );
}

export default App;
