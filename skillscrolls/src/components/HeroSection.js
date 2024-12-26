import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <p className="capitalize text-2xl md:text-3xl xl:text-4xl font-bold my-3">
          Welcome to <span className="text-[#008073]" style={{ color: '#008073' }}>SkillScrolls</span>
        </p>
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-xl sm:text-2xl md:text-3xl 2xl:text-xl font-semibold">
          <p className="capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
            EdTech & IT Consulting Firm <br />
          </p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
          Skillscrolls is an EdTech and IT Consultant Firm primarily focused on providing solutions in Data Management and Analysis. As an EdTech, we help people transition into data technologies and roles.
        </p>
        <button
          className="text-base sm:text-lg hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white rounded-full"
          style={{
            backgroundColor: '#008073',
            borderColor: 'transparent',
            color: '#fff',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#008073';
            e.target.style.borderColor = '#008073';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#008073';
            e.target.style.color = '#fff';
            e.target.style.borderColor = 'transparent';
          }}
        >
          <Link href="https://www.linkedin.com/company/skillscrolls/" target="_blank">
            Explore
          </Link>
        </button>
      </div>
      {/* 
      <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={"/herr.png"}
            width={650}
            height={300}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div> 
      */}
    </section>
  );
};

export default HeroSection;
