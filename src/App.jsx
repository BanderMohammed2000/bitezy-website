import { useEffect, useState } from "react";
import healthyBowl from "./assets/images/healthy-bowl.png";
import discount from "./assets/images/20-discount.png";
import delivery from "./assets/icons/delivery.svg";
import bag from "./assets/icons/shopping-bag.svg";
import leaves1 from "./assets/images/leaves-1.png";
import leaves2 from "./assets/images/leaves-2.png";
import leaves3 from "./assets/images/leaves-3.png";
import leaves4 from "./assets/images/leaves-4.png";
import healthyBowlYellow from "./assets/images/healthy-bowl-yellow.png";
import healthyBreakfast from "./assets/images/healthy-breakfast.png";
import grilledSalad from "./assets/images/grilled-salad.png";
import man from "./assets/images/man-eats-salad-bowl.png";
import fallenBowl from "./assets/images/fallen-bowl.png";
import phone from "./assets/images/phone.png";
import dish from "./assets/images/healthy-varied-dish.png";
import PreLoader from "./components/ui/PreLoader";
import Home from "./pages/Home";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [
      healthyBowl,
      discount,
      delivery,
      bag,
      leaves1,
      leaves2,
      leaves3,
      leaves4,
      healthyBowlYellow,
      healthyBreakfast,
      grilledSalad,
      man,
      fallenBowl,
      phone,
      dish,
    ];

    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();

        img.src = src;

        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all([...imagePromises, document.fonts.ready]).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return <Home />;
}

export default App;
