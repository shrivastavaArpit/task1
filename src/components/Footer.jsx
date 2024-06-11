import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #fff;
  padding: 40px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px;
`;

const ColumnTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;


const cards = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <ColumnTitle>Contact Us</ColumnTitle>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Manit Bhopal Campus</p>
          <p><FontAwesomeIcon icon={faPhone} /> 86957xx956</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> bhopal@manit</p>
          </Column>
          <Column>
          
          
          </Column>
          <Column>
          <h4>Contact Us On </h4>
          <SocialLinks>
            
          <Link href="https://www.instagram.com/vision_nitb?igsh=MWVqZDNtbjZlN3dpNw=="><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>

            <Link href="https://www.facebook.com/visionmanit/"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
            {/* <Link href="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></Link> */}
          </SocialLinks>
          </Column>
        
      </FooterContent>
    </FooterContainer>
  );
};

export default cards;
