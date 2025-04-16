
//           import Image from "next/image";
// import Login from "../public/sk.png";

// function Navbar() {
//   return (
//     <div className="w-full bg-white shadow-md sticky top-0">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo Section */}
//         <div className="flex items-center gap-2">
//           <Image src={Login} alt="Logo" width={60} height={60} />
//           <span className="text-lg font-semibold ml-3 " style={{ color: '#1a8885' }}></span>
//         </div>

//         {/* Nav Links */}
//         <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
//           <a href="#about" className="hover:text-blue-600 transition">About</a>
//           <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
//           <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
//           <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex gap-4">
//           <button className="border px-4 py-1 rounded hover:bg-gray-100 transition">Resume</button>
//           <button className="border px-4 py-1 rounded hover:bg-gray-100 transition">Hire me</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

'use client';  // Add this directive at the top of the file
import Link from "next/link";
import Image from "next/image"; 

import { useState } from "react";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full bg-white shadow-md sticky top-0">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Reference the image directly from public directory */}
          <Link href="/"><Image src="/sk.png" alt="Logo" className="bg-white-800" width={65} height={65} /> </Link>
      
          <span className="text-lg font-semibold ml-3 " style={{ color: '#1a8885' }}></span>
        </div>

        {/* Nav Links (for larger screens) */}
        <div className="hidden md:flex gap-8 text-md font-medium text-gray-700">
          <Link href="/" className="hover:text-green-800  transition hover-text-shadow">Home</Link>
          <Link href="/service" className="hover:text-green-800 transition hover-text-shadow">Service</Link>
          <Link href="/expirence" className="hover:text-green-800 transition hover-text-shadow">Experience</Link>
          <Link href="/contact" className="hover:text-green-800 transition hover-text-shadow">Contact</Link>
          <Link href="/about" className="hover:text-green-800 transition hover-text-shadow">About</Link>
        </div>

        <Link href="/">
        <h2 className="text-sm p-5 text-bold text-center text-green-800 hover:text-gray-800  items-center justify-center" style={{ fontStyle: 'italic', fontSize: '1.3rem', letterSpacing: "4px",textShadow: "2px 2px 5px gray" }}>HANSH Photography</h2>
        </Link>

        {/* Hamburger Icon (visible on mobile) */}
                <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      
       
       

        {/* Mobile Menu (hidden by default, toggled by hamburger icon) */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} flex flex-col gap-4 absolute top-20 left-0 w-full bg-white shadow-lg py-4 px-6`}>
        <Link href="/" className="hover:text-green-800 transition">Home</Link>
          <Link href="/service" className="hover:text-green-800 transition">Service</Link>
          <Link href="/expirence" className="hover:text-green-800 transition">Experience</Link>
          <Link href="/contact" className="hover:text-green-800 transition">Contact</Link>
          <Link href="/about" className="hover:text-green-800 transition">About</Link>
        </div>

       
      </div>
    </div>
  );
}

export default Navbar;
