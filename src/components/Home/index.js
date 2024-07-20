import { Component } from "react";
import Header from "../Header";
import HeroSection from "../HeroSection";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <HeroSection />
      </div>
    );
  }
}
export default Home;
