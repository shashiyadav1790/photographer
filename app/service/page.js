 import Image from "next/image";
// import silver from "."
// import gold from ".app/public/gold.jpg"
// import diamond from "./app/public/diamond1.jpg"

function Service() {
    return (
    <div className="container mx-auto px-6 py-5 ">
        <div className="flex items-center justify0center gap-4 mb-5">
            <div className="flex-grow border-t border-gray-400"></div>
            <h2 className="text-2xl text-center">Service</h2>
            <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start p-5 gap-6">
            <div className="flex flex-col w-full md:w-1/3 p-4">
            <Image src="/silver.jpg" width={300} height={300}  alt="image"/>
            </div>
            <div className="w-full md:w-2/3 p-4 ">
                {/* <div className="flex-grow border-t border-gray-400 mb-3"></div> */}
                <span className="flex  justify-between items-center">
                <p className="text-2xl text-green-800">SILVER</p>
                <p>USD $100 - USD $150</p>
                </span>
                
                <div className="flex-grow border-t border-gray-400 mt-3"></div>
                <h2 className=" text-lg mt-5 font-bold">About This Service</h2>
                <p className=" mt-3 text-gray-700 text-sm leading-relaxed">Perfect for Individuals or Small Events.
                The Silver Package offers a simple yet professional photography experience. Ideal for portraits, birthdays, or small gatherings, it includes a 1-hour session with up to 10 professionally edited photos. Enjoy high-quality shots with quick delivery — a great start to capturing your memories.</p>
                <h2 className="text-lg font-bold mt-5">Pricing</h2>
                <h2 className="text-lg font-bold mt-3">⭐ Package 1 – $100</h2>
                <ul className="grid grid-cols-2 gap-4 text-sm mt-2">
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    Includes 10 beautifully edited images
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    One outfit change
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    10 photos, shot in 3 downtown locations
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    Beautifully edited photos
                </li>
                </ul>
                <button className="w-full sm:w-40 md:w-40 lg:w-56 px-2 py-1 mt-3 text-white bg-green-800 text-sm sm:text-base md:text-lg text-center rounded hover:bg-green-700 transition">
                Book
                </button>
            </div>
        </div>

        <div className="flex-grow border-t border-gray-600"></div>

        <div className="flex flex-col md:flex-row justify-center items-start p-5 gap-6">
        <div className="w-full md:w-2/3 p-4 ">
                {/* <div className="flex-grow border-t border-gray-400 mb-3"></div> */}
                <span className="flex  justify-between items-center">
                <p className="text-2xl text-green-800">GOLD</p>
                <p>USD $100 - USD $150</p>
                </span>
                
                <div className="flex-grow border-t border-gray-400 mt-3"></div>
                <h2 className=" text-lg mt-5 font-bold">About This Service</h2>
                <p className=" mt-3 text-gray-700 text-sm leading-relaxed">Perfect for Individuals or Small Events.
                The Silver Package offers a simple yet professional photography experience. Ideal for portraits, birthdays, or small gatherings, it includes a 1-hour session with up to 10 professionally edited photos. Enjoy high-quality shots with quick delivery — a great start to capturing your memories.</p>
                <h2 className="text-lg font-bold mt-5">Pricing</h2>
                <h2 className="text-lg font-bold mt-3">⭐ Package 1 – $100</h2>
                <ul className="grid grid-cols-2 gap-4 text-sm mt-2">
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    Includes 10 beautifully edited images
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    One outfit change
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    10 photos, shot in 3 downtown locations
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    Beautifully edited photos
                </li>
                </ul>
                <button className="w-full sm:w-40 md:w-40 lg:w-56 px-2 py-1 mt-3 text-white bg-green-800 text-sm sm:text-base md:text-lg text-center rounded hover:bg-green-700 transition">
                Book
                </button>
            </div>
            <div className="flex flex-col w-full md:w-1/3 p-4">
            <Image src="/gold.jpg" width={300} height={300}  alt="image"/>
            </div>
        </div>


        <div className="flex-grow border-t border-gray-600"></div>

        <div className="flex flex-col md:flex-row justify-center items-start p-5 gap-6">
            <div className="flex flex-col w-full md:w-1/3 p-4">
            <Image src="/diamond.jpg" width={300} height={300}  alt="image"/>
            </div>
            <div className="w-full md:w-2/3 p-4 ">
                {/* <div className="flex-grow border-t border-gray-400 mb-3"></div> */}
                <span className="flex  justify-between items-center">
                <p className="text-2xl text-green-800">DIAMOND</p>
                <p>USD $100 - USD $150</p>
                </span>
                
                <div className="flex-grow border-t border-gray-400 mt-3"></div>
                <h2 className=" text-lg mt-5 font-bold">About This Service</h2>
                <p className=" mt-3 text-gray-700 text-sm leading-relaxed">Perfect for Individuals or Small Events.
                The Silver Package offers a simple yet professional photography experience. Ideal for portraits, birthdays, or small gatherings, it includes a 1-hour session with up to 10 professionally edited photos. Enjoy high-quality shots with quick delivery — a great start to capturing your memories.</p>
                <h2 className="text-lg font-bold mt-5">Pricing</h2>
                <h2 className="text-lg font-bold mt-3">⭐ Package 1 – $100</h2>
                <ul className="grid grid-cols-2 gap-4 text-sm mt-2">
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    Includes 10 beautifully edited images
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    One outfit change
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    10 photos, shot in 3 downtown locations
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    Beautifully edited photos
                </li>
                </ul>
                <button className="w-full sm:w-40 md:w-40 lg:w-56 px-2 py-1 mt-3 text-white bg-green-800 text-sm sm:text-base md:text-lg text-center rounded hover:bg-green-700 transition">
                Book
                </button>
            </div>
        </div>

          </div> 
          );
}

export default Service;