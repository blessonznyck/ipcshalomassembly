"use client";

import { Container, Row, Col, Card } from "react-bootstrap";

export default function Visit() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{ minHeight: "40vh" }}>
        <Container>
          <Col lg={10} className="mx-auto text-center">
            <h2 className="section-title text-white">
              Welcome to IPC Shalom Assembly
            </h2>
            <p className="lead bs-w">
              Whether you&apos;re new to church or have been attending for
              years, we want you to feel welcomed and valued. As Paul says
              "Therefore welcome one another as Christ has welcomed you, for the
              glory of God."
            </p>
          </Col>
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
                  <div
                    className="mb-3 text-primary-custom"
                    style={{ fontSize: "2.5rem" }}
                  >
                    👶
                  </div>
                  <h4 className="mb-3">Children&apos;s Ministry</h4>
                  <p className="text-muted">
                    We have a vibrant Sunday School ministry designed to
                    strengthen children and youth spiritually. Students from
                    ages 3 to 20 can take part in age-appropriate classes where
                    they learn the Bible through engaging lessons, worship,
                    activities, and Christian values. Our dedicated teachers are
                    committed to helping every child grow in their faith,
                    discover their God-given purpose, and build a strong
                    foundation in God&apos;s Word. We also host special
                    programs, Scripture memorization activities, and annual
                    events that encourage spiritual growth and fellowship among
                    our young people.
                  </p>
                  <div className="info-banner mt-3">
                    <p className="mb-0">
                      <strong>Check-In:</strong> Every Sunday morning, Sunday
                      School is held from 9:00 A.M to 10:00 A.M for all students
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="p-4">
                  <div
                    className="mb-3 text-primary-custom"
                    style={{ fontSize: "2.5rem" }}
                  >
                    🎸
                  </div>
                  <h4 className="mb-3">Youth Ministry</h4>
                  <p className="text-muted">
                    Middle and high school students are welcome to join the main
                    service or attend our youth gathering on Sunday evenings at
                    6 PM. We focus on relevant teaching, authentic community,
                    and meaningful activities that help students grow
                    spiritually. Every year, we also host a Youth Camp that
                    strengthens and equips our young people in their walk with
                    Christ. In addition, our students can participate in the
                    PYPA State-Level Talent Test, where they can develop and
                    showcase their God-given talents. We also hold a PYPA youth
                    meeting on the second Saturday of every month
                  </p>
                  <div className="info-banner mt-3">
                    <p className="mb-0">
                      <strong>Youth service:</strong> Every 2<sup>nd</sup>{" "}
                      Sunday during the end of the service.
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
                    We invite you to grow in God&apos;s Word with us.
                  </p>

                  <div className="info-banner mt-4">
                    <p className="mb-0">
                      Email us at <strong>visit@ipcshalom.org</strong> or call{" "}
                      <strong>(555) 123-4567</strong>. We&apos;re happy to
                      answer any questions you have!
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
                  <div className="text-center mt-4">
                    <p className="text-muted mb-2">
                      <strong>Address:</strong> No 1, Puliyur 2nd Main Rd,
                      Trustpurum, Kodambakkam, Chennai, Tamil Nadu 600024
                    </p>
                    <a
                      href="https://www.google.com/maps/place/IPC+SHALOM+ASSEMBLY+CHURCH/@13.0533558,80.2226805,20z/data=!4m6!3m5!1s0x3a5267d6913eebff:0x23986e71c5c8b317!8m2!3d13.0533886!4d80.2226815!16s%2Fg%2F11w5600ks2?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary rounded-pill px-4 mt-2 mb-4"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
