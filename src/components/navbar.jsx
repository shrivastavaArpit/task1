// src/components/NavBar.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const styles = {
    nav: {
      backgroundColor: '#000000',
      position: 'fixed',
      top: 0,
    //   left:0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 10px',
    //   zIndex: 5000,
    },
    ul: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
    },
    li: {
      position: 'relative',
    },
    a: {
      color: 'white',
      padding: '10px 15px',
      textDecoration: 'none',
      display: 'flex',
      transition: 'background 0.3s',
    },
    Branches: {
        color: 'white',
    },
    aHover: {
      backgroundColor: '#000000',
    },
    dropdownContent: {
      display: dropdownOpen ? 'block' : 'none',
      position: 'absolute',
      backgroundColor: '#000000',
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
      borderRadius: '5px',
      top: '40px',
      left: 0,
      animation: 'fadeIn 0.3s ease-out',
    },
    dropdownItem: {
      color: '#0077FF',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
      transition: 'background 0.3s',
      borderRadius: '5px',
    },
    dropdownItemHover: {
      backgroundColor: '#000000',
    },
    dropdownButton: {
        // backgroundColor: '#f9f9f9',
        color: '#0077FF', // Lighter blue color
        display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      position: 'relative',
      fontWeight: 'bold', // Make text bold

    },
    arrowIcon: {
      marginLeft: '5px',
    },
    arrowAnimation: {
      animation: `${dropdownOpen ? 'rotateDown' : 'rotateUp'} 0.1s ease-in-out`,
      transformOrigin: 'center',
    }
  };

  return (
    <nav style={styles.nav}>
        <div style={styles.navbarBrand}>
        <img
          src="https://us.123rf.com/450wm/choreograph/choreograph1003/choreograph100300042/6570028-bright-flamy-symbol-on-the-black-background.jpg?ver=6" // Replace with your icon URL
          alt="Brand Icon"
          style={{ width: '50px', height: '50px', marginRight: '20px'  }}          />
        </div>
      <ul style={styles.ul}>
      <a href="/" style={styles.navLink}>
            <FontAwesomeIcon icon={faHome} style={styles.icon} />
            Home
          </a>     
          <li style={styles.navItem}>
          <a href="/about" style={styles.navLink}>
            <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} />
            About Us
          </a>
        </li>     
        <li style={styles.navItem}>
          <a href="/contact" style={styles.navLink}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
            Contact Us
          </a>
        </li>        {/* <li style={styles.li}><a href="/Demo" style={styles.a}>demo</a></li> */}

        <li style={styles.li}>
        <div style={{ ...styles.dropdownButton, display: 'flex', alignItems: 'center' }} onClick={toggleDropdown}>
        Branches <FontAwesomeIcon icon={faAngleDown} style={styles.icon} />
      </div>
      <div style={styles.dropdownContent}>
        <a href="/ee" style={styles.dropdownItem}>EE/ECE</a>
        <a href="/Cse" style={styles.dropdownItem}>CSE</a>
        <a href="/Mech" style={styles.dropdownItem}>Mechanical</a>
        <a href="/Civil" style={styles.dropdownItem}>Civil</a>
      </div>
    </li>
      </ul>
    </nav>
  );
  
}

export default NavBar;
