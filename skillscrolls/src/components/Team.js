import React, { useState } from 'react';
import { useTheme } from 'next-themes';

const Portfolio = () => {
    const { theme } = useTheme();
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);

    const toggleExpansion1 = () => {
        setExpanded1(!expanded1);
    };

    const toggleExpansion2 = () => {
        setExpanded2(!expanded2);
    };

    const toggleExpansion3 = () => {
        setExpanded3(!expanded3);
    };

    return (
        <section id="portfolio" className={`py-12 ${theme === 'dark' ? 'bg-black-900 text-gray-300' : 'bg-white text-gray-700'}`}>
            <div className="container mx-auto px-5 md:px-16">
                <span className="text-rose-600 uppercase block font-semibold tracking-widest">
                    Projects
                </span>
                <h2 className="capitalize text-2xl md:text-3xl xl:text-5xl font-bold my-3">
                    Bridging Solutions to Real-World Challenges
                </h2>
                <h4 className="capitalize text-l md:text-xl xl:text-2xl font-bold my-3">
                    Innovative Product Development for Practical Solutions
                </h4>
                <div className={`flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-white-700' : 'bg-white'} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all ease-in-out duration-400 overflow-hidden text-${theme === 'dark' ? 'white' : 'black'} rounded-lg shadow-2xl p-3 group`}>
                    <div className={` p-6 rounded-lg`}>
                        <h3 className="text-xl font-semibold mb-4">AnyTime Print - ATP</h3>
                        <p className="text-lg leading-loose">
                            AnyTime Print (ATP) revolutionizes printing by allowing users to upload documents, select printing options, and make payments directly through the application. Say goodbye to long queues and enjoy the convenience of printing from anywhere, anytime.
                        </p>
                        {expanded1 && (
                            <div className="mt-4">
                                <p className="text-lg leading-loose">
                                    <span className="font-bold">Key Features:</span> Seamless document upload, customizable printing options, secure online payments.
                                </p>
                                <p className="text-lg leading-loose">
                                    <span className="font-bold">Benefits:</span> Convenient, time-saving, hassle-free printing experience for users.
                                </p>
                            </div>
                        )}
                        <button
                            className={`mt-4 text-sm font-semibold py-2 px-4 bg-rose-600 text-white rounded hover:bg-rose-700 ${theme === 'dark' ? 'hover:bg-gray-700' : ''}`}
                            onClick={toggleExpansion1}
                        >
                            {expanded1 ? "See Less" : "See More"}
                        </button>
                    </div>

                    {/* Project 2 */}
                    <div className={` p-6 rounded-lg`}>
                        <h3 className="text-xl font-semibold mb-4">eDisplay</h3>
                        <p className="text-lg leading-loose">
                            eDisplay enhances organizational communication through automated display systems for TVs and monitors. With an intuitive admin portal, easily manage and update content to keep employees informed and engaged.
                        </p>
                        {expanded2 && (
                            <div className="mt-4">
                                <p className="text-lg leading-loose">
                                    <span className="font-bold">Key Features:</span> Automated content display, intuitive admin portal, multimedia support.
                                </p>
                                <p className="text-lg leading-loose">
                                    <span className="font-bold">Benefits:</span> Improved communication, increased employee engagement, dynamic content delivery.
                                </p>
                            </div>
                        )}
                        <button
                            className={`mt-4 text-sm font-semibold py-2 px-4 bg-rose-600 text-white rounded hover:bg-rose-700 ${theme === 'dark' ? 'hover:bg-gray-700' : ''}`}
                            onClick={toggleExpansion2}
                        >
                            {expanded2 ? "See Less" : "See More"}
                        </button>
                    </div>

                    {/* Project 3 */}
                    <div className={` p-6 rounded-lg`}>
                        <h3 className="text-xl font-semibold mb-4">Smart Classrooms</h3>
                        <p className="text-lg leading-loose">
                            Smart Classrooms revolutionize traditional teaching methods with seamless integration of digital technologies. With a user-friendly application and wireless connectivity, educators effortlessly deliver presentations and course materials.
                        </p>
                        {expanded3 && (
                            <div className="mt-4">
                                <p className="text-lg leading-loose">
                                    <span className="font-bold">Key Features:</span> Wireless connectivity, user-friendly interface, seamless presentation delivery.
                                </p>
                                <p className="text-lg leading-loose">
                                    <span className="font-bold">Benefits:</span> Enhanced teaching experience, improved student engagement, efficient content delivery.
                                </p>
                            </div>
                        )}
                        <button
                            className={`mt-4 text-sm font-semibold py-2 px-4 bg-rose-600 text-white rounded hover:bg-rose-700 ${theme === 'dark' ? 'hover:bg-gray-700' : ''}`}
                            onClick={toggleExpansion3}
                        >
                            {expanded3 ? "See Less" : "See More"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
