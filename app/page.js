
import Navbar from "./navbar/page.js";
import Name from "./name/page.js";
import About from "./about/page.js";
import Experience from "./expirence/page.js";
import Service from "./service/page.js";
import Contact from "./contact/page.js";
import Footer from "./footer/page.js";
import SignUp from "./signup.js";
function Page() {


  return ( 
    <div >
     
    <Name/>
    <About/>
    <Experience/>
    <Service/>
   <Contact/> 

  </div>
   );
}

export default Page;