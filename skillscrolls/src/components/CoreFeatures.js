import React, { useState } from "react";
import Image from "next/image";

const CoreFeatures = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col gap-4 flex-1 p-6 md:px-12 lg:px-24">
      <span className="uppercase block font-semibold tracking-widest " style={{ color: '#008073' }}>
        CORE FEATURES
      </span>
      <h2 className="capitalize text-2xl md:text-3xl xl:text-5xl font-bold my-3">
      Innovative Solutions for Data Mastery
      </h2>
      <h4 className="capitalize text-l md:text-xl xl:text-2xl font-bold my-3">
      Innovative Product Development for Practical Solutions
      </h4>
      {/* <p className="text-lg leading-loose text-justify">
      we go beyond traditional software development. We specialize in crafting holistic products and solutions aimed at solving real-world problems for organizations, institutions, and SMEs. Our multidisciplinary team is committed to creating impactful solutions that address your specific challenges and drive tangible results.
      </p> */}
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
      <a className="text-l font-bold">Immersive Learning Experiences:</a> Engage in interactive simulations, gamified learning, and augmented reality to bring data concepts to life.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">AI-Powered Personalization:</a> Experience a personalized learning journey tailored to your individual learning style and pace, leveraging AI-driven algorithms.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Real-Time Collaboration:</a> Connect with peers and mentors in collaborative learning environments, fostering knowledge sharing and problem-solving.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Project-Based Learning:</a> Apply your skills to real-world data challenges through hands-on projects, simulating industry scenarios.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Data Science Playground:</a> Explore a virtual data playground where you can experiment with various data sets, algorithms, and tools.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Data-Driven Transformation:</a> Partner with our experts to unlock the full potential of your data, driving innovation and business growth.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Ethical AI Implementation:</a> Ensure responsible and ethical use of AI technologies, aligning with your organization's values.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Predictive Analytics Insights:</a> Gain a competitive edge by leveraging predictive analytics to forecast future trends and make data-driven decisions.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Cloud-Native Solutions:</a> Benefit from scalable and flexible data solutions built on cloud infrastructure, optimizing performance and cost-efficiency.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Data Visualization Storytelling:</a> Transform data into compelling narratives through innovative visualization techniques, engaging stakeholders and driving action.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Future-Proof Skills Development:</a> Acquire the in-demand skills needed to thrive in the data-driven future, including machine learning, deep learning, and natural language processing.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Lifelong Learning Culture:</a> Foster a culture of continuous learning and development, empowering individuals to stay ahead of the curve.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Impact-Driven Solutions:</a> Contribute to meaningful outcomes by applying data-driven insights to address societal challenges and create positive change.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Global Community:</a> Connect with a global network of data enthusiasts, sharing knowledge, collaborating on projects, and building lasting relationships.
    </p>
    <p className="text-lg leading-loose text-justify">
      <a className="text-l font-bold">Ethical Data Practices:</a> Adhere to ethical data principles, ensuring data privacy, security, and fairness in all operations.
    </p>
  </>
)}

<button
  className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white hover:shadow-2xl rounded-full"
  style={{
    backgroundColor: '#008073',
    borderColor: '#008073',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#008073';
    e.target.style.borderColor = '#008073';
    e.target.style.boxShadow = `0px 4px 20px #008073`;
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#008073';
    e.target.style.color = '#fff';
    e.target.style.borderColor = 'transparent';
    e.target.style.boxShadow = 'none';
  }}
  onClick={toggleExpansion}
>
  {expanded ? "See Less" : "See More"}
</button>

    </div>
  );
};

export default CoreFeatures;
