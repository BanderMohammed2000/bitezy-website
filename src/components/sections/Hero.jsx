import healthyBowl from "../../assets/images/healthy-bowl.png";
import discount from "../../assets/images/20-discount.png";
import play from "../../assets/icons/play.svg";
import delivery from "../../assets/icons/delivery.svg";
import bag from "../../assets/icons/shopping-bag.svg";
import Button from "../ui/Button";
function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-16">
      <div className="flex flex-col w-2/5 space-y-5">
        <h1 className="font-cormorant font-semibold text-blackSoft text-5xl leading-tight">
          Healthy <span className="text-primaryDark">Eating is an </span>
          <span className="text-goldenOrange">Important </span> Part of
          Lifestyle
        </h1>
        <p className="text-graySoft text-sm w-2/5">
          We prepare delicious food for you we are always
        </p>
        <div className="flex items-center pt-6 space-x-8">
          <Button className="bg-primary text-white capitalize font-semibold">
            explore now
          </Button>
          <button type="button">
            <img src={play} alt="Play Icon" className="w-9 h-9" />
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-end relative w-1/2">
          <img
            className="w-full relative right-7 z-10"
            src={healthyBowl}
            alt="Healthy Bowl"
          />
          <img
            className="w-[88px] h-[88px] absolute z-20"
            src={discount}
            alt="20% Discount"
          />
          <div className="w-7 h-36 absolute right-11 top-4 rounded-[999px] rotate-[130deg] bg-[linear-gradient(to_bottom,#074a05_0%,#003a00_100%)]"></div>
          <div className="w-7 h-36 absolute -left-11 top-1/2 -translate-y-1/2 rounded-[999px] rotate-[130deg] bg-[linear-gradient(to_bottom,#074a05_0%,#003a00_100%)]"></div>
          {/* circle */}
          <div className="w-20 h-20 bg-goldenOrange rounded-[50%] absolute -left-16 -bottom-5"></div>
          {/* card */}
          <div className="flex flex-col w-96 p-6 bg-white/15 rounded-2xl absolute top-1/2 -translate-y-4 right-1/2 backdrop-blur-md">
            <div className="flex space-x-3 mb-5">
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
          <div className="flex flex-col w-96 p-6 space-y-5 bg-whiteSoft rounded-2xl absolute top-1/2 -translate-y-4 right-1/2 -z-10">
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
