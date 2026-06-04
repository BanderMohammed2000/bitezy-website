import foodData from "../../data/foodData";
import FoodCard from "../ui/FoodCard";
function TopFoods() {
  return (
    <section className="container mx-auto pt-10 xl:pt-14 pb-6 px-6">
      <h2 className="text-2xl w-fit mx-auto text-blackSoft font-medium capitalize relative horizontal-line">
        top foods
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {foodData.map((data) => (
          <FoodCard key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
}

export default TopFoods;
