import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">IPC Shalom Assembly</h5>
            <p className="text-white-50">
              Making Jesus known to everyone, everywhere. Join us as we learn to follow Jesus in the 21st century.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/fellowship">Fellowship</Link>
              </li>
              <li className="mb-2">
                <Link href="/sermons">Sermons</Link>
              </li>
              <li className="mb-2">
                <Link href="/visit">Visit</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Contact</h5>
            <p className="text-white-50 mb-2">
              <strong>Service Times:</strong><br />
              Sundays at 9 AM and 11 AM
            </p>
            <p className="text-white-50">
              <strong>Address:</strong><br />
              No 1, Puliyur 2nd Main Rd,<br />
              Trustpurum, Kodambakkam,<br />
              Chennai, Tamil Nadu 600024<br /><br />
              <strong>Email:</strong> info@ipcshalom.org<br />
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-3 border-top border-secondary">
            <p className="text-white-50 mb-0">
              &copy; {currentYear} IPC Shalom Assembly. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
