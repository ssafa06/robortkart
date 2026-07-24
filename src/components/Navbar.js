import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FiHome, 
  FiGrid, 
  FiPackage, 
  FiSettings, 
  FiTruck, 
  FiUser, 
  FiShoppingCart, 
  FiBell, 
  FiSearch, 
  FiMenu,
  FiX,
  FiChevronDown,
  FiLogOut
} from 'react-icons/fi';
import { FaRobot, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications] = useState([
    { id: 1, message: 'New robot listing added', time: '5 min ago', unread: true },
    { id: 2, message: 'Your quote has been approved', time: '1 hour ago', unread: true },
    { id: 3, message: 'Service request completed', time: '2 days ago', unread: false },
  ]);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu')) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen]);

  const navItems = [
    { path: '/', label: 'Home', icon: <FiHome /> },
    { path: '/robots', label: 'Robots', icon: <FaRobot /> },
    { path: '/parts', label: 'Spare Parts', icon: <FiPackage /> },
    { path: '/services', label: 'Services', icon: <FiSettings /> },
    { path: '/logistics', label: 'Logistics', icon: <FiTruck /> },
  ];

  const userMenuItems = [
    { label: 'My Profile', icon: <FiUser />, action: () => navigate('/profile') },
    { label: 'My Orders', icon: <FiShoppingCart />, action: () => navigate('/orders') },
    { label: 'Wishlist', icon: <FiGrid />, action: () => navigate('/wishlist') },
    { label: 'Settings', icon: <FiSettings />, action: () => navigate('/settings') },
    { label: 'Logout', icon: <FiLogOut />, action: () => console.log('Logout') },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const unreadNotifications = notifications.filter(n => n.unread).length;

  const styles = {
    // Navbar Container
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: isScrolled 
        ? 'rgba(255, 255, 255, 0.95)' 
        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(226, 232, 240, 0.5)' : 'none'
    },
    
    // Navbar Container
    navbarContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    
    // Logo Section
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    
    logoLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none'
    },
    
    logoIcon: {
      fontSize: '32px',
      color: isScrolled ? '#667eea' : 'white',
      transition: 'color 0.3s ease'
    },
    
    logoText: {
      fontSize: '24px',
      fontWeight: '800',
      background: isScrolled 
        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.5px'
    },
    
    // Navigation Items
    navItems: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    
    navLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 20px',
      borderRadius: '10px',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      color: isScrolled ? '#475569' : 'rgba(255, 255, 255, 0.9)',
      background: 'transparent'
    },
    
    // Active Nav Link
    activeNavLink: {
      background: isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255, 255, 255, 0.15)',
      color: isScrolled ? '#667eea' : 'white'
    },
    
    // Right Section
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    
    // Search Bar
    searchContainer: {
      position: 'relative',
      width: '300px'
    },
    
    searchForm: {
      display: 'flex',
      alignItems: 'center'
    },
    
    searchInput: {
      width: '100%',
      padding: '12px 45px 12px 20px',
      border: 'none',
      borderRadius: '25px',
      background: isScrolled ? '#f8fafc' : 'rgba(255, 255, 255, 0.15)',
      color: isScrolled ? '#1e293b' : 'white',
      fontSize: '14px',
      outline: 'none',
      transition: 'all 0.3s ease',
      '::placeholder': {
        color: isScrolled ? '#94a3b8' : 'rgba(255, 255, 255, 0.7)'
      }
    },
    
    searchButton: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      color: isScrolled ? '#667eea' : 'white',
      cursor: 'pointer',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    // Action Buttons
    actionButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    
    iconButton: {
      position: 'relative',
      background: 'transparent',
      border: 'none',
      color: isScrolled ? '#475569' : 'rgba(255, 255, 255, 0.9)',
      fontSize: '20px',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    badge: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      background: '#ef4444',
      color: 'white',
      fontSize: '11px',
      fontWeight: '700',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    // WhatsApp Button
    whatsappButton: {
      background: '#25D366',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 15px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    
    // User Menu
    userMenuContainer: {
      position: 'relative'
    },
    
    userButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: isScrolled ? '#f8fafc' : 'rgba(255, 255, 255, 0.15)',
      border: 'none',
      borderRadius: '25px',
      padding: '8px 15px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: '600',
      fontSize: '14px'
    },
    
    userName: {
      fontSize: '14px',
      fontWeight: '600',
      color: isScrolled ? '#1e293b' : 'white'
    },
    
    userMenuDropdown: {
      position: 'absolute',
      top: 'calc(100% + 10px)',
      right: '0',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
      width: '250px',
      overflow: 'hidden',
      zIndex: 1001
    },
    
    userMenuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '15px 20px',
      textDecoration: 'none',
      color: '#475569',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid #f1f5f9',
      cursor: 'pointer',
      background: 'white'
    },
    
    // Mobile Menu Button
    mobileMenuButton: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      color: isScrolled ? '#475569' : 'white',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '8px'
    },
    
    // Mobile Menu
    mobileMenu: {
      position: 'fixed',
      top: '70px',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'white',
      zIndex: 999,
      padding: '20px',
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.3s ease',
      overflowY: 'auto'
    },
    
    mobileNavItems: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    
    mobileNavLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '15px 20px',
      borderRadius: '10px',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '600',
      color: '#1e293b',
      transition: 'all 0.3s ease'
    },
    
    activeMobileNavLink: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    
    mobileActions: {
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    
    // Responsive
    '@media (max-width: 1200px)': {
      searchContainer: {
        width: '250px'
      }
    },
    
    '@media (max-width: 1024px)': {
      navItems: {
        display: 'none'
      },
      
      mobileMenuButton: {
        display: 'block'
      },
      
      searchContainer: {
        display: 'none'
      }
    },
    
    '@media (max-width: 768px)': {
      whatsappButton: {
        display: 'none'
      },
      
      userButton: {
        padding: '6px'
      },
      
      userName: {
        display: 'none'
      }
    },
    
    '@media (max-width: 480px)': {
      navbarContainer: {
        padding: '0 15px'
      },
      
      logoText: {
        fontSize: '20px'
      }
    }
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          {/* Left Section - Logo */}
          <div style={styles.logoSection}>
            <button 
              style={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            
            <Link to="/" style={styles.logoLink}>
              <FaRobot style={styles.logoIcon} />
              <span style={styles.logoText}>RobotVerse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div style={styles.navItems}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.navLink,
                  ...(location.pathname === item.path ? styles.activeNavLink : {})
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.background = isScrolled 
                      ? 'rgba(102, 126, 234, 0.05)' 
                      : 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div style={styles.rightSection}>
            {/* Search Bar */}
            <div style={styles.searchContainer}>
              <form onSubmit={handleSearch} style={styles.searchForm}>
                <input
                  type="text"
                  placeholder="Search robots, parts, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={styles.searchInput}
                />
                <button type="submit" style={styles.searchButton}>
                  <FiSearch />
                </button>
              </form>
            </div>

            {/* Action Buttons */}
            <div style={styles.actionButtons}>
              {/* WhatsApp */}
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.whatsappButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaWhatsapp />
                <span>Chat Now</span>
              </a>

              {/* Cart */}
              <button 
                style={styles.iconButton}
                onClick={() => navigate('/cart')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isScrolled 
                    ? 'rgba(102, 126, 234, 0.1)' 
                    : 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <FiShoppingCart />
                <span style={styles.badge}>3</span>
              </button>

              {/* Notifications */}
              <button 
                style={styles.iconButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isScrolled 
                    ? 'rgba(102, 126, 234, 0.1)' 
                    : 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <FiBell />
                {unreadNotifications > 0 && (
                  <span style={styles.badge}>{unreadNotifications}</span>
                )}
              </button>

              {/* User Menu */}
              <div className="user-menu" style={styles.userMenuContainer}>
                <button 
                  style={styles.userButton}
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isScrolled 
                      ? '#e2e8f0' 
                      : 'rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isScrolled 
                      ? '#f8fafc' 
                      : 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  <div style={styles.avatar}>SG</div>
                  <span style={styles.userName}>Sowmiya</span>
                  <FiChevronDown style={{
                    transform: isUserMenuOpen ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease'
                  }} />
                </button>

                {/* User Menu Dropdown */}
                {isUserMenuOpen && (
                  <div style={styles.userMenuDropdown}>
                    <div style={{
                      padding: '20px',
                      borderBottom: '1px solid #f1f5f9',
                      background: '#f8fafc'
                    }}>
                     <div style={{...styles.avatar, marginBottom: '10px'}}>SG</div> <div style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#1e293b'
                      }}>Sowmiya G</div>
                      <div style={{
                        fontSize: '13px',
                        color: '#64748b',
                        marginTop: '4px'
                      }}>sowmiya@robotverse.com</div>
                    </div>
                    
                    {userMenuItems.map((item, index) => (
                      <button
                        key={index}
                        style={styles.userMenuItem}
                        onClick={() => {
                          item.action();
                          setIsUserMenuOpen(false);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#f8fafc';
                          e.currentTarget.style.color = '#667eea';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'white';
                          e.currentTarget.style.color = '#475569';
                        }}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          {/* Mobile Search */}
          <form onSubmit={handleSearch} style={{marginBottom: '20px'}}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#f8fafc',
              borderRadius: '25px',
              padding: '5px'
            }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: '1',
                  padding: '12px 15px',
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  fontSize: '16px'
                }}
              />
              <button type="submit" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px'
              }}>
                <FiSearch />
              </button>
            </div>
          </form>

          {/* Mobile Navigation */}
          <div style={styles.mobileNavItems}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.mobileNavLink,
                  ...(location.pathname === item.path ? styles.activeMobileNavLink : {})
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Actions */}
          <div style={styles.mobileActions}>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                ...styles.whatsappButton,
                justifyContent: 'center'
              }}
            >
              <FaWhatsapp />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Add spacer for fixed navbar */}
      <div style={{height: '70px'}}></div>
    </>
  );
};

export default Navbar;