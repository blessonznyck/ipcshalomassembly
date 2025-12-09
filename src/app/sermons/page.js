'use client'

import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Sermons() {
  const sermons = [
    {
      title: 'Living with Purpose',
      speaker: 'Pastor John Smith',
      date: 'November 26, 2025',
      description: 'Discover how God has uniquely created you with a purpose and calling that matters.',
      videoUrl: 'https://www.youtube.com/embed/rn9-UNer6MQ'
    },
    {
      title: 'The Power of Grace',
      speaker: 'Pastor Sarah Johnson',
      date: 'November 19, 2025',
      description: 'Understanding God\'s amazing grace and how it transforms our daily lives.',
      videoUrl: 'https://www.youtube.com/embed/rn9-UNer6MQ'
    },
    {
      title: 'Faith in Action',
      speaker: 'Pastor John Smith',
      date: 'November 12, 2025',
      description: 'How to put your faith into practice through serving others and making a difference.',
      videoUrl: 'https://www.youtube.com/embed/rn9-UNer6MQ'
    },
    {
      title: 'Building Strong Relationships',
      speaker: 'Pastor Mike Davis',
      date: 'November 5, 2025',
      description: 'Biblical principles for creating healthy, lasting relationships in all areas of life.',
      videoUrl: 'https://www.youtube.com/embed/rn9-UNer6MQ'
    },
    {
      title: 'Overcoming Fear',
      speaker: 'Pastor Sarah Johnson',
      date: 'October 29, 2025',
      description: 'Finding courage and strength in God when facing life\'s challenges and uncertainties.',
      videoUrl: 'https://www.youtube.com/embed/rn9-UNer6MQ'
    },
    {
      title: 'The Heart of Worship',
      speaker: 'Pastor John Smith',
      date: 'October 22, 2025',
      description: 'What it means to worship God with our whole lives, not just on Sundays.',
      videoUrl: 'https://www.youtube.com/embed/rn9-UNer6MQ'
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <Container>
          <h1 className="display-4 fw-bold">Growing in Faith Together</h1>
          <p className="lead bs-w">
                Our sermons at IPC Shalom Assembly are designed to help you understand the Bible and apply its truths 
                to your everyday life. Whether you&apos;re new to faith or have been following 
                Jesus for years, you&apos;ll find practical wisdom and encouragement here.
              </p>
        </Container>
      </section>

      {/* Recent Sermons */}
      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Recent Messages</h2>
          <Row>
            {sermons.map((sermon, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card className="shadow-sm h-100">
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src={sermon.videoUrl} 
                      title={sermon.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body>
                    <Card.Title className="h5 mb-3">{sermon.title}</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {sermon.description}
                    </Card.Text>
                    <div className="border-top pt-3 mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          <strong>{sermon.speaker}</strong>
                        </small>
                        <small className="text-muted">{sermon.date}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Subscribe CTA */}
      <section className="section bg-primary-custom text-white">
        <Container className="text-center">
          <h2 className="section-title text-white mb-3">Never Miss a Message</h2>
          <p className="lead mb-4">
            Subscribe to our YouTube channel to stay up to date with our latest sermons.
          </p>
          <a 
            href="https://www.youtube.com/channel/UCXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-danger btn-lg"
          >
            SUBSCRIBE
          </a>
        </Container>
      </section>
    </>
  )
}
