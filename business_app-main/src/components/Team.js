import React, { useState } from "react";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const TeamCard = ({ imgSrc, name, title, fblink, gitlink, linkedinlink }) => {
  return (
    <div  className="relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
      <Image
        src={imgSrc}
        width={130}
        height={130}
        alt="team member"
        className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-rose-500 mx-auto"
      />
      <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
      <p className="text-center sm:text-base text-sm">{title}</p>
      <div className="flex md:flex-col gap-3 md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-rose-600">
        {fblink && (
          <Link target="_blank" href={fblink}>
            <FacebookRoundedIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        )}
        {gitlink && (
          <Link target="_blank" href={gitlink}>
            <InstagramIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        )}
        {linkedinlink && (
          <Link target="_blank" href={linkedinlink}>
            <LinkedInIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const handleSeeMoreClick = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  const handleSeeLessClick = () => {
    setDisplayCount(initialDisplayCount);
  };

  const teamMembers = [
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    {
      imgSrc: "/team/1.png",
      name: "Saimon Harmer",
      title: "CEO and Founder",
      fblink: "https://www.facebook.com/saimonharmer",
      gitlink: "https://github.com/saimonharmer",
      linkedinlink: "https://www.linkedin.com/in/saimonharmer/",
    },
    // Add other team members similarly
  ];

  return (
    <section id="Team" className="container mx-auto px-5 md:px-16 lg:px-24">
      <span className="service-name text-center">OUR TEAM</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        The most qualified and talented individuals
      </h2>

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
        {teamMembers.slice(0, displayCount).map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>

      <div className="flex justify-between">
        {displayCount < teamMembers.length && (
          <button
            className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:shadow-rose-600 hover:shadow-2xl rounded-full"
            onClick={handleSeeMoreClick}
          >
            See More
          </button>
        )}

        {displayCount > initialDisplayCount && (
          <button
            className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:shadow-rose-600 hover:shadow-2xl rounded-full"
            onClick={handleSeeLessClick}
          >
            See Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Team;
