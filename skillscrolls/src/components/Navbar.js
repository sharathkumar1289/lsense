import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import Image from 'next/image';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(""); // Initialize selectedItem state as empty string
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();

  useEffect(() => {
    window.onscroll = () => {
      setMounted(true);
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  return (
    <div
      ref={navbar}
      className={`${
        theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
      } w-full z-50 fixed top-0 left-0 py-4 mb-10`}
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">
      <Image
        src="logow.jpeg"
        alt="Logo"
        width={100} // Adjust the width as needed
        height={80} // Adjust the height as needed
        className="mr-2" // Optional: Adds some margin to the right of the logo
      />
        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"} ${
              theme === "dark"
                ? "bg-[#121212] text-white"
                : "bg-white text-black"
            } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <button
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } md:hidden absolute top-6 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {["home", "features", "Services"].map((link) => ( // Updated the array of links
    <li
    key={link}
    className={`${
      selectedItem === link ? "text-[#008073]" : ""
    } capitalize border-b py-4 md:border-none md:py-0 hover:text-[#008073]`}
    onClick={() => setSelectedItem(link)}
  >
  
                <Link href={link === "Services" ? "#services" : `/#${link.toLowerCase()}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <button>
            {theme === "dark" ? (
              <LightModeRoundedIcon
                onClick={() => setTheme("light")}
                className="text-white"
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
            )}
          </button>
          <button
            aria-label="menu"
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
