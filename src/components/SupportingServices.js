import React from 'react';
import { useNavigate } from 'react-router-dom';

const SupportingServices = () => {
  const navigate = useNavigate();

  const handleBrowseRobots = () => {
    document.getElementById('robot-marketplace')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const styles = {
    section: {
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    gradientOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '300px',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%)',
      zIndex: 0,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
      position: 'relative',
      zIndex: 1,
    },
    servicesContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: '5rem',
      alignItems: 'start',
    },
    servicesStats: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      position: 'sticky',
      top: '120px',
    },
    statItem: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(226, 232, 240, 0.4)',
      borderRadius: '24px',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
    },
    statItemHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15)',
      borderColor: 'rgba(102, 126, 234, 0.2)',
    },
    statNumber: {
      fontSize: '3.5rem',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.75rem',
      lineHeight: 1,
    },
    statLabel: {
      fontSize: '1.125rem',
      color: '#4a5568',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    servicesInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3.5rem',
    },
    servicesInfoH2: {
      fontSize: '2.5rem',
      fontWeight: 800,
      color: '#1a202c',
      marginBottom: '0.5rem',
      letterSpacing: '-0.025em',
      lineHeight: 1.2,
    },
    serviceItem: {
      paddingBottom: '2.5rem',
      borderBottom: '2px solid rgba(226, 232, 240, 0.6)',
      position: 'relative',
      transition: 'all 0.3s ease',
    },
    serviceItemHover: {
      borderBottomColor: 'rgba(102, 126, 234, 0.4)',
    },
    serviceItemLast: {
      borderBottom: 'none',
      paddingBottom: 0,
    },
    serviceItemH3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#2d3748',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    serviceIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
      color: '#667eea',
    },
    serviceItemP: {
      fontSize: '1.125rem',
      color: '#718096',
      lineHeight: 1.7,
      marginLeft: '3.25rem',
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '28px',
      padding: '3.5rem',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '2rem',
    },
    ctaSectionBefore: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
      `,
      pointerEvents: 'none',
    },
    ctaSectionH2: {
      fontSize: '2rem',
      fontWeight: 800,
      color: 'white',
      marginBottom: '1rem',
      letterSpacing: '-0.02em',
      position: 'relative',
      zIndex: 1,
    },
    ctaSectionP: {
      fontSize: '1.125rem',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: 1.7,
      marginBottom: '2rem',
      position: 'relative',
      zIndex: 1,
    },
    statsRow: {
      display: 'flex',
      gap: '2.5rem',
      marginBottom: '2.5rem',
      flexWrap: 'wrap',
      position: 'relative',
      zIndex: 1,
    },
    statBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      fontSize: '0.95rem',
      fontWeight: 600,
      color: 'rgba(255, 255, 255, 0.95)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    statDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.6)',
      flexShrink: 0,
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      position: 'relative',
      zIndex: 1,
    },
    btnPrimary: {
      padding: '1rem 2.5rem',
      background: 'white',
      color: '#667eea',
      border: 'none',
      borderRadius: '14px',
      fontSize: '1.125rem',
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    btnPrimaryHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
      background: '#f7fafc',
    },
    btnOutline: {
      padding: '1rem 2.5rem',
      background: 'rgba(255, 255, 255, 0.15)',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.4)',
      borderRadius: '14px',
      fontSize: '1.125rem',
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    btnOutlineHover: {
      background: 'rgba(255, 255, 255, 0.25)',
      borderColor: 'rgba(255, 255, 255, 0.6)',
      transform: 'translateY(-3px)',
    },
    arrowIcon: {
      fontSize: '1.25rem',
      transition: 'transform 0.3s ease',
    },
    arrowIconHover: {
      transform: 'translateX(4px)',
    },
    decorativeElement: {
      position: 'absolute',
      right: '-100px',
      bottom: '-100px',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
      zIndex: 0,
    },
  };

  // Service icons configuration
  const services = [
    {
      title: 'Installation & Maintenance',
      description: 'Professional setup: 24/7 support & AMC',
      icon: '🔧',
    },
    {
      title: 'Safe Delivery & Handling',
      description: 'Specialized logistics for robots',
      icon: '🚚',
    },
    {
      title: 'Operator Training',
      description: 'Expert training & certification programs',
      icon: '👨‍🏫',
    },
  ];

  // State to manage hover effects
  const [hoverStates, setHoverStates] = React.useState({
    statItems: [false, false, false, false],
    serviceItems: [false, false, false],
    btnPrimary: false,
    btnOutline: false,
  });

  const handleStatItemHover = (index, isHovering) => {
    setHoverStates(prev => ({
      ...prev,
      statItems: prev.statItems.map((state, i) => i === index ? isHovering : state)
    }));
  };

  const handleServiceItemHover = (index, isHovering) => {
    setHoverStates(prev => ({
      ...prev,
      serviceItems: prev.serviceItems.map((state, i) => i === index ? isHovering : state)
    }));
  };

  const handleButtonHover = (button, isHovering) => {
    setHoverStates(prev => ({
      ...prev,
      [button]: isHovering
    }));
  };

  return (
    <section style={styles.section} id="supporting-services">
      <div style={styles.gradientOverlay}></div>
      <div style={styles.decorativeElement}></div>
      
      <div style={styles.container}>
        <div style={styles.servicesContent}>
          {/* Left Column - Stats */}
          <div style={styles.servicesStats}>
            {[
              { number: '86', label: 'Trusted Users' },
              { number: '174', label: 'Active Listings' },
              { number: '18', label: 'Cities Covered' },
              { number: '17', label: 'Robot Categories' },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  ...styles.statItem,
                  ...(hoverStates.statItems[index] && styles.statItemHover)
                }}
                onMouseEnter={() => handleStatItemHover(index, true)}
                onMouseLeave={() => handleStatItemHover(index, false)}
              >
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right Column - Services Info */}
          <div style={styles.servicesInfo}>
            <h2 style={styles.servicesInfoH2}>Supporting Services Included</h2>
            
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  ...styles.serviceItem,
                  ...(index === services.length - 1 && styles.serviceItemLast),
                  ...(hoverStates.serviceItems[index] && styles.serviceItemHover),
                }}
                onMouseEnter={() => handleServiceItemHover(index, true)}
                onMouseLeave={() => handleServiceItemHover(index, false)}
              >
                <h3 style={styles.serviceItemH3}>
                  <span style={styles.serviceIcon}>{service.icon}</span>
                  {service.title}
                </h3>
                <p style={styles.serviceItemP}>{service.description}</p>
              </div>
            ))}

            {/* CTA Section */}
            <div style={styles.ctaSection}>
              <div style={styles.ctaSectionBefore}></div>
              
              <h2 style={styles.ctaSectionH2}>Start Your Automation Journey Today</h2>
              <p style={styles.ctaSectionP}>
                Join 86+ businesses buying robots with complete end-to-end support
              </p>
              
              <div style={styles.statsRow}>
                {['174 active listings', '77 verified users', '90% satisfaction rate'].map((stat, index) => (
                  <span key={index} style={styles.statBadge}>
                    <span style={styles.statDot}></span>
                    {stat}
                  </span>
                ))}
              </div>
              
              <div style={styles.ctaButtons}>
                <button
                  style={{
                    ...styles.btnPrimary,
                    ...(hoverStates.btnPrimary && styles.btnPrimaryHover)
                  }}
                  onClick={handleBrowseRobots}
                  onMouseEnter={() => handleButtonHover('btnPrimary', true)}
                  onMouseLeave={() => handleButtonHover('btnPrimary', false)}
                  onMouseDown={() => handleButtonHover('btnPrimary', true)}
                  onMouseUp={() => handleButtonHover('btnPrimary', true)}
                >
                  Browse Robots Now
                  <span 
                    style={{
                      ...styles.arrowIcon,
                      ...(hoverStates.btnPrimary && styles.arrowIconHover)
                    }}
                  >
                    →
                  </span>
                </button>
                
                <button
                  style={{
                    ...styles.btnOutline,
                    ...(hoverStates.btnOutline && styles.btnOutlineHover)
                  }}
                  onClick={handleRegister}
                  onMouseEnter={() => handleButtonHover('btnOutline', true)}
                  onMouseLeave={() => handleButtonHover('btnOutline', false)}
                  onMouseDown={() => handleButtonHover('btnOutline', true)}
                  onMouseUp={() => handleButtonHover('btnOutline', true)}
                >
                  Register as Buyer
                  <span 
                    style={{
                      ...styles.arrowIcon,
                      ...(hoverStates.btnOutline && styles.arrowIconHover)
                    }}
                  >
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportingServices;