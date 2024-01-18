import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-xl sm:text-2xl md:text-3xl 2xl:text-xl font-semibold">
          <p className="capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">Welcome to Skillscrolls </p>
          <p className="capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">Pioneering EdTech and <br></br>IT Consulting for a Data-Driven Future!</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
        Empowering individuals and businesses through transformative solutions in Data Management and Analysis. At Skillscrolls, we are more than just consultants; we're architects of success in the world of data technologies.


        </p>
        <button className="text-base sm:text-lg hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600 rounded-full">
          <Link href="https://www.linkedin.com/company/skillscrolls/" target="_blank">
            Explore
          </Link>
        </button>
      </div>
      <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={"/ccc.png"}
            width={800}
            height={400}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

