function Experience() {
    return (
      <div className="container mx-auto px-6 py-5">
        {/* Heading Section */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="text-2xl text-center">Experience</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
  
        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-center items-start p-5 gap-6">
          {/* Left Section */}
          <div className="flex flex-col w-full md:w-1/3 p-4">
            <h2 className="text-lg font-semibold mb-5">Photographer</h2>
            <p className="text-sm text-gray-600">Freelance / Creative Studio</p>
            <div className="border-t border-gray-300 my-2"></div>
            <p className="text-sm text-gray-500">Mar 2022 - Present</p>
          </div>
  
          {/* Vertical Line (only on medium+ screens) */}
          <div className="hidden md:block h-65 border-l-2 border-gray-300 mx-4"></div>
  
          {/* Right Section */}
          <div className="w-full md:w-2/3 p-4">
            <ul className="list-disc pl-6 text-md text-gray-700 space-y-2">
              <li>
              Captured and curated compelling imagery for events, portraits, and lifestyle sessions with a strong focus on composition and detail.
              </li>
              <li>
              Developed a streamlined post-production workflow using professional editing tools to enhance the mood and quality of each shot.
              </li>
              <li>
              Collaborated with clients to interpret their visions and deliver personalized photography experiences that tell unique stories.
              </li>
              <li>
              Engaged in creative brainstorming sessions to continuously refine artistic direction, lighting techniques, and overall visual style.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Experience;
  