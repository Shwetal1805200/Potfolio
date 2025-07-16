import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * A responsive Navbar with auto-hide on scroll down,
 * shows on scroll up or hover, and works for mobile.
 * 
 * Uses brand colors:
 *  - #000000 (black)
 *  - #9929EA (purpleDark)
 *  - #CC66DA (purpleLight)
 *  - #FAEB92 (yellowLight)
 */

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true); // Controls navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Keeps track of scroll position
  const [hovering, setHovering] = useState(false); // If user hovers, keep navbar open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile dropdown

  // Define your navigation items
  const navItems = [
    { name: 'Home', href: '/' },        // Internal route: uses <Link>
    { name: 'Projects', href: '/projects' }, // Internal route
    { name: 'Hobbies', href: '#hobbies' },   // Page anchor link: uses <a>
    { name: 'MiniProjects', href: '/MiniProjects' }, 
    { name: 'Resume', href: '/resume' },  
    { name: 'Contact', href: '/contact' },  // Internal route
  ];

  // Effect: Listen to scroll and toggle navbar show/hide
  useEffect(() => {
    const handleScroll = () => {
      if (hovering) return; // If hovering, don't auto-hide

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down past 50px — hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up — show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, hovering]);

  return (
    <div
      onMouseEnter={() => setShowNavbar(true)}   // Show navbar on hover
      onMouseLeave={() => setHovering(false)}    // Stop hovering on mouse leave
      className={`fixed w-full top-0 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 bg-[#000000] bg-opacity-90 shadow-md">
        
        {/* Branding: Click SHWETAL to go to /resume */}
        <Link to="/resume">
          <span className="text-2xl font-bold text-[#9929EA]">SHWETAL</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) =>
            item.href.startsWith('/') ? (
              // For internal routes, use <Link>
              <Link
                key={item.name}
                to={item.href}
                className="hover:text-[#CC66DA] transition font-medium text-[#FAEB92]"
              >
                {item.name}
              </Link>
            ) : (
              // For anchor links (#), use <a>
              <a
                key={item.name}
                href={item.href}
                className="hover:text-[#CC66DA] transition font-medium text-[#FAEB92]"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            className="text-[#FAEB92] hover:text-[#CC66DA] focus:outline-none"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#000000] bg-opacity-95 shadow-lg z-40">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) =>
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[#FAEB92] hover:text-[#CC66DA] font-medium text-lg transition"
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-[#FAEB92] hover:text-[#CC66DA] font-medium text-lg transition"
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
