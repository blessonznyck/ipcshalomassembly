'use client'

import { Container, Row, Col, Card } from 'react-bootstrap'
import Link from 'next/link'

export default function YouthFellowship() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <Container>
          <h1 className="display-4 fw-bold">Youth Fellowship</h1>
          <p className="lead">Building the next generation of faithful followers</p>
        </Container>
      </section>

      {/* Introduction */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Welcome to Youth Fellowship</h2>
              <p className="lead text-muted">
                Our youth fellowship is a vibrant community where young people ages 13-25 
                gather to worship, learn, serve, and grow together in their faith journey. 
                We&apos;re all about authentic relationships, relevant teaching, and having 
                fun while following Jesus.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Do */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">What We Do</h2>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '3rem' }}>🙏</div>
                  <Card.Title>Weekly Meetings</Card.Title>
                  <Card.Text className="text-muted">
                    Friday evenings at 6 PM for worship, teaching, and fellowship.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '3rem' }}>📖</div>
                  <Card.Title>Bible Study</Card.Title>
                  <Card.Text className="text-muted">
                    Interactive Bible studies that make God&apos;s Word relevant to your life.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '3rem' }}>🎮</div>
                  <Card.Title>Fun Activities</Card.Title>
                  <Card.Text className="text-muted">
                    Games, sports, outings, and events that build community and friendships.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '3rem' }}>❤️</div>
                  <Card.Title>Service Projects</Card.Title>
                  <Card.Text className="text-muted">
                    Hands-on opportunities to serve our community and make a difference.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Schedule */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title text-center mb-4">Weekly Schedule</h2>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-4 pb-3 border-bottom">
                    <h5 className="text-primary-custom mb-2">Friday Youth Night</h5>
                    <p className="mb-1"><strong>Time:</strong> 6:00 PM - 8:00 PM</p>
                    <p className="text-muted mb-0">
                      Worship, teaching, small groups, and games. Dinner provided!
                    </p>
                  </div>
                  <div className="mb-4 pb-3 border-bottom">
                    <h5 className="text-primary-custom mb-2">Sunday Morning</h5>
                    <p className="mb-1"><strong>Time:</strong> 11:00 AM Service</p>
                    <p className="text-muted mb-0">
                      Youth are encouraged to join the main worship service.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-primary-custom mb-2">Monthly Events</h5>
                    <p className="mb-1"><strong>First Saturday</strong> of each month</p>
                    <p className="text-muted mb-0">
                      Special outings, service projects, or social events. Details announced monthly.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title text-center mb-4">Youth Leadership</h2>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <div className="mb-3 text-primary-custom" style={{ fontSize: '4rem' }}>👤</div>
                    <h4>Sister Grace Williams</h4>
                    <p className="text-muted mb-0">Youth Secretary</p>
                  </div>
                  <p className="text-center text-muted">
                    Sister Grace is passionate about helping young people discover their identity 
                    in Christ and grow in their faith. She brings energy, creativity, and a heart 
                    for youth ministry.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Join Us */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Join Us!</h2>
              <p className="lead text-muted mb-4">
                All young people ages 13-25 are welcome! Bring your friends and come 
                experience a community where you can be yourself, ask questions, and 
                grow in your faith.
              </p>
              <div className="info-banner">
                <h5>Questions or Want to Connect?</h5>
                <p className="mb-0">
                  Contact Sister Grace at <strong>youth@ipcshalom.org</strong> or 
                  call <strong>(555) 123-4567</strong>
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
