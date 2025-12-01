'use client'

import { Container, Row, Col, Card } from 'react-bootstrap'
import Link from 'next/link'

export default function SundaySchool() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <Container>
          <h1 className="display-4 fw-bold">Sunday School</h1>
          <p className="lead">Growing in God&apos;s Word together</p>
        </Container>
      </section>

      {/* Introduction */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Learning God&apos;s Word</h2>
              <p className="lead text-muted">
                Our Sunday School program provides age-appropriate Bible teaching for 
                everyone from children to adults. We believe that understanding God&apos;s 
                Word is essential for spiritual growth and living out our faith daily.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Age Groups */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Classes by Age Group</h2>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>👶</div>
                  <Card.Title className="h4 mb-3">Nursery</Card.Title>
                  <p className="text-muted mb-2"><strong>Ages 0-3</strong></p>
                  <Card.Text className="text-muted">
                    A safe and nurturing environment with caring volunteers. Basic Bible 
                    stories through songs, play, and simple activities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🎨</div>
                  <Card.Title className="h4 mb-3">Preschool</Card.Title>
                  <p className="text-muted mb-2"><strong>Ages 4-5</strong></p>
                  <Card.Text className="text-muted">
                    Interactive lessons with crafts, games, and songs. Learning about 
                    God&apos;s love through engaging stories and hands-on activities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>📖</div>
                  <Card.Title className="h4 mb-3">Elementary</Card.Title>
                  <p className="text-muted mb-2"><strong>Grades 1-5</strong></p>
                  <Card.Text className="text-muted">
                    Bible stories, scripture memorization, and practical applications. 
                    Learning how to apply God&apos;s Word to everyday situations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🎯</div>
                  <Card.Title className="h4 mb-3">Middle School</Card.Title>
                  <p className="text-muted mb-2"><strong>Grades 6-8</strong></p>
                  <Card.Text className="text-muted">
                    Deeper Bible study addressing relevant topics. Discussion-based 
                    learning that encourages questions and critical thinking.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🎓</div>
                  <Card.Title className="h4 mb-3">High School</Card.Title>
                  <p className="text-muted mb-2"><strong>Grades 9-12</strong></p>
                  <Card.Text className="text-muted">
                    Exploring faith, apologetics, and life application. Preparing young 
                    adults to defend their faith and live authentically for Christ.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>👥</div>
                  <Card.Title className="h4 mb-3">Adult Classes</Card.Title>
                  <p className="text-muted mb-2"><strong>Ages 18+</strong></p>
                  <Card.Text className="text-muted">
                    Multiple class options including book studies, topical studies, and 
                    verse-by-verse Bible teaching for various life stages.
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
              <h2 className="section-title text-center mb-4">Sunday Schedule</h2>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-4 pb-3 border-bottom">
                    <h5 className="text-primary-custom mb-2">Morning Session</h5>
                    <p className="mb-1"><strong>Time:</strong> 9:00 AM - 10:00 AM</p>
                    <p className="text-muted mb-0">
                      All age groups meet for Bible study before the morning worship service.
                    </p>
                  </div>
                  <div className="mb-4 pb-3 border-bottom">
                    <h5 className="text-primary-custom mb-2">Children During Service</h5>
                    <p className="mb-1"><strong>Time:</strong> During 11:00 AM Service</p>
                    <p className="text-muted mb-0">
                      Children&apos;s program available during the worship service for ages 4-10.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-primary-custom mb-2">Check-In</h5>
                    <p className="text-muted mb-0">
                      First-time visitors should check in at the Welcome Center in the main 
                      lobby. We&apos;ll help you find the right class and give you a tour of 
                      our facilities.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Teach */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title text-center mb-4">What We Teach</h2>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <p className="lead text-muted mb-4">
                    Our Sunday School curriculum is Bible-based and Christ-centered. 
                    We focus on:
                  </p>
                  <Row>
                    <Col md={6} className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✓</div>
                        <div>
                          <h6 className="mb-1">Biblical Truth</h6>
                          <p className="text-muted small mb-0">
                            Teaching the whole counsel of God&apos;s Word accurately and faithfully.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✓</div>
                        <div>
                          <h6 className="mb-1">Practical Application</h6>
                          <p className="text-muted small mb-0">
                            Helping students apply biblical principles to everyday life.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✓</div>
                        <div>
                          <h6 className="mb-1">Character Development</h6>
                          <p className="text-muted small mb-0">
                            Building godly character and Christian values in every student.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✓</div>
                        <div>
                          <h6 className="mb-1">Scripture Memorization</h6>
                          <p className="text-muted small mb-0">
                            Hiding God&apos;s Word in our hearts through regular scripture memory.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Teachers */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Our Teachers</h2>
              <p className="lead text-muted mb-4">
                All our Sunday School teachers are committed Christians who have been 
                background-checked and trained. They bring passion, creativity, and a 
                heart for teaching God&apos;s Word to students of all ages.
              </p>
              <div className="info-banner">
                <h5>Interested in Teaching?</h5>
                <p className="mb-0">
                  We&apos;re always looking for dedicated volunteers to join our teaching 
                  team. Contact us at <strong>sundayschool@ipcshalom.org</strong>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Join Us */}
      <section className="section bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Join Us This Sunday</h2>
              <p className="lead text-muted mb-4">
                Whether you&apos;re a first-time visitor or a regular attender, we&apos;d 
                love to have you join us for Sunday School. Come as you are and grow in 
                your knowledge of God&apos;s Word.
              </p>
              <div className="info-banner">
                <h5>Questions About Sunday School?</h5>
                <p className="mb-0">
                  Contact us at <strong>sundayschool@ipcshalom.org</strong> or 
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
