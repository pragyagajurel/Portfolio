import React, { useEffect } from 'react';
import 'animate.css/animate.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'Frontend', level: '75%' },
    { name: 'Backend', level: '70%' },
    { name: 'Graphics Design', level: '85%' },
    { name: 'Photography', level: '90%' },
    { name: 'Photoshop', level: '85%' },
    { name: 'Python', level: '75%' },
  ];

  useEffect(() => {
    // Apply animation to skill items when component mounts
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item) => {
      item.classList.add('animate__animated', 'animate__fadeInUp');
    });
  }, []);

  return (
    <div style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)', minHeight: '100vh' }}>
      <Container className="skills-container text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
        <Row>
          {skills.map((skill) => (
            <Col xs={12} sm={6} md={4} lg={3} className="skill-item" style={{ marginBottom: '4rem' }} key={skill.name}>
              <h5 style={{ marginTop: '3rem', marginBottom: '0.25rem' }}>{skill.name}</h5>
              <div className="progress" style={{ height: '20px', position: 'relative' }}>
                <div className="progress-bar" style={{ width: skill.level, backgroundColor: '#007bff', position: 'absolute', top: 0, left: 0, height: '100%' }}>
                  <span style={{ color: 'white', position: 'absolute', top: '0', right: '0', fontSize: '0.75rem', padding: '0.25rem' }}>{skill.level}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/* <h2 className='mx-auto text-white '>Available For Freelancer !</h2> */}
    </div>
  );
};

export default Skills;
