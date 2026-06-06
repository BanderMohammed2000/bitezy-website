import phone from "../../assets/images/phone.png";
import dish from "../../assets/images/healthy-varied-dish.png";
import googlePlay from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";
function Discount() {
  return (
    <section id="get-app" className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-14">
        <div className="space-y-7 relative">
          <img
            src={dish}
            alt="Healthy Dish"
            className="md:hidden w-28 h-28 sm:w-40 sm:h-40 absolute -right-5 sm:right-0 top-1/2 -translate-y-1/2"
          />
          <h2 className="text-2xl font-medium text-goldenOrange capitalize">
            get 20% discount
          </h2>
          <p className="text-blackSoft font-medium leading-relaxed w-[60%] sm:w-auto sm:max-w-xs md:max-w-sm">
            Get flat 20% off on your first order though The Bitezy App!
          </p>
          <div className="flex flex-row space-x-3 pt-4 sm:pt-10">
            <button type="button">
              <a href="#">
                <img
                  src={googlePlay}
                  alt="Google Play"
                  className="h-10 sm:h-14"
                />
              </a>
            </button>
            <button type="button">
              <a href="#">
                <img src={appStore} alt="App Store" className="h-10 sm:h-14" />
              </a>
            </button>
          </div>
        </div>
        {/* img */}
        <div className="flex items-center space-x-3 lg:space-x-16 mx-auto md:mx-0">
          <img
            src={dish}
            alt="Healthy Dish"
            className="hidden md:block w-40 h-40 md:w-36 md:h-36 lg:w-56 lg:h-56"
          />
          <img src={phone} alt="Phone" className="h-96" />
        </div>
      </div>
    </section>
  );
}

export default Discount;
