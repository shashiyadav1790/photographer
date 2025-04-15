import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex-grow border-t border-gray-400"></div>
        <h2 className="text-2xl text-center font-semibold"></h2>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Responsive Flex Direction */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="p-4 w-full md:w-1/2 mt-5">
          <p className="text-lg p-5" style={{ fontSize: '2rem', letterSpacing: '8px' }}>CONTACT</p>
          <p className="text-sm p-5 items-center justify-center" style={{ fontStyle: 'italic', fontSize: '1.3rem' }}>Hansh Photography</p>
          <p className="p-5">____</p>
          <div className="flex flex-col gap-4 text-center justify-center text-xl mt-2 mb-5 p-5">
            <a href="https://www.instagram.com/ritik.27_0/" className="hover:text-green-400"><FaInstagram /></a>
            <p>Connect With Us !</p>
            <a href="https://www.facebook.com/jituraj.raj.73" className="hover:text-green-400"><FaFacebookF /></a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex justify-center items-center p-4 w-full md:w-1/2">
          <form className="w-full max-w-2xl space-y-4">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold mb-1">NAME</label>
              <input type="text" placeholder="Enter your name" className="border border-gray-300 rounded p-2 w-full" />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold mb-1">EMAIL</label>
              <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded p-2 w-full" />
            </div>

            {/* Contact */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold mb-1">CONTACT</label>
              <input type="text" placeholder="Enter your contact number" className="border border-gray-300 rounded p-2 w-full" />
            </div>

            {/* Package Dropdown */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold mb-1">PACKAGE</label>
              <select className="border border-gray-300 rounded p-2 w-full">
                <option value="">Select a Package</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="diamond">Diamond</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold mb-1">MESSAGE</label>
              <textarea placeholder="Your message..." className="border border-gray-300 rounded p-2 w-full h-24 resize-none" />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
            <button className="w-full md:w-auto bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
