import React from 'react';

const Home = () => {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#000000',
      textAlign: 'center',
    },
    heroSection: {
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://cdn.pixabay.com/photo/2022/09/13/03/10/artificial-intelligence-7450797_640.jpg") no-repeat center center/cover',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFEB3B',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    heroText: {
      fontSize: '4rem',
      fontWeight: 'bold',
      maxWidth: '80%',
      textAlign: 'center',
      lineHeight: '1.2',
    },
    
    contentSection: {
      marginTop: '20px',
      textAlign: 'left',
    },
    sectionTitle: {
      fontSize: '2rem',
      margin: '20px 0',
      borderBottom: '2px solid #333',
      display: 'inline-block',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '20px',
    },
    card: {
      width: '300px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '15px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      margin: '10px 0',
    },
    cardText: {
      fontSize: '1rem',
      color: '#000000',
    },
    cardButton: {
      display: 'block',
      width: '100%',
      padding: '10px 0',
      backgroundColor: '#000000',
      color: 'white',
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: '5px',
      marginTop: '10px',
      transition: 'background-color 0.3s',
    },
  };

  const handleHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleHoverExit = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
      <div style={styles.heroText}>
        <p style={styles.lineOne}>Welcome to</p>
        <p style={styles.lineTwo}>VISION MANIT Bhopal</p>
      </div>
    </section>
      <section style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>Upcoming Events</h2>
        <div style={styles.cardsContainer}>
          <div style={{...styles.card, cursor: 'pointer'}} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            <img
              style={styles.cardImage}
              src="https://images.unsplash.com/photo-1557855506-3619a44bab73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJkdWlub3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Arduino Workshop"
            />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Arduino Workshop</h3>
              <p style={styles.cardText}>
                Join us for an exciting workshop on Arduino where you will learn the basics of microcontrollers and how to program them.
              </p>
              <a
                href="/arduino"
                style={styles.cardButton}
              >
                Learn More
              </a>
            </div>
          </div>
          <div style={{...styles.card, cursor: 'pointer'}} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            <img
              style={styles.cardImage}
              src="https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvYm90fGVufDB8fDB8fHww"
              alt="Robotics Workshop"
            />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Robotics Workshop</h3>
              <p style={styles.cardText}>
                Dive into the world of robotics with our hands-on workshop. Learn to build and program your own robots.
              </p>
              <a
                href="/robotics"
                style={styles.cardButton}
              >
                Learn More
              </a>
            </div>
          </div>
          <div style={{...styles.card, cursor: 'pointer'}} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            <img
              style={styles.cardImage}
              src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_640.jpg"
              alt="ai"
            />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>AI Workshop</h3>
              <p style={styles.cardText}>
                Explore the fascinating field of Artificial Intelligence. Learn about machine learning, neural networks, and more.
              </p>
              <a
                href="/ai"
                style={styles.cardButton}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <p>    </p>
        <hr></hr>
        <h2 style={styles.sectionTitle}>Features Of Our Society</h2>
       <hr></hr>
      </section>
    </div>
  );
}

export default Home;
