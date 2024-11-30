import React from "react";
import style from './resume.module.css';

export default function Resume() {
  return (
    <div>
      <main>
        <h1 className="page-title">Resume</h1>
        <a href="Anna_Huang_Resume.pdf" download className={style.button}>
          Download Resume
        </a>

        <div className={style.resume}>
          {/* Education Section */}
          <section className={style.section}>
            <h2 className={style["section-title"]}>Education</h2>
            <div className={style.entry}>
              <h3 className={style["entry-title"]}>Bachelor of Science in Computer Science</h3>
              <p className={style["entry-info"]}>
                California Polytechnic State University, San Luis Obispo | Expected Graduation May 2027
              </p>
              <p className={style["entry-description"]}>
                Dean's List: Fall '23 | Winter '24 | Spring '24 | Summer '24
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={style.section}>
            <h2 className={style["section-title"]}>Experience</h2>
            <div className={style.entry}>
              <h3 className={style["entry-title"]}>Public Health Intern</h3>
              <p className={style["entry-info"]}>SFDPH - Population Health Division | June 2024 – July 2024</p>
              <ul className={style["entry-bullets"]}>
                <li>Assisted in the collection and analysis of public health data, contributing to the development of strategies for improving community health outcomes</li>
                <li>Developed a mock community assessment project to apply and demonstrate understanding of public health evaluation techniques and data analysis</li>
                <li>Gained in-depth knowledge of public health policies, programs, and practices through hands-on experience with the Population Health Division</li>
              </ul>

              <h3 className={style["entry-title"]}>Barista</h3>
              <p className={style["entry-info"]}>Starbucks | April 2021 – October 2023</p>
              <ul className={style["entry-bullets"]}>
                <li>Collaborated with team members to maintain efficiency in food and beverage preparation</li>
                <li>Ensured compliance with food safety regulations and cleanliness standards.</li>
                <li>Provided exceptional customer service to ensure customer satisfaction and customer retention</li>
              </ul>

              <h3 className={style["entry-title"]}>Technology Intern</h3>
              <p className={style["entry-info"]}>Each One Teach One | June 2023 – August 2023</p>
              <ul className={style["entry-bullets"]}>
                <li>Designed a functioning professional website for the non-profit ISSASF (Information Systems Security Association San Francisco Chapter)</li>
                <li>Developed proficiency in Python, HTML, CSS through hands-on coding projects</li>
                <li>Utilized VS code and Github for version control and collaboration</li>
              </ul>

              <h3 className={style["entry-title"]}>Intern</h3>
              <p className={style["entry-info"]}>Code Tenderloin | July 2021 – August 2021</p>
              <ul className={style["entry-bullets"]}>
                <li>Acquired foundational skills in web development using HTML and CSS</li>
                <li>Adapted to remote work environment and effectively communicated with peers.</li>
                <li>Demonstrated effective communication skills by sharing personal stories and goals through the creation of a personal website integrating technical training and soft skills</li>
              </ul>
            </div>
          </section>

          {/* Projects Section */}
          <section className={style.section}>
            <h2 className={style["section-title"]}>Projects</h2>
            <div className={style.entry}>
              <h3 className={style["entry-title"]}>Jigsaw Puzzle</h3>
              <p className={style["entry-info"]}>Senior Capstone Project | California Polytechnic State University, San Luis Obispo</p>
              <ul className={style["entry-bullets"]}>
                <li>Developed an interactive jigsaw puzzle game tailored for seniors using Godot, focusing on accessibility and user-friendly interface</li>
                <li>Integrated Firebase as the backend database to manage user progress, store puzzle data, and facilitate real-time updates and interactions</li>
                <li>Implemented features such as adjustable difficulty levels and customizable puzzle sizes to cater to varying levels of cognitive and visual ability among senior users</li>
              </ul>

              <h3 className={style["entry-title"]}>SLO Hacks</h3>
              <p className={style["entry-info"]}>California Polytechnic State University, San Luis Obispo</p>
              <ul className={style["entry-bullets"]}>
                <li>Co-founded Poly Exchange with a team of three other members, creating an online marketplace dedicated to facilitating the exchange of used goods and services among students, promoting cost savings and sustainability</li>
                <li>Collaboratively developed and launched Poly Exchange platform, enabling users to register, list items, and connect for transactions, ensuring a seamless user experience across front-end and back-end functionalities</li>
                <li>Successfully delivered a polished final product in less than 24 hours with a focus on usability and aesthetic appeal, leveraging Flask framework expertise gained during development</li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section className={style.section}>
            <h2 className={style["section-title"]}>Skills</h2>
            <h3 className={style["sub-info"]}>Languages</h3>
            <p className={style["entry-description"]}>Java | Python | C/C++ | JavaScript | HTML | CSS | GDScript</p>
            <h3 className={style["sub-info"]}>Developer Tools</h3>
            <p className={style["entry-description"]}>Git | VS Code | PyCharm | IntelliJ | Unix</p>
            <h2 className={style.spacing}></h2>
          </section>

          {/* Coursework Section */}
          <section className={style.section}>
            <h2 className={style["section-title"]}>Coursework</h2>
            <p className={style["entry-description"]}>
              Fundamentals of Computer Science | Data Structures | Intro to Computer Organization | Project-Based OOP | Discrete Structures | Systems Programming
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
