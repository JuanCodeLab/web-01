import Image from "next/image";

const Hero = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-full max-h-full md:block">
          <Image
              src="/images/hero.png"
              fill
              className="object-contain"
              alt="Documents"
          />
        </div>
      </div>
    );
  }
  
  export default Hero;