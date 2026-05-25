import healthyBowl from "../../assets/images/healthy-bowl.png";
import discount from "../../assets/images/20-discount.png";
import play from "../../assets/icons/play.svg";
import Button from "../ui/Button";
function Hero() {
  return (
    <div className="flex justify-between mt-16">
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
          <img src={play} alt="Play Icon" className="w-9 h-9" />
        </div>
      </div>
      <div className="flex justify-end relative">
        <img
          className="w-1/2 relative right-7 z-10"
          src={healthyBowl}
          alt="Healthy Bowl"
        />
        <img
          className="w-[88px] h-[88px] absolute z-20"
          src={discount}
          alt="20% discount"
        />
        <div className="w-7 h-36 absolute right-11 top-4 rounded-[999px] rotate-[130deg] bg-[linear-gradient(to_bottom,#074a05_0%,#003a00_100%)]"></div>
      </div>
    </div>
  );
}
export default Hero;
