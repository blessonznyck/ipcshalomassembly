'use client'

import { Container, Row, Col, Card } from 'react-bootstrap'
import Link from 'next/link'

export default function OutreachProgram() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <Container>
          <h1 className="display-4 fw-bold">Outreach Program</h1>
          <p className="lead">Serving our community with the love of Christ</p>
        </Container>
      </section>

      {/* Introduction */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Making a Difference Together</h2>
              <p className="lead text-muted">
                Our outreach program is dedicated to serving our local community and beyond 
                with the compassion and love of Jesus. We believe that faith becomes real 
                when we put it into action by meeting practical needs and sharing hope.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Outreach Initiatives */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Our Outreach Initiatives</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🍞</div>
                  <Card.Title className="h4 mb-3">Food Ministry</Card.Title>
                  <Card.Text className="text-muted">
                    Monthly food distribution to families in need. We partner with local food 
                    banks and organize food drives to ensure no one in our community goes hungry.
                  </Card.Text>
                  <div className="mt-3 pt-3 border-top">
                    <small className="text-muted">
                      <strong>When:</strong> Last Saturday of each month
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>👕</div>
                  <Card.Title className="h4 mb-3">Clothing Drive</Card.Title>
                  <Card.Text className="text-muted">
                    Collecting and distributing clothing, shoes, and essential items to those 
                    facing financial hardship. We organize seasonal clothing drives throughout 
                    the year.
                  </Card.Text>
                  <div className="mt-3 pt-3 border-top">
                    <small className="text-muted">
                      <strong>When:</strong> Quarterly (March, June, Sept, Dec)
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🏥</div>
                  <Card.Title className="h4 mb-3">Hospital Visitation</Card.Title>
                  <Card.Text className="text-muted">
                    Visiting and providing comfort to patients in local hospitals. Our team 
                    offers prayer, encouragement, and practical support to those facing health 
                    challenges.
                  </Card.Text>
                  <div className="mt-3 pt-3 border-top">
                    <small className="text-muted">
                      <strong>When:</strong> Weekly visits by appointment
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🏠</div>
                  <Card.Title className="h4 mb-3">Community Clean-Up</Card.Title>
                  <Card.Text className="text-muted">
                    Neighborhood beautification projects, park clean-ups, and helping elderly 
                    or disabled community members with home maintenance and yard work.
                  </Card.Text>
                  <div className="mt-3 pt-3 border-top">
                    <small className="text-muted">
                      <strong>When:</strong> Second Saturday of each month
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>📚</div>
                  <Card.Title className="h4 mb-3">Education Support</Card.Title>
                  <Card.Text className="text-muted">
                    Providing tutoring, school supplies, and scholarship assistance to students 
                    in need. We partner with local schools to identify and support struggling 
                    students.
                  </Card.Text>
                  <div className="mt-3 pt-3 border-top">
                    <small className="text-muted">
                      <strong>When:</strong> During school year
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🌍</div>
                  <Card.Title className="h4 mb-3">Missions Support</Card.Title>
                  <Card.Text className="text-muted">
                    Supporting missionaries and mission organizations both locally and 
                    internationally through prayer, financial support, and short-term mission 
                    trips.
                  </Card.Text>
                  <div className="mt-3 pt-3 border-top">
                    <small className="text-muted">
                      <strong>When:</strong> Ongoing support
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How to Get Involved */}
      <section className="section">
        <Container>
          <h2 className="section-title text-center mb-5">How to Get Involved</h2>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow-sm mb-4">
                <Card.Body className="p-4">
                  <h4 className="text-primary-custom mb-4">Ways to Serve</h4>
                  <div className="mb-3 pb-3 border-bottom">
                    <h6>Volunteer Your Time</h6>
                    <p className="text-muted mb-0">
                      Join us for any of our regular outreach activities. Whether you can 
                      serve weekly or just once a month, your time makes a difference.
                    </p>
                  </div>
                  <div className="mb-3 pb-3 border-bottom">
                    <h6>Donate Resources</h6>
                    <p className="text-muted mb-0">
                      Contribute food, clothing, school supplies, or other items needed for 
                      our various programs. Check our current needs list.
                    </p>
                  </div>
                  <div className="mb-3 pb-3 border-bottom">
                    <h6>Financial Support</h6>
                    <p className="text-muted mb-0">
                      Your financial gifts help us expand our reach and meet more needs in 
                      our community.
                    </p>
                  </div>
                  <div>
                    <h6>Prayer Support</h6>
                    <p className="text-muted mb-0">
                      Pray for those we serve, our volunteers, and for God to guide our 
                      outreach efforts.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Making an Impact</h2>
              <p className="lead text-muted mb-4">
                Through our outreach program, we&apos;ve been able to serve hundreds of 
                families and individuals in our community. Every act of service, no matter 
                how small, makes a difference in someone&apos;s life.
              </p>
              <Row className="g-4 mb-4">
                <Col md={4}>
                  <div className="p-3">
                    <h3 className="display-4 text-primary-custom mb-2">500+</h3>
                    <p className="text-muted mb-0">Families Served Annually</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-3">
                    <h3 className="display-4 text-primary-custom mb-2">50+</h3>
                    <p className="text-muted mb-0">Active Volunteers</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-3">
                    <h3 className="display-4 text-primary-custom mb-2">12</h3>
                    <p className="text-muted mb-0">Monthly Programs</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Join Us */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Join Our Outreach Team</h2>
              <p className="lead text-muted mb-4">
                Be part of making a real difference in our community. Everyone has 
                something to contribute, and together we can show God&apos;s love in 
                practical ways.
              </p>
              <div className="info-banner">
                <h5>Get Started Today</h5>
                <p className="mb-0">
                  Contact us at <strong>outreach@ipcshalom.org</strong> or 
                  call <strong>(555) 123-4567</strong> to learn more about volunteer 
                  opportunities.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/fellowship">
                  <button className="btn btn-outline-primary rounded-pill px-4">
                    ← Back to Fellowship
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
