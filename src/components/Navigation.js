'use client'

import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar 
      expanded={expanded} 
      onToggle={setExpanded} 
      expand="lg" 
      bg="white" 
      className="shadow-sm sticky-top"
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold text-primary-custom">
          <span style={{ fontSize: '1.5rem' }}>IPC SHALOM ASSEMBLY</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <NavDropdown title="Fellowship" id="fellowship-dropdown">
              <NavDropdown.Item as={Link} href="/fellowship" onClick={() => setExpanded(false)}>
                All Fellowship
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="/fellowship/youth" onClick={() => setExpanded(false)}>
                Youth Fellowship
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/fellowship/sisters" onClick={() => setExpanded(false)}>
                Sisters Fellowship
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/fellowship/outreach" onClick={() => setExpanded(false)}>
                Outreach Program
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/fellowship/sunday-school" onClick={() => setExpanded(false)}>
                Sunday School
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/sermons" onClick={() => setExpanded(false)}>
              Sermons
            </Nav.Link>
            <Nav.Link as={Link} href="/visit" onClick={() => setExpanded(false)}>
              <Button variant="outline-primary" className="rounded-pill px-4">
                VISIT
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
