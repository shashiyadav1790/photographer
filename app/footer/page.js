import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (<div className="container mx-auto px-6 py-5">
         <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-grow border-t border-gray-400"></div>
            <div className="flex-grow border-t border-gray-400"></div>
         </div>
         <div className="flex flex-col justify-center items-center p-4">
            <h2 className="text-grey-500 font-bold">Hansh Photographer</h2>
            <div className="flex justify-center justify-between p-4 gap-8 ">
                <a  className="hover:text-green-800" href="#">About</a>
                <a  className="hover:text-green-800" href="#">Experience</a>
                <a  className="hover:text-green-800" href="#">Service</a>
                <a className="hover:text-green-800" href="#">Contact</a>
            </div>
            <div className="flex space-x-4 text-xl mt-2 mb-5">
            <a href="https://www.instagram.com/ritik.27_0/" className="hover:text-green-400"><FaInstagram /></a>
            <a href="https://www.facebook.com/jituraj.raj.73" className="hover:text-green-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-400"><FaTwitter /></a>
            <a href="#" className="hover:text-green-400"><FaLinkedinIn /></a>
            </div>

            <p>© 2025 Hansh Photography. All rights reserved.</p>

            <p className="justify-center text-center mt-2 text-sm mb-3 text-gray-800">
      Developed with ❤️ by <a href="https://shashiyadav.vercel.app" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Shashi Surya</a> — MERN Stack Developer
    </p>

         </div>
        

    </div>  );
}

export default Footer;