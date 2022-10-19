import type { NextPage } from "next";
import HeroContainer from "../components/HeroContainer";
import HeroSection from "../modules/HeroSection";
import TechnologySection from "../modules/TechnologySection";

const Home: NextPage = () => {
  return (
    <div className="w-full" style={{ height: "calc(100% - 80px)" }}>
      <HeroSection />
      <TechnologySection />
    </div>
  );
};

export default Home;
