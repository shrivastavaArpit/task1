import React from 'react';

const CSEReactPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2>Welcome All CSE Students</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Recent News</h3>
            <p>Stay updated with the latest happenings in the field of Computer Science and Engineering.</p>
          </div>
          <div style={styles.card}>
            <h3>Upcoming Events</h3>
            <p>Check out our upcoming events and workshops.</p>
          </div>
        </div>
        <h2>Events</h2>
        <div style={styles.eventContainer}>
          <div style={styles.eventCard}>
            <h3>Programming Contest</h3>
            <p>Date: August 20, 2024</p>
          </div>
          <div style={styles.eventCard}>
            <h3>Web Development Workshop</h3>
            <p>Date: September 10, 2024</p>
          </div>
        </div>
        <h2>Interesting Technologies</h2>
        <div style={styles.techContainer}>
          <div style={styles.techCard}>
            <h3>Machine Learning</h3>
            <p>Explore the latest advancements in ML technology.</p>
          </div>
          <div style={styles.techCard}>
            <h3>Blockchain</h3>
            <p>Learn about the applications of blockchain in various industries.</p>
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

export default CSEReactPage;
