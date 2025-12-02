'use client'

import { Container, Row, Col, Card } from 'react-bootstrap'
import Link from 'next/link'

export default function Fellowship() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <Container>
          <Col lg={10} className="mx-auto text-center">
              <h1 className="section-title text-white">Growing Together in Faith</h1>
              <p className="lead text-white">
                At IPC Shalom Assembly, fellowship is at the heart of our church community. 
                We believe in building strong relationships, supporting one another, 
                and growing together in our walk with Christ.
              </p>
            </Col>
        </Container>
      </section>

      {/* Fellowship Groups */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Our Fellowship Groups</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '3rem' }}>🎸</div>
                  <Card.Title className="h3 mb-3">Youth Fellowship</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    A dynamic community for young people to grow in faith, build friendships, 
                    and discover God&apos;s purpose for their lives through worship, teaching, 
                    and fun activities.
                  </Card.Text>
                  <Link href="/fellowship/youth">
                    <button className="btn btn-outline-primary rounded-pill">
                      Learn More
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '3rem' }}>👭</div>
                  <Card.Title className="h3 mb-3">Sisters Fellowship</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    A supportive community where women gather for prayer, Bible study, 
                    encouragement, and fellowship. Building strong bonds of sisterhood 
                    in Christ.
                  </Card.Text>
                  <Link href="/fellowship/sisters">
                    <button className="btn btn-outline-primary rounded-pill">
                      Learn More
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '3rem' }}>🤝</div>
                  <Card.Title className="h3 mb-3">Outreach Program</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Serving our community with the love of Christ through various outreach 
                    initiatives, community service projects, and missions that make a 
                    real difference.
                  </Card.Text>
                  <Link href="/fellowship/outreach">
                    <button className="btn btn-outline-primary rounded-pill">
                      Learn More
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '3rem' }}>📚</div>
                  <Card.Title className="h3 mb-3">Sunday School</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Age-appropriate Bible teaching for children and adults. Engaging lessons 
                    that help everyone grow in their understanding of God&apos;s Word and 
                    apply it to daily life.
                  </Card.Text>
                  <Link href="/fellowship/sunday-school">
                    <button className="btn btn-outline-primary rounded-pill">
                      Learn More
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Get Involved */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Get Involved</h2>
              <p className="lead text-muted mb-4">
                Everyone has a place in our fellowship. Whether you&apos;re new to faith 
                or have been following Jesus for years, we invite you to join us and 
                experience the joy of Christian community.
              </p>
              <div className="info-banner">
                <h5>Ready to Connect?</h5>
                <p className="mb-0">
                  Contact us at <strong>fellowship@ipcshalom.org</strong> or call 
                  <strong> (555) 123-4567</strong> to learn more about our fellowship groups.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
