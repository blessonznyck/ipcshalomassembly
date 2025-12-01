'use client'

import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Visit() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <Container>
          <h1 className="display-4 fw-bold">Plan Your Visit</h1>
          <p className="lead">We can&apos;t wait to meet you!</p>
        </Container>
      </section>

      {/* Welcome Message */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Welcome to IPC Shalom Assembly</h2>
              <p className="lead text-muted">
                Whether you&apos;re new to church or have been attending for years, we want you to 
                feel welcomed and valued. Come as you are - we&apos;re a community of real people 
                following Jesus together at IPC Shalom Assembly.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* For Families */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">For Families</h2>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>👶</div>
                  <h4 className="mb-3">Children&apos;s Ministry</h4>
                  <p className="text-muted">
                    We offer engaging, age-appropriate programs for children from infants through 
                    5th grade during both Sunday services. Our trained volunteers create a safe, 
                    fun environment where kids can learn about Jesus.
                  </p>
                  <div className="info-banner mt-3">
                    <p className="mb-0">
                      <strong>Check-In:</strong> Located in the main lobby. First-time families receive 
                      a tour of our children&apos;s area.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🎸</div>
                  <h4 className="mb-3">Youth Ministry</h4>
                  <p className="text-muted">
                    Middle and high school students are welcome to join the main service or attend 
                    our youth gathering on Sunday evenings at 6 PM. We focus on relevant teaching, 
                    authentic community, and fun activities.
                  </p>
                  <div className="info-banner mt-3">
                    <p className="mb-0">
                      <strong>Youth Night:</strong> Sunday evenings, 6:00 PM - 7:30 PM
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* First Time Guest */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow-sm">
                <Card.Body className="p-5 text-center">
                  <h2 className="section-title">First Time Here?</h2>
                  <p className="lead text-muted mb-4">
                    We&apos;d love to connect with you! Stop by our Welcome Center in the main lobby 
                    after any service to:
                  </p>
                  
                  <div className="info-banner mt-4">
                    <h5>Have Questions?</h5>
                    <p className="mb-0">
                      Email us at <strong>visit@ipcshalom.org</strong> or call <strong>(555) 123-4567</strong>. 
                      We&apos;re happy to answer any questions you have!
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Directions</h2>
          <Row>
            <Col lg={10} className="mx-auto">
              <Card className="shadow-sm">
                <Card.Body className="p-0">
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.87337749744873!2d80.22268053257326!3d13.053355759719076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d6913eebff%3A0x23986e71c5c8b317!2sIPC%20SHALOM%20ASSEMBLY%20CHURCH!5e0!3m2!1sen!2sin!4v1733047200000!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="IPC Shalom Assembly Location"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
              <div className="text-center mt-4">
                <p className="text-muted mb-2">
                  <strong>Address:</strong> No 1, Puliyur 2nd Main Rd, Trustpurum, Kodambakkam, Chennai, Tamil Nadu 600024
                </p>
                <a 
                  href="https://www.google.com/maps/place/IPC+SHALOM+ASSEMBLY+CHURCH/@13.0533558,80.2226805,20z/data=!4m6!3m5!1s0x3a5267d6913eebff:0x23986e71c5c8b317!8m2!3d13.0533886!4d80.2226815!16s%2Fg%2F11w5600ks2?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-pill px-4"
                >
                  Open in Google Maps
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
