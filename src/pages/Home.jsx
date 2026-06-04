import Header from "../components/layout/Header";
import Categories from "../components/sections/Categories";
import GetStarted from "../components/sections/GetStarted";
import Menu from "../components/sections/Menu";
import OurTeam from "../components/sections/OurTeam";
import TopFoods from "../components/sections/TopFoods";
import Footer from "../components/layout/Footer";
import Discount from "../components/sections/Discount";

function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Categories />
      <GetStarted />
      <TopFoods />
      <OurTeam />
      <Discount />
      <Footer />
    </>
  );
}

export default Home;
