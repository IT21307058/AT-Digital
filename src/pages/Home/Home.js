import React, { useState, useEffect } from 'react';
import "./Home.css"
import dekstop from '../../assets/image/Dekstop.png'
import search from '../../assets/image/search.png'

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isTinyScreen, setIsTinyScreen] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      setIsTinyScreen(window.innerWidth <= 375);
    };

    // const handleResize2 = () => {
    // };

    window.addEventListener('resize', handleResize);
    // window.addEventListener('resize2', handleResize2);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('resize2', handleResize2);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <>
          <section className='hero1' />
          <div className='content1'>
            <p>
              We crush your competitors, goals, and sales records - without the B.S.
            </p>
            <a href="#">Get Free Consultation</a>
          </div>
        </>
      ) : (
        <section className='hero'>
          <div className='content'>
            <p>
              We crush your competitors, goals, and sales records - without the B.S.
            </p>
            <a href="#">Get Free Consultation</a>
          </div>
        </section>
      )}

      {isTinyScreen ? (
        <div className='sector1'>
          <div className='card-container1'>
            <img src={dekstop} alt="Description of the image" className='home-img1' />
            <div className='text-box1'>
              <h3>Web & Mobile App Development</h3>
              <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              <a href="#">Learn More</a>
            </div>
          </div>

          <div className='card-container1 gap'>
            <img src={search} alt="Description of the image" className='home-img1' />
            <div className='text-box1'>
              <h3>Digital Strategy Consulting</h3>
              <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
              <a href="#">Learn More</a>
            </div>
          </div>

        </div>
      ) : (
        <div className='sector'>
          <div className='card-container'>
            <img src={dekstop} alt="Description of the image" className='home-img' />
            <div className='text-box'>
              <h3>Web & Mobile App Development</h3>
              <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              <a href="#">Learn More</a>
            </div>
          </div>

          <div className='card-container gap'>
            <div className='text-box'>
              <h3>Digital Strategy Consulting</h3>
              <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
              <a href="#">Learn More</a>
            </div>
            <img src={search} alt="Description of the image" className='home-img' />
          </div>

        </div>
      )}
    </>
  )
}

export default Home