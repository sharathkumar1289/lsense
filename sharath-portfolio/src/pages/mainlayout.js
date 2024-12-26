import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import About from './about';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './blog';
import Contact from './contact';
import styles from '../app/globals.css';

const MainLayout = ({ about, resume, portfolio, blog, contact, technologies, social }) => {
  return (
    <>
      <Head>
        <title>{about.name} | Portfolio</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={about.presentation} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://${about.username}.github.io`} />
        <meta property="og:title" content={`${about.name} | ${about.rol} | Portfolio`} />
        <meta property="og:description" content={about.presentation} />
        <meta property="og:image" content={about.avatar} />
        <meta property="og:image:secure_url" content={about.avatar} />
        <meta property="og:site_name" content={`${about.name} | ${about.rol} | Portfolio`} />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:creator" content={`@${about.username}`} />
        <meta name="twitter:title" content={`${about.name} | ${about.rol} | Portfolio`} />
        <meta name="twitter:description" content={about.presentation} />
        <meta name="twitter:image" content={about.avatar} />
        <meta name="twitter:image:width" content="200" />
        <meta name="twitter:image:height" content="200" />
        <meta name="keywords" content={`${about.name}, ${Object.keys(technologies).join(', ')}`} />
        <link href={`https://${about.username}.github.io`} rel="canonical" />
        <link rel="shortcut icon" href="/images/logo.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <Sidebar about={about} social={social} />
        <div className={styles.mainContent}>
          <Navbar />
          <About about={about} />
          <Resume resume={resume} />
          <Portfolio categories={portfolio.categories} projects={portfolio.projects} />
          <Blog blog={blog} />
          <Contact contact={contact} />
        </div>
      </main>
      <script src="/js/script.js"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  );
};

export default MainLayout;
