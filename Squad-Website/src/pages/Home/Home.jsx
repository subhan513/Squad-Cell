import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-content">
        <p>Let's share your idea with us</p>
        <button className="talk-button">Let's Talk!</button>
      </div>
      <div className="right-content">
 <h1 className="headline">
  EXPERT<br />
  <span className="gameLine"><span className="green">GAME</span> DEVELOPMENT</span><br />
  COMPANY
</h1>
      </div>
    </div>
  );
};
export default Home