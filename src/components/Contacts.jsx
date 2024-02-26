import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const CountryCode = {
  '': 'Select Country Code',
  '+1': 'United States',
  '+44': 'United Kingdom',
  '+61': 'Australia',
  '+977': 'Nepal',
  '+91': 'India',
};

const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate the form data
    if (!email || !phoneNumber || !countryCode || !message) {
      setStatus('Please fill in all fields.');
      return;
    }
  
    // Log the form data
    console.log('Form Data:', {
      email,
      phoneNumber,
      countryCode,
      message
    });
  
    // Reset the form fields and status
    setEmail('');
    setPhoneNumber('');
    setCountryCode('');
    setMessage('');
    setStatus('');
  };  

  return (
    <Container fluid style={{ backgroundColor: '#fe70bd', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="card mt-5">
            <div className="card-header" style={{ backgroundColor: '#fe70bd'}}>
              <h1 className='text-white'>Contact Me</h1>
            </div>
            <div className="card-body text-white" style={{ backgroundColor: '#fe70bd'}}>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    style={{ backgroundColor: '#ffff', color: '#fe70bd'}}
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="row g-3 align-items-center mb-3">
                  <div className="col-auto">
                    <label htmlFor="countryCode" className="form-label">Phone Number</label>
                  </div>
                  <div className="col-auto">
                    <select
                      className="form-select text-white"
                      style={{ backgroundColor: '#ffff', color: '#fe70bd' }}
                      id="countryCode"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      {Object.entries(CountryCode).map(([code, name]) => (
                        <option key={code} value={code} style={{ background: '#ffff', color: '#fe70bd' }}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-auto">
                    <label htmlFor="phoneNumber" className="form-label"></label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="tel"
                      className="form-control"
                      style={{ backgroundColor: '#ffff', color: '#fe70bd'}}
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3" style={{ backgroundColor: '#fe70bd', color: '#ffff', padding: '10px', borderRadius: '5px' }}>
                  <label htmlFor="message" className="form-label" style={{color: '#ffff'}}>Message</label>
                  <textarea
                    className="form-control"
                    style={{ 
                      backgroundColor: '#ffff', // Make textarea background transparent
                      color: '#fe70bd',
                      width: '100%', // Ensure the textarea takes up full width
                    }}
                    id="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                {status && <p>{status}</p>}
                <button type="submit" className="btn btn-primary btn-lg fw-bold" style={{ backgroundColor: '#ffff', color: '' }}>Send Message</button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
