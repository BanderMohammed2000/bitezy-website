import Header from "../components/layout/Header";
import Categories from "../components/sections/Categories";
import GetStarted from "../components/sections/GetStarted";
import Menu from "../components/sections/Menu";
import TopFoods from "../components/sections/TopFoods";
function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Categories />
      <GetStarted />
      <TopFoods />
    </>
  );
}

export default Home;
