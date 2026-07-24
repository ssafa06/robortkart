import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [hoverStates, setHoverStates] = useState({
    browseButton: false,
    registerButton: false,
    newsletterButton: false,
    quickLinks: Array(5).fill(false),
    supportLinks: Array(9).fill(false),
    socialLinks: Array(4).fill(false),
    socialLinksBottom: Array(4).fill(false),
  });

  const handleBrowseRobots = () => {
    document.getElementById('robot-marketplace')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleButtonHover = (button, isHovering) => {
    setHoverStates(prev => ({
      ...prev,
      [button]: isHovering
    }));
  };

  const handleLinkHover = (type, index, isHovering) => {
    setHoverStates(prev => ({
      ...prev,
      [type]: prev[type].map((state, i) => i === index ? isHovering : state)
    }));
  };

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white',
      padding: '5rem 0 2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    footerBefore: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.3) 50%, transparent 100%)',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
      position: 'relative',
      zIndex: 1,
    },
    footerContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4rem',
    },
    footerMain: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
      gap: '3rem',
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
    },
    footerSectionH3: {
      fontSize: '1.75rem',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1.5rem',
      letterSpacing: '-0.025em',
    },
    footerDescription: {
      color: '#cbd5e0',
      lineHeight: 1.7,
      marginBottom: '2rem',
      fontSize: '0.95rem',
      opacity: 0.9,
    },
    footerButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      marginBottom: '2rem',
    },
    btnOutline: {
      padding: '0.875rem 1.5rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      borderRadius: '10px',
      fontSize: '0.9rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    btnOutlineHover: {
      background: 'rgba(102, 126, 234, 0.2)',
      borderColor: 'rgba(102, 126, 234, 0.4)',
      transform: 'translateX(5px)',
      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.2)',
    },
    footerStats: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap',
    },
    statBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.8rem',
      color: '#a0aec0',
      fontWeight: 500,
      padding: '0.5rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    statDot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#48bb78',
      flexShrink: 0,
    },
    footerSectionH4: {
      fontSize: '1.125rem',
      fontWeight: 700,
      color: 'white',
      marginBottom: '1.5rem',
      letterSpacing: '-0.01em',
      position: 'relative',
      paddingBottom: '0.75rem',
    },
    footerSectionH4After: {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '40px',
      height: '3px',
      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '2px',
    },
    footerLinks: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    footerLinksLi: {
      marginBottom: '0.5rem',
    },
    footerLinksA: {
      color: '#cbd5e0',
      textDecoration: 'none',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    footerLinksAHover: {
      color: 'white',
      transform: 'translateX(3px)',
    },
    linkIcon: {
      transition: 'all 0.3s ease',
      fontSize: '0.8rem',
    },
    linkIconHover: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    contactInfo: {
      color: '#cbd5e0',
      lineHeight: 1.7,
      fontSize: '0.9rem',
    },
    contactInfoP: {
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    contactIcon: {
      color: '#667eea',
      fontSize: '0.9rem',
      width: '16px',
      textAlign: 'center',
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '2rem',
      textAlign: 'center',
      color: '#a0aec0',
      fontSize: '0.875rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
    },
    socialLink: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#cbd5e0',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    socialLinkHover: {
      background: 'rgba(102, 126, 234, 0.2)',
      color: 'white',
      transform: 'translateY(-3px)',
    },
    newsletter: {
      display: 'flex',
      gap: '0.5rem',
      marginTop: '1.5rem',
    },
    newsletterInput: {
      flex: 1,
      padding: '0.75rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
    },
    newsletterInputFocus: {
      outline: 'none',
      borderColor: 'rgba(102, 126, 234, 0.4)',
      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
    },
    newsletterButton: {
      padding: '0.75rem 1.25rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '0.875rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    newsletterButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)',
    },
  };

  const quickLinks = [
    { label: 'Browse Robots', href: '#robots' },
    { label: 'Spare Parts', href: '#spare-parts' },
    { label: 'Services', href: '#services' },
    { label: 'Logistics', href: '#logistics' },
    { label: 'RoboBook', href: '#robobook' },
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#help' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Seller Guide', href: '#seller-guide' },
    { label: 'Buyer Guide', href: '#buyer-guide' },
    { label: 'Cookie Policy', href: '#cookie' },
    { label: 'Sitemap', href: '#sitemap' },
    { label: 'Accessibility', href: '#accessibility' },
  ];

  const contactInfo = [
    { icon: '📍', text: 'SIRCOT IT Park, 5-8/9,' },
    { icon: '', text: '6th Cross St, Struant,' },
    { icon: '', text: 'Chennai, Tamil Nadu 603103' },
    { icon: '📞', text: '+91 8610925352' },
    { icon: '✉️', text: 'support@robotverse.com' },
  ];

  const socialLinks = [
    { icon: '🐦', label: 'Twitter' },
    { icon: '💼', label: 'LinkedIn' },
    { icon: '📘', label: 'Facebook' },
    { icon: '📷', label: 'Instagram' },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div style={styles.footerMain}>
            {/* Brand Section */}
            <div style={styles.footerSection}>
              <h3 style={styles.footerSectionH3}>RobotVerse</h3>
              <p style={styles.footerDescription}>
                The ultimate marketplace for industrial robots, spare parts, and professional services. 
                Connecting buyers, sellers, and service providers worldwide.
              </p>
              
              <div style={styles.footerButtons}>
                <button
                  style={{
                    ...styles.btnOutline,
                    ...(hoverStates.browseButton && styles.btnOutlineHover)
                  }}
                  onClick={handleBrowseRobots}
                  onMouseEnter={() => handleButtonHover('browseButton', true)}
                  onMouseLeave={() => handleButtonHover('browseButton', false)}
                >
                  → Browse Robots Now
                </button>
                <button
                  style={{
                    ...styles.btnOutline,
                    ...(hoverStates.registerButton && styles.btnOutlineHover)
                  }}
                  onClick={handleRegister}
                  onMouseEnter={() => handleButtonHover('registerButton', true)}
                  onMouseLeave={() => handleButtonHover('registerButton', false)}
                >
                  → Register as Buyer
                </button>
              </div>
              
              <div style={styles.footerStats}>
                {['Real-time updates', '77 verified', '90% satisfaction'].map((stat, index) => (
                  <span key={index} style={styles.statBadge}>
                    <span style={styles.statDot}></span>
                    {stat}
                  </span>
                ))}
              </div>
              
              {/* Newsletter */}
              <div style={styles.newsletter}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={styles.newsletterInput}
                />
                <button
                  style={{
                    ...styles.newsletterButton,
                    ...(hoverStates.newsletterButton && styles.newsletterButtonHover)
                  }}
                  onMouseEnter={() => handleButtonHover('newsletterButton', true)}
                  onMouseLeave={() => handleButtonHover('newsletterButton', false)}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionH4}>
                Quick Links
              </h4>
              <ul style={styles.footerLinks}>
                {quickLinks.map((link, index) => (
                  <li key={index} style={styles.footerLinksLi}>
                    <a
                      href={link.href}
                      style={{
                        ...styles.footerLinksA,
                        ...(hoverStates.quickLinks[index] && styles.footerLinksAHover)
                      }}
                      onMouseEnter={() => handleLinkHover('quickLinks', index, true)}
                      onMouseLeave={() => handleLinkHover('quickLinks', index, false)}
                    >
                      <span 
                        style={{
                          ...styles.linkIcon,
                          ...(hoverStates.quickLinks[index] && styles.linkIconHover),
                          opacity: hoverStates.quickLinks[index] ? 1 : 0,
                          transform: hoverStates.quickLinks[index] ? 'translateX(0)' : 'translateX(-5px)'
                        }}
                      >
                        →
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionH4}>
                Support
              </h4>
              <ul style={styles.footerLinks}>
                {supportLinks.map((link, index) => (
                  <li key={index} style={styles.footerLinksLi}>
                    <a
                      href={link.href}
                      style={{
                        ...styles.footerLinksA,
                        ...(hoverStates.supportLinks[index] && styles.footerLinksAHover)
                      }}
                      onMouseEnter={() => handleLinkHover('supportLinks', index, true)}
                      onMouseLeave={() => handleLinkHover('supportLinks', index, false)}
                    >
                      <span 
                        style={{
                          ...styles.linkIcon,
                          ...(hoverStates.supportLinks[index] && styles.linkIconHover),
                          opacity: hoverStates.supportLinks[index] ? 1 : 0,
                          transform: hoverStates.supportLinks[index] ? 'translateX(0)' : 'translateX(-5px)'
                        }}
                      >
                        →
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionH4}>
                Contact
              </h4>
              <div style={styles.contactInfo}>
                {contactInfo.map((info, index) => (
                  <p key={index} style={styles.contactInfoP}>
                    {info.icon && <span style={styles.contactIcon}>{info.icon}</span>}
                    {info.text}
                  </p>
                ))}
              </div>
              
              <div style={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      ...styles.socialLink,
                      ...(hoverStates.socialLinks[index] && styles.socialLinkHover)
                    }}
                    aria-label={social.label}
                    onMouseEnter={() => handleLinkHover('socialLinks', index, true)}
                    onMouseLeave={() => handleLinkHover('socialLinks', index, false)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={styles.footerBottom}>
            <p>&copy; 2025 RobotVerse. All rights reserved.</p>
            <div style={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    ...styles.socialLink,
                    ...(hoverStates.socialLinksBottom[index] && styles.socialLinkHover)
                  }}
                  aria-label={social.label}
                  onMouseEnter={() => handleLinkHover('socialLinksBottom', index, true)}
                  onMouseLeave={() => handleLinkHover('socialLinksBottom', index, false)}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;