// import greenBowl from "../../assets/images/menu/green-bowl.png";
import heart from "../../assets/icons/heart-bold.svg";
import Button from "./Button";

function MenuCard({ name, price, image, color }) {
  return (
    <div
      className={`${color} px-2 pt-4 sm:pt-0 pb-4 sm:px-4 rounded-2xl relative`}
    >
      <img
        src={image}
        alt={name}
        className="w-3/5 mx-auto sm:w-28 sm:h-28 sm:absolute sm:left-[50%] sm:-top-9 sm:-translate-x-[50%] drop-shadow-2xl"
      />
      <button className="flex sm:hidden justify-center items-center bg-white rounded-[50%] w-8 h-8 absolute right-2 top-2">
        <img src={heart} alt="Heart Icon" className="w-6 h-6" />
      </button>
      <div className="flex flex-col space-y-3 sm:space-y-2 justify-center items-center sm:justify-normal sm:items-stretch mt-4 sm:mt-24">
        <h3 className="text-white capitalize font-medium text-xl sm:text-base">
          {name}
        </h3>
        <div className="flex justify-between space-x-8 sm:space-x-0">
          <span className="text-white font-medium text-lg sm:text-base">{`$${price}.00`}</span>
          <span className="inline sm:hidden text-lg text-white font-medium">
            + 5.0
          </span>
          <button className="hidden sm:flex justify-center items-center bg-white rounded-[50%] w-5 h-5">
            <img src={heart} alt="Heart Icon" className="w-4 h-4" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <Button className="text-sm sm:text-xs text-blackSoft font-medium bg-white capitalize">
            order now
          </Button>
          <span className="hidden sm:inline text-xs text-white font-medium">
            + 5.0
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
