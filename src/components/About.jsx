import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/09/13/03/10/artificial-intelligence-7450797_640.jpg)', // Replace with an appropriate background image URL
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
  heroSection: {
    animation: 'fadeIn 2s',
  },
  heroText: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: '10px',
  },
  heroSubText: {
    fontSize: '2rem',
    color: '#FFF',
  },
};

const AboutUs = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About VISION Tech Society</h1>
        <p style={styles.description}>
          The VISION Tech Society at MANIT Bhopal is a student-run organization that aims to foster technological innovation and creativity among students. Our mission is to create a platform for students to explore, learn, and grow in the field of technology through various workshops, seminars, and events.
        </p>
        <div style={styles.details}>
          <h2 style={styles.subheading}>Our Objectives</h2>
          <ul>
            <li>Promote technological awareness and innovation.</li>
            <li>Organize workshops, seminars, and hackathons.</li>
            <li>Provide hands-on experience with the latest technologies.</li>
            <li>Foster a community of tech enthusiasts and innovators.</li>
          </ul>
        </div>
        <div style={styles.details}>
          <h2 style={styles.subheading}>Our Achievements</h2>
          <ul>
            <li>Conducted over 50 workshops and seminars.</li>
            <li>Hosted national level hackathons and competitions.</li>
            <li>Collaborated with industry leaders and experts.</li>
            <li>Developed projects that have received national recognition.</li>
          </ul>
        </div>
        {/* <button
          style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Join Us
        </button> */}
      </div>
    </div>
  );
};

export default AboutUs;
