import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting normally
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-6 min-h-screen">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        {/* Contact Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32 focus:outline-none resize-none"
              required
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="p-2 text-center bg-secondary text-black rounded-md font-semibold mt-3 hover:bg-accent hover:scale-110 hover:text-white duration-200 ease-in-out"
          >
            Send Message
          </button>
        </div>

        {/* Success Modal */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-white rounded-lg shadow-xl">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for contacting us. Your message has been sent to the authorities successfully. 
                We will get back to you as soon as possible.
              </p>
            </div>
            <div className="modal-action justify-center">
              <button 
                onClick={() => document.getElementById("my_modal_1").close()}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>

        {/* Social Media Links */}
        <div className="mt-8 text-center border-t pt-6">
          <p className="text-gray-700 mb-4">Or reach us through:</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-blue-600 text-2xl hover:text-blue-800 transition-colors duration-200">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-600 transition-colors duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-600 text-2xl hover:text-pink-800 transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-700 text-2xl hover:text-gray-900 transition-colors duration-200">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;