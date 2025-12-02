"use client";

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="mb-4">
            <Image
              src="/logo.jpg"
              alt="IPC Shalom Assembly Logo"
              width={100}
              height={100}
              style={{ objectFit: "cover", borderRadius: "50%" }}
              priority
            />
          </div>
          <div
            className="text-uppercase mb-3"
            style={{ letterSpacing: "2px", fontSize: "0.9rem" }}
          >
            IPC SHALOM ASSEMBLY
          </div>
          <h1 className="display-3 fw-bold mb-4">
            MAKING JESUS KNOWN TO{" "}
            <span className="d-block mt-2">EVERYONE, EVERYWHERE</span>
          </h1>
          <p className="subtitle lead mb-4">
            Encouraging one another to grow in love and good works. Hebrews
            10:24
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
                We&apos;re a church{" "}
                <span className="text-primary-custom">
                  all about loving Jesus.
                </span>
              </h2>
              <p className="lead text-muted">
                We&apos;re a diverse church learning to follow Jesus in the 21st
                century. At IPC Shalom Assembly, you&apos;ll find surprisingly
                normal people who are admittedly still in process.
              </p>
              <p className="text-muted">
                Our goal isn&apos;t to pretend we&apos;re perfect, but to point
                you to the one who is. We believe in creating a welcoming
                community where everyone can grow in their faith journey.
              </p>
              <Link href="/about">
                <Button
                  variant="outline-primary"
                  className="rounded-pill px-4 mt-3"
                >
                  Learn More About Us
                </Button>
              </Link>
            </Col>
            <Col lg={6}>
              <div
                className="bg-primary-custom text-white p-5 rounded"
                style={{ minHeight: "300px" }}
              >
                <h3 className="mb-4">Our Mission</h3>
                <p className="lead">
                  To make Jesus known to everyone, everywhere through authentic
                  relationships, practical teaching, and compassionate service.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Connect Section */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "150px",
            height: "150px",
            background: "rgba(43, 122, 142, 0.1)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            right: "10%",
            width: "200px",
            height: "200px",
            background: "rgba(156, 39, 176, 0.1)",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "15%",
            width: "100px",
            height: "100px",
            background: "rgba(72, 167, 186, 0.15)",
            borderRadius: "50%",
            filter: "blur(30px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "20%",
            width: "80px",
            height: "80px",
            background: "rgba(43, 122, 142, 0.12)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            filter: "blur(25px)",
          }}
        ></div>
        <Container style={{ position: "relative", zIndex: 1 }}>
          <div className="text-center mb-5">
            <h2 className="section-title">Get Connected</h2>
            <p className="lead text-muted">
              &quot;Let us consider how to stir up one another to love and good
              works.&quot; Hebrews 10:24
            </p>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="glass-card">
                <Card.Body className="text-center p-4">
                  <div
                    className="mb-3"
                    style={{ fontSize: "3rem", color: "var(--primary-color)" }}
                  >
                    ⛪
                  </div>
                  <Card.Title className="h4 mb-3">
                    All Sunday Services
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Join us for worship, teaching, and fellowship every Sunday
                    at 10:00 AM and 1:00 PM (Malayalam), 8:00 AM and 11:30 AM
                    (Tamil), and 8:00 AM and 11:30 AM (English).
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
              <Card className="glass-card">
                <Card.Body className="text-center p-4">
                  <div
                    className="mb-3"
                    style={{ fontSize: "3rem", color: "var(--primary-color)" }}
                  >
                    🤝
                  </div>
                  <Card.Title className="h4 mb-3">Fellowship</Card.Title>
                  <Card.Text className="text-muted">
                    Join one of our fellowship groups to grow spiritually. We
                    offer a variety of ministries including Sister&apos;s
                    Fellowship, Youth Fellowship, Sunday School, and Outreach
                    Programs
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
              <Card className="glass-card">
                <Card.Body className="text-center p-4">
                  <div
                    className="mb-3"
                    style={{ fontSize: "3rem", color: "var(--primary-color)" }}
                  >
                    🎙️
                  </div>
                  <Card.Title className="h4 mb-3">Sermons</Card.Title>
                  <Card.Text className="text-muted">
                    Stay connected with God’s Word throughout the week. All our
                    sermons are available on our
                    <strong> YouTube channel</strong> — watch, learn, and grow
                    in Christ anytime.
                  </Card.Text>
                  <Link href="/sermons">
                    <Button variant="outline-primary" className="rounded-pill">
                      Watch & Listen
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
          <h2 className="section-title text-white mb-4">
            &quot;Therefore welcome one another as Christ has welcomed you, for the
            glory of God.&quot;
          </h2>
          <p className="mb-0">
            No 1, Puliyur 2nd Main Rd, Trustpurum, Kodambakkam,
            <br />
            Chennai, Tamil Nadu 600024
          </p>

          <Link href="/visit">
            <Button
              size="lg"
              variant="light"
              className="rounded-pill px-5 mt-4"
            >
              Plan Your Visit
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
