import React from 'react';

const TechnicalSocietyPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2>        Welcome all EE-ECE Students </h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Recent News</h3>
            <p>Stay updated with the latest happenings in the field of EE and ECE.</p>
          </div>
          <div style={styles.card}>
            <h3>Upcoming Events</h3>
            <p>Check out our upcoming events and workshops.</p>
          </div>
        </div>
        <h2>Events</h2>
        <div style={styles.eventContainer}>
          <div style={styles.eventCard}>
            <h3>Workshop on Robotics</h3>
            <p>Date: August 15, 2024</p>
          </div>
          <div style={styles.eventCard}>
            <h3>Seminar on Renewable Energy</h3>
            <p>Date: September 5, 2024</p>
          </div>
        </div>
        <h2>Interesting Technologies</h2>
        <div style={styles.techContainer}>
          <div style={styles.techCard}>
            <h3>Artificial Intelligence</h3>
            <p>Explore the latest advancements in AI technology.</p>
          </div>
          <div style={styles.techCard}>
            <h3>Internet of Things (IoT)</h3>
            <p>Learn about the applications of IoT in various industries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '180vh',
    width: '100vw',
    backgroundImage: 'url(https://t4.ftcdn.net/jpg/02/71/10/91/240_F_271109100_LBWQFgwy1MQ4Y92fAZU4mI3VF6aQ7ItI.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  },
  content: {
    width: '100%',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  card: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '15px',
  },
  eventContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px',
  },
  eventCard: {
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '60px',
  },
  techContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  techCard: {
    backgroundColor: '#e0e0e0',
    padding: '10px',
    borderRadius: '15px',
    marginBottom: '15px',
  },
};

export default TechnicalSocietyPage;
