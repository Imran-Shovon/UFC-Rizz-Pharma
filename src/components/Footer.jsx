import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Branding from "../assets/Branding.png";
import FooterImage from "../assets/Footer.png";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-t from-[#1a1a2e] to-[#4b0082] text-white py-12 px-8"
      style={{ minHeight: "300px", backgroundImage: `url(${FooterImage})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Email Subscription */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Let's Stay In Touch</h3>
          <p className="mb-4">Keep up to date with our latest news & special offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="enter your email"
              className="w-full px-4 py-2 rounded-l-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-r-full hover:bg-yellow-300 transition">
              →
            </button>
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
      <div className="mt-8 text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
          <img
            src="path/to/hipaa-logo.png"
            alt="HIPAA Compliant"
            className="h-10"
          />
          <div className="flex gap-2">
            <FaFacebookF className="text-xl hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>
        <p className="text-sm">
          Copyright © 2024 Rizz Pharma All Right Reserved - Built by Business Web
          Social
        </p>
      </div>
      <div>
        <img src={Branding} alt="" />
      </div>
    </footer>
  );
};

export default Footer;