import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Button from "../Components/Buttons/Button";

const Contact = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl  bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"></textarea>
          </div>
          <Button btntext="Send Message"></Button> 
        </form>

        {/* Social Media Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">Or reach us through:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-pink-600 text-2xl hover:text-pink-800"><FaInstagram /></a>
            <a href="#" className="text-gray-700 text-2xl hover:text-gray-900"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
