import "../styles/App.css";
import Navbar from "../components/NavBar";
import Card from "../components/Card";
import Weare from "../components/Weare";
import Wedo from "../components/Wedo";
import Careers from "../components/Careers";
import Footer from "../components/Footer";
import Contactus from "./Contactus";

const App = () => {
  return (
    <>
      <Navbar />
      <Card />
      <Weare />
      <Wedo />
      <Careers />
      <Contactus />
      <Footer />
    </>
  );
};

export default App;
