import React from 'react';
import Contact from '../components/Contact';

const ContactPage = ({ about }) => {
  return <Contact about={about} />;
};

export async function getStaticProps() {
  const about = {
    googlemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1983610732276!2d144.9630578153155!3d-37.81520687975196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43b202f709%3A0x5041e56f1d831d2e!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1634023168451!5m2!1sen!2sau",
    email: "contact@example.com"
  };

  return {
    props: {
      about
    }
  };
}

export default ContactPage;
