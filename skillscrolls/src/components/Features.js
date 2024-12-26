import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={120}
        height={120}
        alt="features"
        className="mx-auto"
        
      />
      
      <div className="mt-8">
        
    
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      {/* <span className="service-name text-center" style={{ color: '#008073' }}>WHATS THE FUNCTION</span> */}
      <h2 className="title text-center">Why Skillscrolls?</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="images/CS.png"
          title="Customized Solutions"
          desc="SkillScrolls offers personalized learning paths and industry-specific curricula to meet individual needs, providing flexible learning options for a customized experience."
        />
        <FeatureProduct
          imgSrc="images/f22.png"
          title="Innovation and Technology"
          desc=" SkillScrolls utilizes AI-powered tools and interactive content to enhance the learning experience, optimizing outcomes through data-driven insights."
        />
        <FeatureProduct
          imgSrc="images/ps.png"
          title="Problem-Solving Expertise"
          desc="SkillScrolls offers hands-on project experience, expert mentorship, and career guidance to equip learners for real-world challenges."
        />
        <FeatureProduct
          imgSrc="images/ss.png"
          title="Continuous Support"
          desc="SkillScrolls provides ongoing updates, technical assistance, and a supportive community to ensure learners have a seamless and successful learning experience."
        />
      </div>
    </section>
  );
};

export default Features;
