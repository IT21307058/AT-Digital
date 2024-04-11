import React, { useState, useEffect } from 'react';
import "./Home.css"
import dekstop from '../../assets/image/Dekstop.png'
import search from '../../assets/image/search.png'

const Home = () => {
  //  code dynamically updates the isSmallScreen and isTinyScreen states based on the window width, 
  // and provides a mechanism (toggle function) to select and deselect items.
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isTinyScreen, setIsTinyScreen] = useState(window.innerWidth <= 375);
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      setIsTinyScreen(window.innerWidth <= 375);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <>
          <section className='hero1' />
          <div className='content1'>
            <p>
              We crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </p>
            <a href="#">Get Free Consultation</a>
          </div>
        </>
      ) : (
        <section className='hero'>
          <div className='content'>
            <p>
              We crush Your Competitors, Goals, And Sales Records - Without The B.S.
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

      <div className='sectionx'>
        <div className='accordian-section'>
          <h2 className='accordian-header'>Frequently asked questions</h2>
          <div className='wrapper'>
            <div className='accordian'>
              {data.map((item, i) => (
                <div className='item'>
                  <div className={`title-content ${selected === i ? 'active' : ''}`} onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <div className={
                    selected == i ? 'answer-content show' : 'answer-content'
                  }><p>{item.answer}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

// dumy data
const data = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
  }
]