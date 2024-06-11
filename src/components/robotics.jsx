import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: 'url(https://t4.ftcdn.net/jpg/07/10/42/55/240_F_710425533_1ZvRFQTIUoJP7QaWmDPjHZYsfz1ZLw7T.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '10px',
    padding: '30px',
    maxWidth: '800px',
    width: '100%',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#FFD700', // Light yellow color
  },
  subheading: {
    fontSize: '2rem',
    marginBottom: '15px',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  details: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#FFA500', // Darker yellow
  },
};

const RoboticsWorkshop = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Robotics Workshop</h1>
        <h2 style={styles.subheading}>Organized by VISION Tech Society</h2>
        <p style={styles.description}>
          Join us for an exciting workshop on robotics, where you will learn about the latest advancements in robotics technology, hands-on robot building, and programming.
        </p>
        <div style={styles.details}>
          <p>Date: August 15, 2024</p>
          <p>Time: 10:00 AM - 4:00 PM</p>
          <p>Venue: Seminar Hall, MANIT Bhopal</p>
        </div>
        {/* <button
          style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Register Now
        </button> */}
      </div>
    </div>
  );
};

export default RoboticsWorkshop;
