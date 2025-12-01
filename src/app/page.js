'use client'

import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="text-uppercase mb-3" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>
            IPC SHALOM ASSEMBLY
          </div>
          <h1 className="display-3 fw-bold mb-4">
            MAKING JESUS KNOWN TO <span className="d-block mt-2">EVERYONE, EVERYWHERE</span>
          </h1>
          <p className="subtitle lead mb-4">
            Everyone is welcome.<br />
            Everyone has a next best step.<br />
            Everyone can make a difference.
          </p>
          <Link href="/visit">
            <Button size="lg" className="btn-primary-custom mt-3">
              VISIT US
            </Button>
          </Link>
        </Container>
      </section>

      {/* About Section */}
      <section className="section bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title">
                We&apos;re a church <span className="text-primary-custom">all about loving Jesus.</span>
              </h2>
              <p className="lead text-muted">
                We&apos;re a diverse church learning to follow Jesus in the 21st century. At IPC Shalom Assembly, 
                you&apos;ll find surprisingly normal people who are admittedly still in process.
              </p>
              <p className="text-muted">
                Our goal isn&apos;t to pretend we&apos;re perfect, but to point you to the one who is. 
                We believe in creating a welcoming community where everyone can grow in their faith journey.
              </p>
              <Link href="/about">
                <Button variant="outline-primary" className="rounded-pill px-4 mt-3">
                  Learn More About Us
                </Button>
              </Link>
            </Col>
            <Col lg={6}>
              <div className="bg-primary-custom text-white p-5 rounded" style={{ minHeight: '300px' }}>
                <h3 className="mb-4">Our Mission</h3>
                <p className="lead">
                  To make Jesus known to everyone, everywhere through authentic relationships, 
                  practical teaching, and compassionate service.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Connect Section */}
      <section className="section">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Get Connected</h2>
            <p className="lead text-muted">
              There are many ways to get involved and grow in your faith.
            </p>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3" style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
                    ⛪
                  </div>
                  <Card.Title className="h4 mb-3">Sunday Services</Card.Title>
                  <Card.Text className="text-muted">
                    Join us for worship, teaching, and fellowship every Sunday at 10:00 AM and 1:00 PM.
                  </Card.Text>
                  <Link href="/visit">
                    <Button variant="outline-primary" className="rounded-pill">
                      Plan Your Visit
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3" style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
                    🤝
                  </div>
                  <Card.Title className="h4 mb-3">Small Groups</Card.Title>
                  <Card.Text className="text-muted">
                    Connect with others in a small group setting for deeper relationships and spiritual growth.
                  </Card.Text>
                  <Link href="/fellowship">
                    <Button variant="outline-primary" className="rounded-pill">
                      Find a Group
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3" style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
                    ❤️
                  </div>
                  <Card.Title className="h4 mb-3">Serve</Card.Title>
                  <Card.Text className="text-muted">
                    Use your gifts and talents to serve others and make a difference in our community.
                  </Card.Text>
                  <Link href="/fellowship">
                    <Button variant="outline-primary" className="rounded-pill">
                      Get Involved
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-custom text-white">
        <Container className="text-center">
          <h2 className="section-title text-white mb-4">Welcome to IPC Shalom Assembly</h2>
          <p className="lead mb-4">
            Join us on Sundays at 10:00 AM and 1:00 PM
          </p>
          <div className="info-banner bg-white text-dark">
            <h5 className="mb-2">Address</h5>
            <p className="mb-0">
              No 1, Puliyur 2nd Main Rd, Trustpurum, Kodambakkam,<br />
              Chennai, Tamil Nadu 600024
            </p>
          </div>
          <Link href="/visit">
            <Button size="lg" variant="light" className="rounded-pill px-5 mt-4">
              Plan Your Visit
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
