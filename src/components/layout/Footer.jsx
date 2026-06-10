// import google from "../../assets/icons/google-fill.svg";
// import facebook from "../../assets/icons/facebook-fill.svg";
// import instagram from "../../assets/icons/instagram-fill.svg";
import { useState } from "react";
import Button from "../ui/Button";

function Footer() {
  const aboutUsList = [
    "our story",
    "our locations",
    "current events",
    "contact us",
  ];

  const ourMenuList = [
    "healthy bowls",
    "fresh salads",
    "protein meals",
    "fruit bowls",
  ];

  const ourLocationList = [
    "the bitezy home",
    "the bitezy branches",
    "the bitezy team",
    "the bitezy menu",
  ];

  const [iconsHovered, setIconsHovered] = useState({
    instagram: false,
    facebook: false,
    google: false,
  });

  function handleMouse(icon, result) {
    setIconsHovered((prev) => ({
      ...prev,
      [icon]: result,
    }));
  }
  return (
    <section id="contact" className="bg-bgCream">
      <div className="container mx-auto pt-12 pb-6 px-6">
        {/* className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
          <div className="flex flex-col">
            <div className="space-y-7">
              <h3 className="font-semibold text-xl capitalize text-primary">
                bitezy
              </h3>
              <p className="text-graySoft text-sm leading-relaxed max-w-sm">
                Discover healthy meals prepared with fresh ingredients, crafted
                to bring great taste and better nutrition to your everyday life
              </p>
              <ul className="flex space-x-7 pt-5 opacity-90">
                <li>
                  <Button
                    isStyle={false}
                    onMouseEnter={() => handleMouse("google", true)}
                    onMouseLeave={() => handleMouse("google", false)}
                  >
                    <a href="#">
                      {/* <img src={google} alt="Google Icon" className="w-6 h-6" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        {/* <title xmlns="">google-fill</title> */}
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill={iconsHovered.google ? "#f85a1c" : "#111111"}
                            className="transition-all duration-300 ease-out"
                            d="M12 5.5a6.5 6.5 0 1 0 6.326 8H13a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 1.5 1.5a9.5 9.5 0 1 1-2.801-6.736a1.5 1.5 0 1 1-2.116 2.127A6.48 6.48 0 0 0 12 5.5"
                          />
                        </g>
                      </svg>
                    </a>
                  </Button>
                </li>
                <li>
                  <Button
                    isStyle={false}
                    onMouseEnter={() => handleMouse("facebook", true)}
                    onMouseLeave={() => handleMouse("facebook", false)}
                  >
                    <a href="#">
                      {/* <img
                        src={facebook}
                        alt="Facebook Icon"
                        className="w-6 h-6"
                      /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        {/* <title xmlns="">facebook-fill</title> */}
                        <path
                          fill={iconsHovered.facebook ? "#f85a1c" : "#111111"}
                          className="transition-all duration-300 ease-out"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </a>
                  </Button>
                </li>
                <li>
                  <Button
                    isStyle={false}
                    onMouseEnter={() => handleMouse("instagram", true)}
                    onMouseLeave={() => handleMouse("instagram", false)}
                  >
                    <a href="#">
                      {/* <img
                        src={instagram}
                        alt="Instagram Icon"
                        className="w-6 h-6"
                      /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        {/* <title xmlns="">instagram-fill</title> */}
                        <path
                          fill={iconsHovered.instagram ? "#f85a1c" : "#111111"}
                          className="transition-all duration-300 ease-out"
                          fillRule="evenodd"
                          d="M7.465 1.066C8.638 1.012 9.012 1 12 1s3.362.013 4.534.066s1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12s-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066s-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.949-1.268a5.4 5.4 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12s.013-3.362.066-4.534s.24-1.972.511-2.672a5.4 5.4 0 0 1 1.27-1.948a5.4 5.4 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064s-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.4 3.4 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445s.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064s3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445s-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.4 3.4 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-7">
            <h3 className="text-lg text-blackSoft font-medium uppercase">
              about us
            </h3>
            <ul className="space-y-2">
              {aboutUsList.map((data, index) => (
                <li key={index} className="text-graySoft text-sm capitalize">
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-7">
            <h3 className="text-lg text-blackSoft font-medium uppercase">
              our menu
            </h3>
            <ul className="space-y-2">
              {ourMenuList.map((data, index) => (
                <li key={index} className="text-graySoft text-sm capitalize">
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-7">
            <h3 className="text-lg text-blackSoft font-medium uppercase">
              our menu
            </h3>
            <ul className="space-y-2">
              {ourLocationList.map((data, index) => (
                <li key={index} className="text-graySoft text-sm capitalize">
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <p className="text-graySoft text-sm font-medium capitalize">
            copyright &copy; 2026 the bitezy
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
