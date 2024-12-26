import Image from "next/image";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt={`${title} image`}
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="leading-loose">{description}</p>
    </div>
  );
};

const Community = () => {
  return (
    <section className="container mx-auto px-16 lg:px-32">
      <div>
        <span className="service-name text-center pb-12" style={{ color: '#008073' }}>
          COMMUNITY
        </span>
       
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto">
        <Card
          imgSrc="/community/1.png"
          title="Join the Data Community"
          description="Collaborate with experts and enthusiasts in data analysis."
        />
        <Card
          imgSrc="/community/2.png"
          title="Data-Driven Communication"
          description="Engage in meaningful discussions about data insights."
        />
        <Card
          imgSrc="/community/3.png"
          title="Access to Data Resources"
          description="Get the latest tools and resources for data analysis."
        />
      </div>
    </section>
  );
};

export default Community;
