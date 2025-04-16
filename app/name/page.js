import Image from "next/image";

function Name() {
  return (
    <div className="flex flex-col justify-center items-center rounded bg-white-100 p-3 " style={{height: "40vh"}}>
      <div className="w-full max-w-md text-center">
      
        <h2 className="text-4xl text-3xl text-green-800 mt-5 text-center">SERVICES</h2>
        <p className="mt-3 text-md text-gray-600">HERE ARE THE SERVICES WE OFFER. IF YOU ARE LOOKING FOR SOMETHING SPECIAL — CONTACT US.</p>
        <p className="text-gray-600 text-md">WELL TRY TO ACCOMMODATE ANY REQUESTS YOU MAY HAVE.</p>
      </div>
    </div>
  );
}

export default Name;
