import React from 'react'

const aboutus = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>About Us | EVENTvista360</title>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      line-height: 1.6;\n      background: #f5f5f5;\n      color: #333;\n    }\n    .about-container {\n      max-width: 1000px;\n      margin: 40px auto;\n      padding: 20px;\n      background: white;\n      border-radius: 10px;\n      box-shadow: 0 0 10px rgba(0,0,0,0.1);\n    }\n    h1 {\n      color: #2c3e50;\n      text-align: center;\n    }\n    h2 {\n      color: #34495e;\n    }\n    p {\n      margin-bottom: 15px;\n    }\n    ul {\n      margin-left: 20px;\n    }\n  "
      }}
    />
    <div className="about-container">
      <h1>About EVENTvista360</h1>
      <p>
        <strong>EVENTvista360</strong> is a cutting-edge, voice-enabled, 360°
        interactive web platform created for event management professionals and
        clients. It transforms traditional event websites by offering immersive
        media and hands-free navigation through voice commands.
      </p>
      <h2>Our Mission</h2>
      <p>
        To revolutionize how events are presented online by integrating immersive
        360° media and smart voice navigation, providing users with an intuitive,
        accessible, and interactive experience.
      </p>
      <h2>Why EVENTvista360?</h2>
      <ul>
        <li>
          60% of users prefer immersive and interactive portfolios (Event Tech
          Survey 2024).
        </li>
        <li>
          45% of users engage more with voice-command-enabled websites (Statista
          2024).
        </li>
        <li>
          30% increased engagement on platforms using 360° interactive features.
        </li>
      </ul>
      <h2>Core Features</h2>
      <ul>
        <li>360° panoramic event viewing</li>
        <li>Voice-command navigation using Google Cloud or Amazon Lex</li>
        <li>Interactive hotspots and media galleries</li>
        <li>Real-time dashboard and content management</li>
        <li>Personalized event filtering via voice</li>
      </ul>
      <h2>Our Audience</h2>
      <p>
        Prospective clients, event planners, and stakeholders seeking an
        innovative way to experience event portfolios.
      </p>
      <h2>Technologies Used</h2>
      <p>
        Developed using ReactJS, NodeJS, Express, and MongoDB with integration of
        WebGL for 360° views and voice APIs for interaction.
      </p>
      <h2>Meet the Developers</h2>
      <ul>
        <li>
          <strong>Harsh Kr. Prajapati</strong> – Led development of the 360° media
          viewer and integrated voice navigation.
        </li>
        <li>
          <strong>Prashant Singh</strong> – Designed UI/UX and developed
          voice-interactive filtering and dynamic components.
        </li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        EVENTvista360 redefines how event portfolios are showcased—providing a
        futuristic, inclusive, and highly engaging experience for all users. We
        aim to set a new standard in event technology and digital interaction.
      </p>
    </div>
  </>
  </div>
  )
}

export default aboutus