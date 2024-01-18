import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  // Splitting the description into two parts: text before ':' and text after ':'
  const [descBeforeColon, descAfterColon] = desc.split(':');

  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>
          <span className="font-bold">{descBeforeColon}:</span>
          {descAfterColon}
        </p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section id="features" className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center">QUALITY FEATURES</span>
      <h2 className="title text-center">Amazing useful features</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title=" Powerful Data Analysis"
          desc="Insights Unleashed: Elevate Decision-Making with Skillscrolls. Transform raw data into actionable brilliance using Power BI."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title=" Customized IT Solutions"
          desc="Tailored IT Mastery: Skillscrolls covers it all - from data management to cloud solutions. Your business, your unique IT success story."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="EdTech Transition Support"
          desc="Chart Your Career in Data: Seamless transitions, tailored training. Skillscrolls guides you to excel in data-centric roles with confidence."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Expert Consultation"
          desc="Navigate Success: Skillscrolls' experts guide your EdTech and IT journey. Personalized consultations, strategic success at every turn."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
