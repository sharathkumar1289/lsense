import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl hover:text-teal-600 transition-colors duration-300">
              <span style={{ color: '#008073' }}>Skill</span>Scrolls
            </Link>
            <p className="max-w-xs mt-4 text-sm">
              EdTech and IT Consulting Firm
            </p>

            <div className="flex mt-8 space-x-6">
              {/* <Link
                href="https://www.facebook.com/skillscrolls/"
                target="_blank"
              >
                <FacebookOutlinedIcon className="text-black hover:text-teal-600 hover:-translate-y-1 transition-all duration-300" />
              </Link> */}
              
              <Link
                href="https://www.linkedin.com/company/skillscrolls/"
                target="_blank"
              >
              
                <LinkedInIcon className="text-black hover:text-teal-600 hover:-translate-y-1 transition-all duration-300" />
                </Link>
              
              {/* </Link>
              <Link href="https://twitter.com/skillscrolls/" target="_blank">
                <TwitterIcon className="text-black hover:text-teal-600 hover:-translate-y-1 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/skillscrolls/"
                target="_blank"
              >
                <InstagramIcon className="text-black hover:text-teal-600 hover:-translate-y-1 transition-all duration-300" />
              </Link> */}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-sm leading-loose">
                  Address: C-151, GRC Brundavan, ITI Layout, Nayandahalli, Bangalore, Karnataka, India
                </p>
                <p className="text-sm leading-loose">
                  Email: <a className='underline'>contact@skillscrolls.in</a>
                </p>
                <p className="text-sm leading-loose">
                  Phone: +91 8328297904
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Data Analysis Technologies</h3>
                <p className="text-sm leading-loose hover:text-teal-600 transition-colors duration-300">
                  - Power BI
                </p>
                <p className="text-sm leading-loose hover:text-teal-600 transition-colors duration-300">
                  - Azure Data Factory
                </p>
                <p className="text-sm leading-loose hover:text-teal-600 transition-colors duration-300">
                  - SQL Server
                </p>
                <p className="text-sm leading-loose hover:text-teal-600 transition-colors duration-300">
                  - Python for Data Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2024 SkillScrolls - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
