'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === '/contact-us';
  const isOurHomesPage = pathname === '/our-homes';
  const isRetailSpace = pathname === '/retail-space';
  const isHospitality = pathname === '/hospitality';
  const isHomePage = pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          z-index: 10;
          transition: all 0.3s ease-in-out;
        }

        .navbar.bg-contact,
        .navbar.bg-ourhomes,
        .navbar.bg-retail,
        .navbar.bg-hospitality {
          background-color: #f6f4f1;
        }

        .navbar.bg-transparent {
          background-color: transparent;
        }

        .nav-content {
          display: flex;
          padding: 14px 0;
          justify-content: space-between;
          align-items: center;
          padding-left: 14px;
          padding-right: 40px;
          color: white;
        }

        .menu-toggle {
          z-index: 10;
          cursor: pointer;
        }

        .menu-toggle svg {
          color: white;
          transition: transform 0.3s ease;
        }

        .menu-toggle svg.rotated {
          transform: rotate(90deg);
        }

        .menu-toggle svg.black {
          color: black;
        }

        .menu-open {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black;
          text-align: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s ease;
        }

        .menu-closed {
          opacity: 0;
          pointer-events: none;
        }

        .menu-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
          height: 100%;
          font-size: 4xl;
        }

        .menu-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          border-bottom: 1px solid gray;
          color: white;
          cursor: pointer;
          position: relative;
          width: 100%;
        }

        .menu-item:hover .submenu-container {
          display: flex;
        }

        .submenu-container {
          display: none;
          flex-direction: column;
          background-color: black;
          text-align: center;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          z-index: 10;
          border-top: 1px solid gray;
          padding: 10px 0;
        }

        .submenu-item {
          padding: 12px 16px;
          color: white;
          position: relative;
        }

        .submenu-item::after {
          content: "";
          display: block;
          height: 1px;
          background-color: gray;
          margin-top: 12px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .submenu-item:last-child::after {
          display: none;
        }

        .submenu-item:hover {
          background-color: gray;
        }

        .home-link {
          position: absolute;
          top: 16px;
          right: 20px;
          text-transform: uppercase;
          font-size: 10px;
          display: flex;
          align-items: center;
          color: white;
        }

        .home-link.black {
          color: black;
        }

        @media (min-width: 768px) {
          .menu-list {
            flex-direction: row;
          }

          .menu-item {
            flex: 1;
            border-bottom: none;
            border-right: 1px solid gray;
            padding: 16px 32px;
          }

          .menu-item:last-child {
            border-right: none;
          }

          .submenu-container {
            left: 0;
            right: auto;
            top: 100%;
            flex-direction: column;
          }

          .submenu-item {
            padding: 16px;
            border-right: none;
          }
        }
      `}</style>
      <header
        className={`navbar ${isScrolled ? 'bg-transparent' : ''} ${
          isContactPage || isOurHomesPage || isRetailSpace || isHospitality
            ? 'bg-contact bg-ourhomes bg-retail bg-hospitality'
            : ''
        }`}
      >
        <div className="nav-content">
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 rotated"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-10 ${isContactPage || isOurHomesPage || isRetailSpace || isHospitality ? 'black' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </div>

          <div className={`menu ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
            <ul className="menu-list">
              <li className="menu-item">
                About
                <div className="submenu-container">
                  <Link href="/about-us#founder" className="submenu-item">
                    About Our Founder
                  </Link>
                  <Link href="/about-us#testimonials" className="submenu-item">
                    Testimonials
                  </Link>
                </div>
              </li>
              <li className="menu-item">
                Wedding
                <div className="submenu-container">
                  <Link href="/Wedding#sangeet" className="submenu-item">
                    Sangeet
                  </Link>
                  <Link href="/Wedding#jaimala" className="submenu-item">
                    Jaimala
                  </Link>
                  <Link href="/Wedding#haldi-mehendi-carnival" className="submenu-item">
                    Haldi/Mehendi/Carnival
                  </Link>
                  <Link href="/Wedding#engagement" className="submenu-item">
                    Engagement
                  </Link>
                </div>
              </li>
              <li className="menu-item">
                <Link href="/Corporates">Corporates</Link>
              </li>
              <li className="menu-item">
                Other
                <div className="submenu-container">
                  <Link href="/Other#birthday" className="submenu-item">
                    Birthday
                  </Link>
                  <Link href="/Other#anniversary" className="submenu-item">
                    Anniversary
                  </Link>
                  <Link href="/Other#baby-shower" className="submenu-item">
                    Baby Shower
                  </Link>
                  <Link href="/Other#proposal" className="submenu-item">
                    Proposal
                  </Link>
                  <Link href="/Other#pre-wedding-shoot" className="submenu-item">
                    Pre Wedding Shoot
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {!isHomePage && (
            <div className={`home-link ${isContactPage || isOurHomesPage || isRetailSpace || isHospitality ? 'black' : ''}`}>
              <Link href="/">
                <span>Home</span>
                <span>
                  {isContactPage || isOurHomesPage || isRetailSpace || isHospitality ? (
                    <Image src="/images/svgexport-1 (1).svg" width={30} height={5} alt="home icon" />
                  ) : (
                    <Image src="/images/svgexport-1.svg" width={30} height={5} alt="home icon" />
                  )}
                </span>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
