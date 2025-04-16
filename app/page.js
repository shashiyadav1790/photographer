
import Navbar from "./navbar/page.js";
import Name from "./name/page.js";
import About from "./about/page.js";
import Experience from "./expirence/page.js";
import Service from "./service/page.js";
import Contact from "./contact/page.js";
import Happy from "./happy/page.js";

function Page() {


  return ( 
    <div >
     
    <Name/>
    <Service/>
    <About/>
    <Experience/>
    <Happy/>
   <Contact/> 


  </div>
   );
}

export default Page;