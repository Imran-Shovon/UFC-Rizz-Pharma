import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Branding from "../assets/Branding.png";
import FooterImage from "../assets/Footer.png";
import HMS from "../assets/HMS.png";
import Mask from "../assets/Mask_group.png";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-t from-[#1a1a2e] to-[#4b0082] text-white py-12 px-8"
      style={{ minHeight: "300px", backgroundImage: `url(${FooterImage})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Email Subscription */}
        <div className="flex flex-col items-center border backdrop-blur-md p-6 rounded-lg">
          <h3 className="text-4xl text-center font-bold mb-4">Let's Stay In <br /> Touch</h3>
          <p className="mb-4 text-center">Keep up to date with our latest news & <br /> special offers.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="enter your email"
              className="w-full px-6 py-4 rounded outline text-white  "
            />
            <IoIosSend size={30}  className="absolute right-1 top-3"/>
          </div>
        </div>

        {/* Center Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Erectile Dysfunction</li>
            <li>Weight Loss</li>
            <li>Men's Hair Loss</li>
            <li>Contact Info</li>
          </ul>
          <p className="mt-4">📧 hello@rizzpharma.com</p>
        </div>

        {/* Right Section - Our Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Company</h3>
          <ul className="space-y-2">
            <li>HIPAA Notice</li>
            <li>Privacy Policy</li>
            <li>Return & Refund Policy</li>
            <li>Terms Of Use</li>
            <li>CCPA Opt-Out</li>
            <li>Opt-Out Preferences</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - HIPAA Logo, Social Icons, and Copyright */}
      <div className="md:flex justify-around items-center mt-8 text-center">
        <div className="gap-4 mb-4">
          <img
            src={Mask}
            alt="HIPAA Compliant"
            className="w-42"
          />
        </div>

        <div >
          <div className="flex gap-2 mb-5">
            <FaFacebookF size={30} className="text-xl hover:text-yellow-400 cursor-pointer" />
            <FaInstagram size={30} className="text-xl hover:text-yellow-400 cursor-pointer" />
          </div>
          <div className="md:flex justify-start">
            <img src={HMS} alt="" />
            <p className="text-md">
            Copyright © 2024 Rizz Pharma All Right Reserved - Built <br /> by Business Web
            Social
          </p>
          </div>
          
        </div>
      </div>
      <div>
        <img src={Branding} alt="" />
      </div>
    </footer>
  );
};

export default Footer;