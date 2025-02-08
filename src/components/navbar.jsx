import { useEffect } from 'react';
import { Navbar } from 'flowbite-react';
import '../index.css';
import { Link } from 'react-router-dom';
export default function NavbarComponent() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Navbar fluid id="navbar" className="sticky-navbar  p-5 overflow-hidden">
      <Navbar.Brand href="/" as={Link} to="/" className="">
        <span className="self-center whitespace-nowrap text-xl md:text-3xl font-semibold  font-secondaryBold">
          Sangap <span className=" text-blue-500">Osman</span> Sentosa
        </span>
      </Navbar.Brand>
      <div className="flex md:order-1">
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="md:order-2 bg-white navbar-collapse  dark:bg-gray-500 rounded-md mt-5 md:m-0 md:dark:bg-transparent md:bg-transparent">
        <Navbar.Link as={Link} href="/" to="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about" to="/about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} href="/services" to="/services">
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} href="/pricing" to="/pricing">
          Pricing
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contact" to="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
