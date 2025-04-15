import Image from "next/image";

function Name() {
  return (
    <div className="flex flex-col justify-center items-center rounded bg-white-100" style={{height: "90vh"}}>
      <div className="w-full max-w-md text-center">
        <div className="relative w-full h-50 z-10">
          <Image
            src="/camera1.webp"
            alt="camera"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-4xl font-bold mt-5">Hi, Im Ritik</h2>
        <p className="mt-3 text-lg">I capture moments that tell your story.</p>
      </div>
    </div>
  );
}

export default Name;
