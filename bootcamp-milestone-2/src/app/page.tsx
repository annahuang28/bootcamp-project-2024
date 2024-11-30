// Home.tsx
import React from 'react';
import style from './home.module.css'; // Import styles using CSS modules

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <h1 className="page-title">Welcome</h1>
        <div className={style.about}>
          <div className={style['about-image']}>
            <img
              src="profile_pic.png"
              alt="Profile Picture"
              className="profile-pic" // This will still work as a regular class if needed
            />
          </div>
          <div className={style['about-text']}>
            <h2>Hi, I'm Anna Huang!</h2>
            <p>
              Welcome to my website. I am currently a second-year computer science major at Cal Poly - San Luis Obispo, 
              interested in joining Hack4Impact to make a difference in my college community. In exploring this website, 
              you will find more information about me, such as my resume and projects. Feel free to reach out!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
