import Image from "next/image";
function Happy() {
    return (
        <div className="container px-6 py-8 mx-auto">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
              {/* Left Section - Text */}
              
              <div className="w-full md:w-2/3 text-gray-700 text-md leading-relaxed mb-3">
                <p>
                Hawaii is a magical destination for a wedding. We can make sure every moment is captured in a stunning way so you can remember every detail long after you return home and for years to come.
               <br></br>
                I cultivated an amazing team of professional Hawaii Photographers in Maui, Oahu, Kauai and the Big Island who share my vision of lovely light captured moments and amazing service. 
                <br></br>
                No mattef6r which one of our photographers is behind the camera, the images and experience will be amazing! We are one of the few photography <br></br>teams in Hawaii with a full time professional editor on staff who is an expert in the field.  Each image we edit is professionally reviewed before it gets released to our clients to ensure it fits with our brand and quality standards. We all have a passion for beautiful photos
                </p>
                <h1 className="text-bold text-green-800 text-4xl mb-5 mt-5">... you re getting married!</h1>
              </div>
      
              {/* Right Section - Image */}
              <div className="w-full  md:w-1/3 flex justify-center flex-col items-center ">
              <h1 className="text-bold text-green-800 text-4xl mb-5 ">Cue the happy tears...</h1>
                <Image src="/happy.jpg" alt="Shashi Yadav" className="rounded-lg object-contain shadow-lg" width={250} height={250} />
              </div>
            </div>
            </div>
     );
}

export default Happy;