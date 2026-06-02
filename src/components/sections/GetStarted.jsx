import man from "../../assets/images/man-eats-salad-bowl.png";
import broccoli from "../../assets/images/broccoli.png";
import apple from "../../assets/images/apple.png";
function GetStarted() {
  return (
    <section className="container mx-auto px-6 pb-6 sm:pt-6 md:pt-14">
      <div className="flex flex-col md:items-center gap-y-12 md:gap-x-4 lg:gap-x-36 xl:gap-x-72 md:flex-row">
        <div className="flex flex-col space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-medium text-orangeAccent uppercase">
              healthy food
            </span>
            <h2 className="text-2xl font-medium text-blackSoft capitalize relative get-started">
              start eating better today!
            </h2>
          </div>
          <div className="space-y-5 max-w-md md:max-w-sm lg:max-w-md">
            <p className="font-medium text-blackSoft leading-snug">
              Fresh, nutritious meals carefully prepared to support your healthy
              lifestyle
            </p>
            <p className="text-sm text-graySoft leading-snug">
              Discover a variety of wholesome dishes made from fresh
              ingredients, balanced nutrition, and delicious flavors to keep you
              energized throughout your day
            </p>
          </div>
        </div>
        <div className="relative w-fit left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0">
          <img
            src={man}
            alt="Man Eats Salad"
            className="w-80 h-80 lg:w-96 lg:h-96 rounded-full mx-auto md:mx-0 drop-shadow-lg"
          />
          <img
            src={broccoli}
            alt="Broccoli"
            className="w-14 h-14 absolute top-0 right-0 drop-shadow-md"
          />
          <img
            src={apple}
            alt="Apple"
            className="w-9 h-9 absolute -bottom-2 left-14 drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
