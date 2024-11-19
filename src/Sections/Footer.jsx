import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants/index";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start w-full">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={150} />
          </a>
          <p className="text-white mt-1">
            Get shoes ready for the new term at the new Nike store. Find the
            perfect size for you today.
          </p>
          <div className="flex item-center gap-5 mt-8">
            {socialMedia.map((icon, key) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={key}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-4 w-full">
            {footerLinks.map((section, key) => (
              <div key={key}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul className="mt-2">
                  {section.links.map((link, key) => (
                    <li
                      key={key}
                      className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
                    >
                      <a href="#">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-4 max-sm:flex-col max-sm:items-center pb-24">
        <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-ful m-0"
          />
          <p>Copyright. All right reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
