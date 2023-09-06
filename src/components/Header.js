import React from "react";
import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown,Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
      toast.success("Logout Successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (url) => {
    setActiveLink(url);
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Nav.Link as={Link} to={to} className={isActive ? "active" : ""}>
        {children}
      </Nav.Link>
    );
  };

  const [scrolled, setScrolled] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const period = 50000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["PET PULSE"];


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpddateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar bg="white" expand="md">
      <Container>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <span className="navbar-text">
             <Button as={Link} to="/" variant="dark" style={{ 'color': 'white', 'fontSize': '35px', 'background': 'black' }} className="social-button" ><span>{text}</span></Button>
           </span>
         </Navbar.Collapse>
       </Container>
     </Navbar>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/"></NavLink>
            
          </Nav>
          <Nav>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <NavDropdown.Item as={Link} to="/pages/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/pages/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/pages/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
