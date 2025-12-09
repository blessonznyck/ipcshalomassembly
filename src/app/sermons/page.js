'use client'

import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export default function Sermons() {
  const [sermons, setSermons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    fetchSermons(currentPage)
  }, [currentPage])

  const fetchSermons = async (page) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`/api/sermons?page=${page}&pageSize=6`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch sermons')
      }
      
      const data = await response.json()
      
      setSermons(data.sermons)
      setTotalPages(data.totalPages)
      setHasMore(data.hasMore)
    } catch (err) {
      console.error('Error fetching sermons:', err)
      setError('Unable to load sermons. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

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
          
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p className="mt-3 text-muted">Loading sermons...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          ) : sermons.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">No sermons available at this time.</p>
            </div>
          ) : (
            <>
              <Row>
                {sermons.map((sermon) => (
                  <Col key={sermon.id} md={6} lg={4} className="mb-4">
                    <Card className="shadow-sm h-100">
                      {sermon.videoId ? (
                        <div className="ratio ratio-16x9">
                          <iframe 
                            src={`https://www.youtube.com/embed/${sermon.videoId}`}
                            title={sermon.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <div className="ratio ratio-16x9 bg-light d-flex align-items-center justify-content-center">
                          <p className="text-muted">Video not available</p>
                        </div>
                      )}
                      <Card.Body>
                        <Card.Title className="h5 mb-3">{sermon.title}</Card.Title>
                        <Card.Text className="text-muted mb-3">
                          {sermon.description}
                        </Card.Text>
                        <div className="border-top pt-3 mt-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              <strong>{sermon.author}</strong>
                            </small>
                            <small className="text-muted">{formatDate(sermon.date)}</small>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
                  <Button 
                    variant="outline-primary" 
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="rounded-pill px-4"
                  >
                    ← Previous
                  </Button>
                  <span className="text-muted">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button 
                    variant="outline-primary" 
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="rounded-pill px-4"
                  >
                    Next →
                  </Button>
                </div>
              )}
            </>
          )}
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
