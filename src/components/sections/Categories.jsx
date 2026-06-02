import categoryData from "../../data/CategoryData";
import healthyBowl from "../../assets/images/healthy-bowl-yellow.png";
import healthyBreakfast from "../../assets/images/healthy-breakfast.png";
import grilledSalad from "../../assets/images/grilled-salad.png";
import CategoryCard from "../ui/CategoryCard";

// function Categories() {
//   return (
//     <section className="container mx-auto sm:pt-10 pb-6 px-6 relative -top-6 sm:top-0">
//       <div className="flex flex-col md:flex-row">
//         <div className="flex space-x-2 h-80 w-full md:h-auto md:w-4/5 order-1 mt-10 md:mt-0">
//           <img
//             src={healthyBowl}
//             alt="Vegetables"
//             className="w-3/5 md:w-2/5 rounded-xl object-cover"
//           />
//           <div className="flex flex-col space-y-2">
//             <img
//               src={healthyBreakfast}
//               alt="Healthy Food"
//               className="w-full md:w-2/5 h-full rounded-lg object-cover"
//             />
//             <img
//               src={grilledSalad}
//               alt="Fish"
//               className="w-full md:w-2/5 rounded-lg h-full object-cover"
//             />
//           </div>
//         </div>
//         {/* كلام */}
//         <div className="flex flex-col md:flex-row md:order-1">
//           <div className="flex flex-col space-y-9">
//             <h2 className="text-2xl font-medium capitalize relative our-categories">
//               our categories
//             </h2>
//             {categoryData.map((data) => (
//               <CategoryCard key={data.id} {...data} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
function Categories() {
  return (
    <section className="container mx-auto sm:pt-10 pb-6 px-6 relative -top-6 sm:top-0">
      <div className="flex flex-col md:flex-row items-center md:gap-10 lg:gap-16">
        <div className="flex gap-2 w-full md:w-[55%] h-80 order-1 mt-10 md:mt-0">
          <img
            src={healthyBowl}
            alt="Vegetables"
            className="w-[58%] h-full rounded-xl object-cover"
          />
          <div className="grid grid-rows-2 gap-2 w-[42%] h-full">
            <img
              src={healthyBreakfast}
              alt="Healthy Food"
              className="w-full h-full rounded-lg object-cover"
            />
            <img
              src={grilledSalad}
              alt="Fish"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
        {/* كلام */}
        <div className="w-full md:w-[45%] md:order-1">
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl text-blackSoft font-medium capitalize relative horizontal-line">
              our categories
            </h2>
            {categoryData.map((data) => (
              <CategoryCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
