import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import photo from '../images/photo.png';
import './MainPage.css';
import { Link } from "react-router-dom";

const MainPage = () => {

  const handleDownload = () => {
    try {
      const cvUrl = 'https://drive.google.com/file/d/1xv7HPwHH27Mfk3fY-9fcJeAAyNe2_dRR/view?usp=drivesdkg';
      window.open(cvUrl, '_blank');
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <Container fluid style={{ backgroundColor: '#fe70bd', minHeight: '100vh', paddingTop: '5rem' }}>
      <Row className="justify-content-center align-items-center">
        <Col lg={6} className="text-center mb-4">
          <img src={photo} alt="me" className="img-fluid floating-img" style={{ width: '50%', maxWidth: '300px', marginRight: '2rem' }} />
        </Col>
        <Col lg={6} className="text-center text-lg-start">
          <div className="hero_title1 fw-bold mb-2" style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
            Hello, It`s me
          </div>
          <div className="hero_title2 fw-bold mb-4 text-white" style={{ fontSize: '2.5rem', marginBottom: '1rem'}}>
            Pragya Gajurel
          </div>
          <Link to="/about">
            <div className="fw-bold mb-4 me-lg-5" style={{color: '#ffff', fontSize:'1rem'}}>
              Learn More About Me
            </div>
          </Link>
          <Button variant="light" className="fw-bold mb-4 mt-lg-0" style={{ backgroundColor: 'white', color: '#213a5c'}} onClick={handleDownload}>
            My CV
          </Button>
          <div className="d-flex justify-content-center justify-content-lg-start mt-5">
            <a href="https://github.com/pragyagajurel/" target="_blank" rel="noopener noreferrer" className="me-4">
              <FaGithub size="2em" color="white" />
            </a>
            <a href="https://www.linkedin.com/in/pragya-gajurel-435870288/" target="_blank" rel="noopener noreferrer" className="me-4">
              <FaLinkedin size="2em" color="white" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
