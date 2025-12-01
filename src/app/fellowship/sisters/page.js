'use client'

import { Container, Row, Col, Card } from 'react-bootstrap'
import Link from 'next/link'

export default function SistersFellowship() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <Container>
          <h1 className="display-4 fw-bold">Sisters Fellowship</h1>
          <p className="lead">Women growing together in faith and friendship</p>
        </Container>
      </section>

      {/* Introduction */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">A Community of Grace</h2>
              <p className="lead text-muted">
                The Sisters Fellowship is a warm and welcoming community where women of all 
                ages come together to encourage one another, study God&apos;s Word, pray, 
                and build lasting friendships. We believe that when women gather in faith, 
                amazing things happen.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Offer */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">What We Offer</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>📖</div>
                  <Card.Title className="h4 mb-3">Bible Study</Card.Title>
                  <Card.Text className="text-muted">
                    Weekly Bible studies that dive deep into Scripture, helping us understand 
                    God&apos;s Word and apply it to our daily lives. We study various books 
                    of the Bible and relevant topics for women.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🙏</div>
                  <Card.Title className="h4 mb-3">Prayer Groups</Card.Title>
                  <Card.Text className="text-muted">
                    Regular prayer meetings where we intercede for one another, our families, 
                    our church, and our community. We believe in the power of united prayer 
                    among sisters in Christ.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>☕</div>
                  <Card.Title className="h4 mb-3">Fellowship Events</Card.Title>
                  <Card.Text className="text-muted">
                    Monthly social gatherings, tea times, and special events that provide 
                    opportunities to connect, laugh, and build meaningful friendships in a 
                    relaxed atmosphere.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>❤️</div>
                  <Card.Title className="h4 mb-3">Ministry & Service</Card.Title>
                  <Card.Text className="text-muted">
                    Opportunities to serve together in the church and community, including 
                    hospitality ministry, caring for those in need, and supporting various 
                    church initiatives.
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
              <h2 className="section-title text-center mb-4">Meeting Schedule</h2>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-4 pb-3 border-bottom">
                    <h5 className="text-primary-custom mb-2">Weekly Bible Study</h5>
                    <p className="mb-1"><strong>Time:</strong> Wednesdays at 10:00 AM</p>
                    <p className="text-muted mb-0">
                      In-depth Bible study with discussion and fellowship. Childcare available.
                    </p>
                  </div>
                  <div className="mb-4 pb-3 border-bottom">
                    <h5 className="text-primary-custom mb-2">Prayer Meeting</h5>
                    <p className="mb-1"><strong>Time:</strong> First Friday of each month at 7:00 PM</p>
                    <p className="text-muted mb-0">
                      An evening dedicated to prayer, worship, and seeking God together.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-primary-custom mb-2">Monthly Fellowship</h5>
                    <p className="mb-1"><strong>Time:</strong> Third Saturday of each month at 2:00 PM</p>
                    <p className="text-muted mb-0">
                      Social gatherings with refreshments, activities, and time to connect.
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
              <h2 className="section-title text-center mb-4">Leadership</h2>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <div className="mb-3 text-primary-custom" style={{ fontSize: '4rem' }}>👤</div>
                    <h4>Sister Mary Joseph</h4>
                    <p className="text-muted mb-0">Women&apos;s Group Secretary</p>
                  </div>
                  <p className="text-center text-muted">
                    Sister Mary has a heart for women&apos;s ministry and a passion for helping 
                    women grow in their relationship with God. She creates a welcoming environment 
                    where every woman feels valued and encouraged.
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
              <h2 className="section-title">You&apos;re Welcome Here</h2>
              <p className="lead text-muted mb-4">
                All women are welcome to join us, regardless of age or stage of life. 
                Whether you&apos;re single, married, a mom, or empty-nester, you&apos;ll 
                find a place to belong and grow in our sisterhood.
              </p>
              <div className="info-banner">
                <h5>Connect With Us</h5>
                <p className="mb-0">
                  Contact Sister Mary at <strong>sisters@ipcshalom.org</strong> or 
                  call <strong>(555) 123-4567</strong> for more information.
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
