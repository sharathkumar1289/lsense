import React from 'react';
import { 
  IoMailOutline, 
  IoPhonePortraitOutline, 
  IoCalendarOutline, 
  IoLocationOutline, 
  IoLogoFacebook, 
  IoLogoGithub, 
  IoLogoInstagram, 
  IoChevronDown 
} from 'react-icons/io5';

export const SideBar = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img style={{ borderRadius: "20px" }} src="sharath.jpeg" alt="Sharath Kumar" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Sharath Kumar">Sharath Kumar</h1>
          <p className="title">Java Full Stack developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:sharathkumarbalne@gmail.com" className="contact-link">sharathkumarbalne@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+917993993637" className="contact-link">+91-7993993637</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2003-08-06">Aug 06, 2003</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Hyderabad, Telangana</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
        <li className="social-item">
            <a href="https://github.com/sharathkumar1289" target="_blank" className="social-link">
              <IoLogoGithub />
            </a>
          </li>          
          <li className="social-item">
            <a href="https://www.instagram.com/___sharathkumar___/" target="_blank" className="social-link">
              <IoLogoInstagram />
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <IoLogoFacebook />
            </a>
          </li>

        </ul>
      </div>
    </aside>
  );
}

export default SideBar;