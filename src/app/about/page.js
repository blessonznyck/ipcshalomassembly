'use client'

import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <Container>
          <h1 className="display-4 fw-bold">About IPC Shalom Assembly</h1>
          <p className="lead">Learning to follow Jesus together</p>
        </Container>
      </section>

      {/* Our Story */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Our Story</h2>
              <p className="lead text-muted mb-4">
                IPC Shalom Assembly was founded with a simple mission: to make Jesus known to everyone, everywhere.
              </p>
              <p>
                We are a diverse community of believers who are learning to follow Jesus in the 21st century. 
                Our church is a place where people from all walks of life can come together to worship, grow, 
                and serve. We believe that everyone has a place at God&apos;s table, and we strive to create an 
                environment where all people feel welcomed and valued.
              </p>
              <p>
                At IPC Shalom Assembly, we don&apos;t claim to have it all figured out. We&apos;re a community of 
                imperfect people following a perfect Savior. Our goal is not to be perfect, but to point 
                others to Jesus who is.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Believe */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">What We Believe</h2>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="h-100 p-4 bg-white rounded shadow-sm position-relative overflow-hidden text-center">
                <div 
                  className="position-absolute top-0 start-0 w-100 h-2" 
                  style={{ 
                    height: '4px', 
                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' 
                  }}
                ></div>
                <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>📖</div>
                <h4 className="mb-3">The Bible</h4>
                <p className="text-muted mb-0">
                  We believe the Bible is God&apos;s Word and is our final authority for faith and life. 
                  It is inspired, infallible, and relevant for today.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="h-100 p-4 bg-white rounded shadow-sm position-relative overflow-hidden text-center">
                <div 
                  className="position-absolute top-0 start-0 w-100 h-2" 
                  style={{ 
                    height: '4px', 
                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' 
                  }}
                ></div>
                <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>✨</div>
                <h4 className="mb-3">God</h4>
                <p className="text-muted mb-0">
                  We believe in one God who exists in three persons: Father, Son, and Holy Spirit. 
                  God is loving, just, and actively involved in our lives.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="h-100 p-4 bg-white rounded shadow-sm position-relative overflow-hidden text-center">
                <div 
                  className="position-absolute top-0 start-0 w-100 h-2" 
                  style={{ 
                    height: '4px', 
                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' 
                  }}
                ></div>
                <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>✝️</div>
                <h4 className="mb-3">Jesus Christ</h4>
                <p className="text-muted mb-0">
                  We believe Jesus is the Son of God who came to earth, lived a sinless life, died 
                  on the cross for our sins, and rose again. Through faith in Him, we have eternal life.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="h-100 p-4 bg-white rounded shadow-sm position-relative overflow-hidden text-center">
                <div 
                  className="position-absolute top-0 start-0 w-100 h-2" 
                  style={{ 
                    height: '4px', 
                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' 
                  }}
                ></div>
                <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🎁</div>
                <h4 className="mb-3">Salvation</h4>
                <p className="text-muted mb-0">
                  We believe salvation is a gift from God that comes through faith in Jesus Christ. 
                  It cannot be earned but is freely given to all who believe.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="h-100 p-4 bg-white rounded shadow-sm position-relative overflow-hidden text-center">
                <div 
                  className="position-absolute top-0 start-0 w-100 h-2" 
                  style={{ 
                    height: '4px', 
                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' 
                  }}
                ></div>
                <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>⛪</div>
                <h4 className="mb-3">The Church</h4>
                <p className="text-muted mb-0">
                  We believe the church is the body of Christ and exists to worship God, build up 
                  believers, and reach out to the world with the gospel.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="h-100 p-4 bg-white rounded shadow-sm position-relative overflow-hidden text-center">
                <div 
                  className="position-absolute top-0 start-0 w-100 h-2" 
                  style={{ 
                    height: '4px', 
                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' 
                  }}
                ></div>
                <div className="mb-3 text-primary-custom" style={{ fontSize: '2.5rem' }}>🕊️</div>
                <h4 className="mb-3">The Holy Spirit</h4>
                <p className="text-muted mb-0">
                  We believe the Holy Spirit empowers believers for Christian living and service, 
                  guides us into truth, and produces spiritual fruit in our lives.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values */}
      <section className="section">
        <Container>
          <h2 className="section-title text-center mb-5">Our Core Values</h2>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <div className="text-center">
                <div className="mb-3" style={{ fontSize: '3rem' }}>🙏</div>
                <h4>Worship</h4>
                <p className="text-muted">
                  We prioritize authentic worship that honors God and transforms lives.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <div className="text-center">
                <div className="mb-3" style={{ fontSize: '3rem' }}>📖</div>
                <h4>Scripture</h4>
                <p className="text-muted">
                  We are committed to teaching and living according to God&apos;s Word.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <div className="text-center">
                <div className="mb-3" style={{ fontSize: '3rem' }}>🤝</div>
                <h4>Community</h4>
                <p className="text-muted">
                  We believe life change happens in the context of authentic relationships.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <div className="text-center">
                <div className="mb-3" style={{ fontSize: '3rem' }}>🌍</div>
                <h4>Mission</h4>
                <p className="text-muted">
                  We are passionate about reaching our community and the world with the gospel.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Pastors - Past and Present */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Our Pastoral Heritage</h2>
          <Row>
            <Col lg={10} className="mx-auto">
              <p className="text-center text-muted mb-5">
                Throughout the years, IPC Shalom Assembly has been blessed with godly shepherds who have faithfully served our congregation. 
                We honor their dedication and legacy of spiritual leadership.
              </p>
              
              <div className="mb-5">
                <h3 className="h4 mb-4 text-primary-custom">Current Leadership</h3>
                <Row className="g-4">
                  <Col md={6}>
                    <div className="bg-white p-4 rounded shadow-sm border-start border-primary-custom border-4">
                      <h5 className="mb-2">Rev. John Smith</h5>
                      <p className="text-muted mb-1">Senior Pastor</p>
                      <p className="small text-muted mb-0">Serving since 2018</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-white p-4 rounded shadow-sm border-start border-primary-custom border-4">
                      <h5 className="mb-2">Sister Grace Williams</h5>
                      <p className="text-muted mb-1">Youth Secretary</p>
                      <p className="small text-muted mb-0">Serving since 2023</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-white p-4 rounded shadow-sm border-start border-primary-custom border-4">
                      <h5 className="mb-2">Sister Mary Joseph</h5>
                      <p className="text-muted mb-1">Women&apos;s Group Secretary</p>
                      <p className="small text-muted mb-0">Serving since 2024</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-white p-4 rounded shadow-sm border-start border-primary-custom border-4">
                      <h5 className="mb-2">Brother Thomas Matthew</h5>
                      <p className="text-muted mb-1">Church Secretary</p>
                      <p className="small text-muted mb-0">Serving since 2022</p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div>
                <h3 className="h4 mb-4 text-primary-custom">Former Pastors</h3>
                <div className="bg-white p-4 rounded shadow-sm">
                  <Row className="g-3">
                    <Col md={6}>
                      <div className="d-flex align-items-center pb-3 border-bottom">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✝</div>
                        <div>
                          <h6 className="mb-0">Rev. David Williams</h6>
                          <small className="text-muted">2010 - 2018</small>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-center pb-3 border-bottom">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✝</div>
                        <div>
                          <h6 className="mb-0">Rev. Grace Thompson</h6>
                          <small className="text-muted">2005 - 2010</small>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-center pb-3 border-bottom">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✝</div>
                        <div>
                          <h6 className="mb-0">Rev. James Anderson</h6>
                          <small className="text-muted">1998 - 2005</small>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-center pb-3 border-bottom">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✝</div>
                        <div>
                          <h6 className="mb-0">Rev. Robert Martinez</h6>
                          <small className="text-muted">1992 - 1998</small>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-center pb-3 border-bottom">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✝</div>
                        <div>
                          <h6 className="mb-0">Rev. Thomas Brown</h6>
                          <small className="text-muted">1985 - 1992</small>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-center pb-3 border-bottom">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✝</div>
                        <div>
                          <h6 className="mb-0">Rev. Samuel Lee</h6>
                          <small className="text-muted">1978 - 1985</small>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-center pb-3 border-bottom">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✝</div>
                        <div>
                          <h6 className="mb-0">Rev. Daniel Miller</h6>
                          <small className="text-muted">1970 - 1978</small>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-center pb-3 border-bottom">
                        <div className="text-primary-custom me-3" style={{ fontSize: '1.5rem' }}>✝</div>
                        <div>
                          <h6 className="mb-0">Rev. Peter Johnson</h6>
                          <small className="text-muted">Founding Pastor (1965 - 1970)</small>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="text-center mt-5">
                <p className="text-muted fst-italic">
                  We are grateful for each pastor who has served IPC Shalom Assembly with dedication, 
                  wisdom, and love for God&apos;s people throughout our history.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
