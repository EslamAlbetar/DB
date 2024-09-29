import Home from "./components/2-home/Home";
import Header from "./components/1-header/Header";
import UnderHome from "./components/2-home/UnderHome";
import Travel from "./components/3-travel/Travel";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import "./background.css";
function App() {
  return (
    <>
      <div>
        <div className="background">
          <Header />
          <Home />
          <UnderHome />
        </div>
        <Travel />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
