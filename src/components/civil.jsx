import React from 'react';

const CivilSocietyPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2>Welcome All Civil Engineers</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>News & Updates</h3>
            <p>Get the latest news and updates in the field of Civil Engineering.</p>
          </div>
          <div style={styles.card}>
            <h3>Events & Workshops</h3>
            <p>Join our upcoming events and workshops to enhance your skills.</p>
          </div>
        </div>
        <h2>Upcoming Workshops</h2>
        <div style={styles.eventContainer}>
          <div style={styles.eventCard}>
            <h3>Structural Design Workshop</h3>
            <p>Date: August 30, 2024</p>
          </div>
          <div style={styles.eventCard}>
            <h3>Urban Planning Seminar</h3>
            <p>Date: September 20, 2024</p>
          </div>
        </div>
        <h2>Innovative Technologies</h2>
        <div style={styles.techContainer}>
          <div style={styles.techCard}>
            <h3>Green Building Technologies</h3>
            <p>Explore the advancements in green building technologies.</p>
          </div>
          <div style={styles.techCard}>
            <h3>Smart Cities</h3>
            <p>Learn about the development of smart cities around the world.</p>
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
    backgroundImage: 'url("https://t4.ftcdn.net/jpg/04/06/39/45/240_F_406394570_1CIRXjYWsM7sEVPAoBYtvOppJkSnKXTB.jpg")',
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
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  card: {
    width: '45%',
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '8px',
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
    marginBottom: '10px',
  },
  techContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  techCard: {
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '10px',
  },
};

export default CivilSocietyPage;
