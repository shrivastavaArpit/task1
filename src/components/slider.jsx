import React, { useState, useEffect } from 'react';

const styles = {
    container: {
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
    },
    slide: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      color: '#fff',
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'transform 1s ease',
    },
    slideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Ensures the image covers the entire slide area
    },
    slideText: {
      position: 'absolute',
      color: 'white',
      fontSize: '2rem',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add background color for better readability
      padding: '10px',
      borderRadius: '8px',
    },
  };

const AutoSlidingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: 'Fostering Technological Innovation',
      image: 'https://media.istockphoto.com/id/1202870693/photo/future-artificial-intelligence-robot-and-cyborg.jpg?s=612x612&w=0&k=20&c=Y1e8NLCRVg-_AM2JBv0NLQjJZo5gGfaO4mVsojNywFE=',
    },
    {
      title: 'Dedicated to Excellence',
      image: 'https://media.istockphoto.com/id/1483013789/photo/ai-artificial-intelligence-robot-and-human-hands-are-touching-and-connecting-unity-with-human.jpg?s=612x612&w=0&k=20&c=m3kPK8d6QN3NHmVbDyHme2VBfPjVGt8LhenwgTbc5bI=',
    },
    {
      title: 'Supportive Learning Environment',
      image: 'https://media.istockphoto.com/id/1468045991/photo/online-transactions-businessman-touching-fingerprint-scan-provides-security-interface-payment.jpg?s=612x612&w=0&k=20&c=AFdbttTDMqmJk9z7LGkT1dov3oxCxMaKuOlertfrnBI=',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={styles.container}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            ...styles.slide,
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        >
          <img src={slide.image} alt={slide.title} style={styles.slideImage} />
          <div style={{ position: 'absolute', color: 'white', fontSize: '2rem', textAlign: 'center' }}>
            {slide.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutoSlidingCarousel;
