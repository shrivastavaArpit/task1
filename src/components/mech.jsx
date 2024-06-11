import React from 'react';

const MechSocietyPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2>Welcome All Mechanical Engineers</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Latest Updates</h3>
            <p>Discover the recent advancements and news in Mechanical Engineering.</p>
          </div>
          <div style={styles.card}>
            <h3>Events</h3>
            <p>Stay tuned for upcoming seminars, workshops, and conferences.</p>
          </div>
        </div>
        <h2>Workshops</h2>
        <div style={styles.eventContainer}>
          <div style={styles.eventCard}>
            <h3>3D Printing Workshop</h3>
            <p>Date: August 25, 2024</p>
          </div>
          <div style={styles.eventCard}>
            <h3>Automobile Engineering Seminar</h3>
            <p>Date: September 12, 2024</p>
          </div>
        </div>
        <h2>Innovations in Mechanical Engineering</h2>
        <div style={styles.techContainer}>
          <div style={styles.techCard}>
            <h3>Renewable Energy Systems</h3>
            <p>Learn about the latest innovations in renewable energy systems.</p>
          </div>
          <div style={styles.techCard}>
            <h3>Advanced Manufacturing</h3>
            <p>Explore new techniques in advanced manufacturing processes.</p>
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
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/71/10/91/240_F_271109100_LBWQFgwy1MQ4Y92fAZU4mI3VF6aQ7ItI.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  },
  content: {
    width: '80%',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px',
  },
  card: {
    width: '40%',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
  },
  eventContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px',
  },
  eventCard: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  techContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  techCard: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '10px',
  },
};

export default MechSocietyPage;
