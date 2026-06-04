import healthyBowl from "../../assets/images/healthy-bowl.png";
import discount from "../../assets/images/20-discount.png";
import play from "../../assets/icons/play.svg";
import delivery from "../../assets/icons/delivery.svg";
import bag from "../../assets/icons/shopping-bag.svg";
import Button from "../ui/Button";
function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 sm:mt-16">
      <div className="flex flex-col w-4/5 sm:w-3/5 md:w-3/4 lg:w-2/5 space-y-5">
        <h1 className="font-cormorant font-semibold text-blackSoft text-4xl sm:text-5xl leading-snug">
          <span className="leading-snugs">Healthy</span>
          <span className="text-primaryDark leading-snug"> Eating is an </span>
          <span className="text-goldenOrange leading-snug"> Important </span>
          <span className="leading-snug">Part of Lifestyle</span>
        </h1>
        <p className="text-graySoft text-sm leading-relaxed w-3/5 xl:w-2/5">
          {/* We prepare delicious food for you we are always */}
          Fresh and healthy meals prepared to support your active lifestyle
        </p>
        <div className="flex items-center pt-6 space-x-8">
          <Button className="bg-primary text-white capitalize font-semibold">
            explore now
          </Button>
          <button type="button" className="hidden sm:block">
            <img src={play} alt="Play Icon" className="w-9 h-9" />
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-end relative w-1/2 -translate-y-[130px] translate-x-[21px] sm:translate-x-0 sm:-translate-y-[70px] md:translate-y-0">
          <img
            className="w-full relative sm:right-7 z-10 drop-shadow-2xl"
            src={healthyBowl}
            alt="Healthy Bowl"
          />
          <img
            className="w-14 h-14 sm:w-[88px] sm:h-[88px] absolute z-20 -translate-x-3 -translate-y-2 sm:translate-x-0"
            src={discount}
            alt="20% Discount"
          />
          <div className="hidden sm:block w-7 h-36 absolute right-11 top-5 rounded-[999px] rotate-[130deg] bg-[linear-gradient(to_bottom,#074a05_0%,#003a00_100%)] shadow-xl"></div>
          <div className="hidden sm:block w-7 h-36 absolute -left-11 top-1/2 -translate-y-1/2 rounded-[999px] rotate-[130deg] bg-[linear-gradient(to_bottom,#074a05_0%,#003a00_100%)] shadow-xl"></div>
          {/* circle */}
          <div className="hidden sm:block w-20 h-20 bg-goldenOrange rounded-[50%] absolute -left-16 -bottom-8 md:-bottom-3 lg:-bottom-5 shadow-xl"></div>
          <div className="w-20 h-20 bg-goldenOrange rounded-[50%] absolute bottom-2 sm:right-7 sm:bottom-14 shadow-xl"></div>
          {/* card */}
          <div className="hidden sm:flex flex-col w-72 lg:w-96 p-6 space-y-5 bg-white/15 rounded-2xl absolute top-1/2 -translate-y-4 sm:right-3/4 md:right-1/2 backdrop-blur-md shadow-xl">
            <div className="flex space-x-3">
              <div className="flex space-x-3">
                <img className="w-6 h-6" src={delivery} alt="Delivery Icon" />
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="text-blackSoft text-sm font-medium capitalize">
                  fast delivery
                </h4>
                <p className="w-2/3 text-xs text-graySoft capitalize">
                  free delivery within 30 min
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="flex space-x-3">
                <img className="w-6 h-6" src={bag} alt="Bag Icon" />
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="text-blackSoft text-sm font-medium capitalize">
                  pick up
                </h4>
                <p className="w-2/3 text-xs text-graySoft capitalize">
                  pickup delivery at your doorstep
                </p>
              </div>
            </div>
            {/* white background */}
            {/* <div className="w-full h-full bg-whiteSoft rounded-2xl absolute inset-0 -z-20"></div> */}
            {/* circle */}
            {/* <div className="w-20 h-20 bg-goldenOrange rounded-[50%] absolute right-[40%] -bottom-5"></div> */}
          </div>
          {/* white background */}
          <div className="hidden sm:flex flex-col w-72 lg:w-96 p-6 bg-whiteSoft rounded-2xl absolute top-1/2 -translate-y-4 sm:right-3/4 md:right-1/2 -z-10">
            <div className="flex space-x-3 invisible">
              <div className="flex space-x-3">
                <img className="w-6 h-6" src={delivery} alt="Delivery Icon" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-blackSoft text-sm font-medium capitalize">
                  fast delivery
                </h4>
                <p className="w-2/3 text-xs text-graySoft capitalize">
                  free delivery within 30 min
                </p>
              </div>
            </div>
            <div className="flex space-x-3 invisible">
              <div className="flex space-x-3">
                <img className="w-6 h-6" src={bag} alt="Bag Icon" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-blackSoft text-sm font-medium capitalize">
                  pick up
                </h4>
                <p className="w-2/3 text-xs text-graySoft capitalize">
                  pickup delivery at your doorstep
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
