import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-4 mb-md-0 text-md-center">
            <Image 
              src="/logo.jpg" 
              alt="IPC Shalom Assembly Logo" 
              width={120} 
              height={120}
              style={{ objectFit: 'contain' }}
            />
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="mb-3">IPC Shalom Assembly</h5>
            <p className="text-white-50">
              Making Jesus known to everyone, everywhere. Join us as we learn to follow Jesus in the 21st century.
            </p>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
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
          <Col md={3}>
            <h5 className="mb-3">Contact</h5>
            <p className="text-white-50 mb-2">
              <strong>Sundays Service Times:</strong><br />
              Malayalam :  10:00 AM and 1:00 PM<br />
              Tamil :  8:00 AM and 11:30 AM<br />
              English :  8:00 AM and 11:30 AM<br />
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
