import React from 'react'

export const About = () => {
  return (
    <>

<article class="about  active" data-page="about">

<header>
  <h2 class="h2 article-title">About me</h2>
</header>

<section class="about-text">
  <p>
  I'm a highly motivated and results-oriented software engineering student from Hyderabad, seeking an entry-level position to utilize technical skills and passion for coding. With a solid foundation in Java, Python, Power BI, SQL, and web development technologies  </p>

  <p>
  I'm eager to contribute to a dynamic team and gain practical experience in software development. I have hands-on experience as a Data Analyst Intern and a proven track record of academic excellence, leadership roles, and participation in various technical projects and hackathons.

  </p>
</section>

<section class="service">

  <h3 class="h3 service-title">What i'm doing</h3>

  <ul class="service-list">

    <li class="service-item">

      <div class="service-icon-box">
        <img src="icon-dev.svg
        " alt="design icon" width="40"/>
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">Web design</h4>

        <p class="service-item-text">
          The most modern and high-quality design made at a professional level.
        </p>
      </div>

    </li>

    <li class="service-item">

      <div class="service-icon-box">
        <img src="icon-dev.svg" alt="Web development icon" width="40"/>
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">Web development</h4>

        <p class="service-item-text">
          High-quality Web development of sites at the professional level using Cutting Edge technologies.
        </p>
      </div>

    </li>
    <li class="service-item">

      <div class="service-icon-box">
        <img src="da.svg" alt="camera icon" width="70"/>
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">Data Analysis</h4>

        <p class="service-item-text">
         I Can make interactive dashboards using power BI and also works on data 
        </p>
      </div>

    </li>

    <li class="service-item">

      <div class="service-icon-box">
        <img src="https://duck.design/wp-content/uploads/2022/02/illustration-14.svg" alt="mobile app icon" width="70"/>
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">Mobile apps UI</h4>

        <p class="service-item-text">
          Professional development of UI for applications for iOS and Android using Flutter.
        </p>
      </div>

    </li>

  </ul>

</section>

<section class="testimonials">

  <h3 class="h3 testimonials-title">Projects</h3>

  <ul class="testimonials-list has-scrollbar">

    <li class="testimonials-item">
      <div class="content-card" data-testimonials-item>

        <h4 class="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

        <div class="testimonials-text" data-testimonials-text>
          <p>
            Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
            lot of experience
            and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
            consectetur adipiscing
            elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
          </p>
        </div>

      </div>
    </li>

    <li class="testimonials-item">
      <div class="content-card" data-testimonials-item>

        <h4 class="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

        <div class="testimonials-text" data-testimonials-text>
          <p>
            Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
            lot of experience
            and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
            consectetur adipiscing
            elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
          </p>
        </div>

      </div>
    </li>

    <li class="testimonials-item">
      <div class="content-card" data-testimonials-item>

        <h4 class="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

        <div class="testimonials-text" data-testimonials-text>
          <p>
            Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
            lot of experience
            and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
            consectetur adipiscing
            elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
          </p>
        </div>

      </div>
    </li>

    <li class="testimonials-item">
      <div class="content-card" data-testimonials-item>

        <h4 class="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

        <div class="testimonials-text" data-testimonials-text>
          <p>
            Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
            lot of experience
            and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
            consectetur adipiscing
            elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
          </p>
        </div>

      </div>
    </li>

  </ul>

</section>

<div class="modal-container" data-modal-container>

  <div class="overlay" data-overlay></div>

  <section class="testimonials-modal">

    <button class="modal-close-btn" data-modal-close-btn>
      <ion-icon name="close-outline"></ion-icon>
    </button>

    <div class="modal-img-wrapper">
      <figure class="modal-avatar-box">
        <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img/>
      </figure>

      <img src="./assets/images/icon-quote.svg" alt="quote icon"/>
    </div>

    <div class="modal-content">

      <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>

      <time datetime="2021-06-14">14 June, 2021</time>

      <div data-modal-text>
        <p>
          Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
          lot of experience
          and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
          consectetur adipiscing
          elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
        </p>
      </div>

    </div>

  </section>

</div>
</article>
        
    </>
  )
}

export default About;

