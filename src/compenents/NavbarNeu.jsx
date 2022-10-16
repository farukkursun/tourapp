import {  Navbar, Nav } from "react-bootstrap";

const NavbarNeu = () => {
  return (
    <div >
         <Navbar className="" bg="dark" variant="dark">
        
          
          <Nav className="nav">
            <Nav.Link className="navlink" href="#home">ABOUT US</Nav.Link>
            <Nav.Link className="navlink" href="#features">FOR YOU</Nav.Link>
            <Nav.Link className="navlink" href="#pricing">SERVICE</Nav.Link>
            <Nav.Link  className="navlink" href="#pricing">BLOG</Nav.Link>
            <Nav.Link className="navlink" href="#pricing">VLOG</Nav.Link>
            <Nav.Link className="navlink" href="#pricing">CONTACT</Nav.Link>

          </Nav>
        
      </Navbar>
    </div>
  )
}

export default NavbarNeu