import React, { useState } from "react";
import Image from "next/image";

const CoreFeatures = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col gap-4 flex-1 p-6 md:px-12 lg:px-24">
      <span className="text-rose-600 uppercase block font-semibold tracking-widest">
        CORE FEATURES
      </span>
      <h2 className="capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
        QuantumLeap: Skillscrolls Unleashed
      </h2>
      <p className="text-lg leading-loose text-justify">
        Embark on a transformative odyssey with Skillscrolls, where every
        feature is a quantum leap toward unprecedented excellence. Dive into
        the realm of "Data Symphony," orchestrated by Skillscrolls' unparalleled
        mastery, transforming raw data into harmonious and actionable insights.
        Our EdTech wizardry facilitates seamless transitions into data-centric
        roles, propelling careers into the stratosphere.
      </p>
      <p className="text-lg leading-loose text-justify">
        Journey through the "Tech Cosmos" with Skillscrolls, where we not only
        explore but pioneer the frontiers of data science, machine learning,
        and cutting-edge technologies like Azure, Fabric, Databricks, and Power
        Automate. Your success story is meticulously crafted with "IT Artistry,"
        where our tailored solutions evolve alongside your unique business
        needs, from data management to cloud computing.
      </p>
      {expanded && (
        <>
          <p className="text-lg leading-loose text-justify">
            Welcome to the "Innovation Nexus," Skillscrolls' hub where ideas
            don't just flourish but transcend into solutions that redefine
            industries. As the "Sentinels of Data Trust," our commitment to
            security is unwavering, ensuring your sensitive information is
            guarded with the utmost precision.
          </p>
          <p className="text-lg leading-loose text-justify">
            In our universe, growth knows no bounds. "Scalability Unleashed" is
            not just a phrase but a reality, adapting seamlessly to the rhythm
            of your business expansion. Consult with the "Maestros of Success" at
            Skillscrolls, where expert guidance shapes strategies that propel
            you to the zenith of achievement.
          </p>
          <p className="text-lg leading-loose text-justify">
            "Continuous Learning Constellation" is where Skillscrolls resides,
            offering celestial opportunities to stay ahead in an ever-evolving
            cosmos of knowledge. Join the "Thrive Tribe" - our vibrant
            community, where collaboration transcends, and success echoes in
            every shared insight and question.
          </p>
          <p className="text-lg leading-loose text-justify">
            Skillscrolls doesn't just provide solutions; it crafts a cosmic
            journey where every feature is a star in the constellation of your
            unparalleled success. Welcome to Skillscrolls Unleashed – where the
            extraordinary is just the beginning.
          </p>
        </>
      )}
      <button
        className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:shadow-rose-600 hover:shadow-2xl rounded-full"
        onClick={toggleExpansion}
      >
        {expanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default CoreFeatures;
