import React from 'react';
import Image from "next/image";
import { useTheme } from "next-themes";

const ServiceCard = ({ imgSrc, title, desc }) => {
  const { theme } = useTheme(); // Accessing the current theme

  return (
    <div className={`transition-transform transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out bg-${theme === 'dark' ? 'gray-800' : 'white'} rounded-lg p-6 shadow-lg`}>
      <Image
        src={imgSrc}
        width={120}
        height={120}
        alt="service"
        className="mx-auto"
      />
      <div className="mt-4">
        <h3 className={`text-lg font-semibold text-${theme === 'dark' ? 'gray-100' : 'gray-800'}`}>{title}</h3>
        <p className={`text-sm font-medium text-${theme === 'dark' ? 'gray-400' : 'gray-600'} mt-3`}>{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const { theme } = useTheme(); // Accessing the current theme

  return (
    <section id="services">
      <div className="container mx-auto px-5 md:px-16">
        <span className="text-center block text-base text-blue-700 uppercase font-bold tracking-wide" style={{ color: '#008073' }}>Our Expertise</span>
        <h2 className={`text-center text-2xl font-bold text-${theme === 'dark' ? 'gray-100' : 'gray-900'} mt-2`}>Explore What We Offer</h2>
        <p className={`text-center text-${theme === 'dark' ? 'gray-400' : 'gray-600'} text-base mt-2 max-w-2xl mx-auto`}>
          We provide cutting-edge services tailored to meet your business needs, using innovative solutions and industry best practices.
        </p>

        {/* Grid Layout: Responsive with 4 in a row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-10">
        <ServiceCard
             imgSrc="images/da.png"
            title="Data Analysis & Insights"
            desc="Extract powerful insights from data using cutting-edge tools. We specialize in transforming raw data into meaningful metrics that drive business growth."
          />
          <ServiceCard
            imgSrc="images/ai.png"
            title="AI-Integrated Tools"
            desc="Enhance productivity and efficiency with AI-powered tools, streamlining processes and decision-making without the need for machine learning."
          />
          <ServiceCard
            imgSrc="images/bd.png"
            title="Big Data Solutions"
            desc="Our Big Data services provide scalable infrastructure to handle and analyze vast amounts of data in real-time, helping you stay ahead in a data-driven world."
          />
          <ServiceCard
            imgSrc="images/ca.png"
            title="Cloud-Based Analytics"
            desc="Leverage cloud technology for flexible, secure, and scalable analytics solutions that offer real-time data access from anywhere."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
