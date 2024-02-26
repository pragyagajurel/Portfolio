import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import photo1 from '../images/photo1.jpg';

function AboutMe() {
  return (
    <Container fluid style={{ backgroundColor: '#fe70bd', minHeight: '100vh' }}>
      <Container className="text-white">
        <Row>
          <Col md={8} className="offset-md-2">
            <div>
              <img src={photo1} alt="Portfolio" className="img-fluid rounded-start mb-3 mt-1 mx-auto d-block" style={{ width: '35%' }} />
            </div>
            <h1 className="text-center mb-4">About Me</h1>
            <p className="lead text-center">My name is Pragya Gajurel.</p>
            <p className="lead text-center">
              I am a Student. I am passionate about learning and dedicated to my work, and I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything it was created to do.
            </p>
            <hr className="my-4" />
            <Row>
              <Col md={6}>
                <h5>Country:</h5>
                <p>Nepal</p>
              </Col>
              <Col md={6}>
                <h5>Phone:</h5>
                <p>+977-985-1335282</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h5>Email:</h5>
                <p>gajurelpragya@gmail.com</p>
              </Col>
              <Col md={6}>
                <h5>Education:</h5>
                <p>Bachelor`s in Data Science, Birmingham City University</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutMe;
