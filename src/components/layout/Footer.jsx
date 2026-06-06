import google from "../../assets/icons/google-fill.svg";
import facebook from "../../assets/icons/facebook-fill.svg";
import instagram from "../../assets/icons/instagram-fill.svg";
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
function Footer() {
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
                  <a href="#">
                    <img src={google} alt="Google Icon" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={facebook}
                      alt="Facebook Icon"
                      className="w-6 h-6"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={instagram}
                      alt="Instagram Icon"
                      className="w-6 h-6"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-7">
            <h3 className="text-lg text-blackSoft font-medium uppercase">
              about us
            </h3>
            <ul className="space-y-2">
              {aboutUsList.map((data) => (
                <li className="text-graySoft text-sm capitalize">{data}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-7">
            <h3 className="text-lg text-blackSoft font-medium uppercase">
              our menu
            </h3>
            <ul className="space-y-2">
              {ourMenuList.map((data) => (
                <li className="text-graySoft text-sm capitalize">{data}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-7">
            <h3 className="text-lg text-blackSoft font-medium uppercase">
              our menu
            </h3>
            <ul className="space-y-2">
              {ourLocationList.map((data) => (
                <li className="text-graySoft text-sm capitalize">{data}</li>
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
