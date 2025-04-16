import Image from "next/image";


function About() {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex-grow border-t border-gray-400"></div>
        <h2 className="text-2xl text-center font-semibold">About Me</h2>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Section - Text */}
        <div className="w-full md:w-2/3 text-gray-700 text-md leading-relaxed">
          <p>
            Hello! Im <span className="font-semibold">Ritik</span>, a dedicated and enthusiastic photographer with a keen eye for capturing lifes most meaningful moments through the lens. My passion lies in creating timeless visuals — whether its portraits, landscapes, events, or candid street photography
          </p>
          <br />
          <p>
          Currently pursuing my Bachelors degree in Computer Applications (BCA) with a specialization in Computer Science & IT at Aisect University, I blend my technical background with artistic storytelling to bring a unique perspective to my work.
          </p>
          <br />
          <p>
          My journey into photography began with curiosity, and over time, it transformed into a true calling. I’m fascinated by how a single frame can hold an entire story, evoke emotion, or freeze a fleeting moment in time. From conceptual shoots to spontaneous captures, I thrive on experimenting with light, composition, and editing to craft compelling images.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/3 flex justify-center ">
          <Image src="/ritik.png" alt="Shashi Yadav" className="rounded-lg object-contain shadow-lg" width={250} height={250} />
        </div>
      </div>
    </div>
  );
}

export default About;
