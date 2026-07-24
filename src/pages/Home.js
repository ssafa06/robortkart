import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiMapPin, FiDollarSign, FiChevronRight } from 'react-icons/fi';
import { FaRobot, FaStar, FaShippingFast, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';

// Mock data
const MOCK_ROBOTS = [
  {
    id: 1,
    title: "FANUC R-2000iA/165F",
    brand: "FANUC",
    type: "Articulated Robot",
    location: "Pune, India",
    price: 2450000,
    rating: 4.8,
    payload: "20 Kg",
    reach: "2.1m",
    condition: "Used - Excellent",
    delivery: "7-10 days",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "ABB IRB 6700 - 200kg",
    brand: "ABB",
    type: "Welding Robot",
    location: "Chennai, India",
    price: 3875000,
    rating: 4.7,
    payload: "200 Kg",
    reach: "2.8m",
    condition: "New",
    delivery: "15-20 days",
    image: "https://images.unsplash.com/photo-1530240024479-8567e392f1c8?w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "KUKA KR 1000 Titan",
    brand: "KUKA",
    type: "Heavy Payload",
    location: "Bangalore, India",
    price: 6200000,
    rating: 4.9,
    payload: "1000 Kg",
    reach: "3.2m",
    condition: "Refurbished",
    delivery: "10-14 days",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Yaskawa Motoman MA1440",
    brand: "Yaskawa",
    type: "Assembly Robot",
    location: "Hyderabad, India",
    price: 1890000,
    rating: 4.5,
    payload: "144 Kg",
    reach: "2.4m",
    condition: "Used - Good",
    delivery: "5-7 days",
    image: "https://images.unsplash.com/photo-1530240024479-8567e392f1c8?w=400&auto=format&fit=crop"
  },
];

const Home = () => {
  const [filters, setFilters] = useState({
    search: '',
    type: 'All types',
    brand: 'All Brands',
    location: 'All Locations',
    minPrice: '',
    maxPrice: ''
  });

  const [filteredRobots, setFilteredRobots] = useState(MOCK_ROBOTS);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  useEffect(() => {
    let filtered = MOCK_ROBOTS;

    if (filters.search) {
      filtered = filtered.filter(robot =>
        robot.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        robot.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        robot.location.toLowerCase().includes(filters.search.toLowerCase()) ||
        robot.type.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.type !== 'All types') {
      filtered = filtered.filter(robot => robot.type === filters.type);
    }

    if (filters.brand !== 'All Brands') {
      filtered = filtered.filter(robot => robot.brand === filters.brand);
    }

    if (filters.location !== 'All Locations') {
      filtered = filtered.filter(robot => robot.location === filters.location);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(robot => robot.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(robot => robot.price <= parseInt(filters.maxPrice));
    }

    setFilteredRobots(filtered);
  }, [filters]);

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    
    // Hero Section
    heroSection: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    
    heroTitle: {
      fontSize: '48px',
      fontWeight: '800',
      marginBottom: '20px',
      lineHeight: '1.2'
    },
    
    heroSubtitle: {
      fontSize: '20px',
      opacity: '0.9',
      maxWidth: '700px',
      margin: '0 auto 40px',
      lineHeight: '1.6'
    },
    
    heroStats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '60px',
      flexWrap: 'wrap',
      marginTop: '60px'
    },
    
    statItem: {
      textAlign: 'center'
    },
    
    statNumber: {
      fontSize: '42px',
      fontWeight: '700',
      marginBottom: '10px'
    },
    
    statLabel: {
      fontSize: '16px',
      opacity: '0.8'
    },
    
    // Search Bar
    searchSection: {
      maxWidth: '1200px',
      margin: '-40px auto 40px',
      position: 'relative',
      zIndex: 3,
      padding: '0 20px'
    },
    
    searchCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15)'
    },
    
    searchBar: {
      display: 'flex',
      gap: '15px',
      marginBottom: '25px'
    },
    
    searchInput: {
      flex: '1',
      padding: '18px 25px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    
    searchButton: {
      padding: '18px 35px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease'
    },
    
    // Filters
    filtersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '15px'
    },
    
    filterSelect: {
      padding: '14px 20px',
      border: '2px solid #e2e8f0',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#475569',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    
    // Main Layout
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    
    marketplaceLayout: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: '30px',
      marginTop: '30px'
    },
    
    // Sidebar
    sidebar: {
      background: 'white',
      borderRadius: '16px',
      padding: '25px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      height: 'fit-content',
      position: 'sticky',
      top: '20px'
    },
    
    sidebarTitle: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '25px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    
    filterGroup: {
      marginBottom: '25px'
    },
    
    filterLabel: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#475569',
      marginBottom: '10px'
    },
    
    // Main Content
    mainContent: {
      minHeight: '600px'
    },
    
    resultsHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      padding: '20px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
    },
    
    resultsCount: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#1e293b'
    },
    
    sortSelect: {
      padding: '10px 15px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#475569',
      backgroundColor: 'white',
      cursor: 'pointer'
    },
    
    // Robot Grid
    robotGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '25px'
    },
    
    robotCard: {
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid #e2e8f0'
    },
    
    robotImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    
    robotContent: {
      padding: '25px'
    },
    
    robotHeader: {
      marginBottom: '15px'
    },
    
    robotCondition: {
      display: 'inline-block',
      padding: '6px 12px',
      background: '#10b981',
      color: 'white',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
      marginBottom: '10px'
    },
    
    robotTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '8px',
      lineHeight: '1.4'
    },
    
    robotLocation: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#64748b',
      fontSize: '14px'
    },
    
    robotSpecs: {
      display: 'flex',
      gap: '15px',
      margin: '20px 0',
      padding: '15px',
      background: '#f8fafc',
      borderRadius: '10px'
    },
    
    specItem: {
      flex: '1',
      textAlign: 'center'
    },
    
    specValue: {
      display: 'block',
      fontSize: '16px',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '4px'
    },
    
    specLabel: {
      display: 'block',
      fontSize: '12px',
      color: '#64748b'
    },
    
    robotFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '20px'
    },
    
    robotPrice: {
      fontSize: '24px',
      fontWeight: '800',
      color: '#10b981'
    },
    
    robotRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#fbbf24',
      fontWeight: '600'
    },
    
    robotActions: {
      display: 'flex',
      gap: '10px',
      marginTop: '20px'
    },
    
    viewButton: {
      flex: '1',
      padding: '12px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    
    contactButton: {
      flex: '1',
      padding: '12px',
      background: 'white',
      color: '#667eea',
      border: '2px solid #667eea',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    
    // Features Section
    featuresSection: {
      marginTop: '80px',
      padding: '60px 20px',
      background: 'white'
    },
    
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    
    featureCard: {
      textAlign: 'center',
      padding: '30px',
      borderRadius: '16px',
      background: '#f8fafc',
      transition: 'all 0.3s ease'
    },
    
    featureIcon: {
      fontSize: '40px',
      marginBottom: '20px',
      color: '#667eea'
    },
    
    featureTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '10px'
    },
    
    featureDescription: {
      color: '#64748b',
      fontSize: '14px',
      lineHeight: '1.6'
    },
    
    // Responsive
    '@media (max-width: 768px)': {
      marketplaceLayout: {
        gridTemplateColumns: '1fr'
      },
      
      heroTitle: {
        fontSize: '32px'
      },
      
      heroSubtitle: {
        fontSize: '16px'
      },
      
      searchBar: {
        flexDirection: 'column'
      },
      
      robotGrid: {
        gridTemplateColumns: '1fr'
      }
    }
  };

  const renderRobotGrid = () => (
    <div style={styles.robotGrid}>
      {filteredRobots.map(robot => (
        <div key={robot.id} style={styles.robotCard}
             onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
             onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <img src={robot.image} alt={robot.title} style={styles.robotImage} />
          
          <div style={styles.robotContent}>
            <div style={styles.robotHeader}>
              <span style={styles.robotCondition}>{robot.condition}</span>
              <h3 style={styles.robotTitle}>{robot.title}</h3>
              <div style={styles.robotLocation}>
                <FiMapPin /> {robot.location}
              </div>
            </div>
            
            <div style={styles.robotSpecs}>
              <div style={styles.specItem}>
                <span style={styles.specValue}>{robot.payload}</span>
                <span style={styles.specLabel}>Payload</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specValue}>{robot.reach}</span>
                <span style={styles.specLabel}>Reach</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specValue}>{robot.delivery}</span>
                <span style={styles.specLabel}>Delivery</span>
              </div>
            </div>
            
            <div style={styles.robotFooter}>
              <div style={styles.robotPrice}>₹{robot.price.toLocaleString()}</div>
              <div style={styles.robotRating}>
                <FaStar /> {robot.rating}
              </div>
            </div>
            
            <div style={styles.robotActions}>
              <button style={styles.viewButton}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                View Details
              </button>
              <button style={styles.contactButton}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#667eea';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = '#667eea';
                      }}>
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFilterSidebar = () => (
    <div style={styles.sidebar}>
      <h3 style={styles.sidebarTitle}><FiFilter /> Filters</h3>
      
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Type</label>
        <select 
          style={styles.filterSelect}
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
        >
          <option>All types</option>
          <option>Articulated Robot</option>
          <option>Welding Robot</option>
          <option>Heavy Payload</option>
          <option>Assembly Robot</option>
        </select>
      </div>
      
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Brand</label>
        <select 
          style={styles.filterSelect}
          value={filters.brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
        >
          <option>All Brands</option>
          <option>FANUC</option>
          <option>ABB</option>
          <option>KUKA</option>
          <option>Yaskawa</option>
        </select>
      </div>
      
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Location</label>
        <select 
          style={styles.filterSelect}
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
        >
          <option>All Locations</option>
          <option>Pune, India</option>
          <option>Chennai, India</option>
          <option>Bangalore, India</option>
          <option>Hyderabad, India</option>
        </select>
      </div>
      
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Price Range (₹)</label>
        <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
          <input
            type="number"
            placeholder="Min"
            style={{...styles.filterSelect, flex: 1}}
            value={filters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            style={{...styles.filterSelect, flex: 1}}
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
          />
        </div>
      </div>
      
      <button 
        style={{
          ...styles.viewButton,
          marginTop: '20px',
          width: '100%'
        }}
        onClick={() => setFilters({
          search: '',
          type: 'All types',
          brand: 'All Brands',
          location: 'All Locations',
          minPrice: '',
          maxPrice: ''
        })}
      >
        Reset Filters
      </button>
    </div>
  );

  const renderFeatures = () => (
    <div style={styles.featuresSection}>
      <div style={styles.featuresGrid}>
        <div style={styles.featureCard}>
          <FaShieldAlt style={styles.featureIcon} />
          <h4 style={styles.featureTitle}>Verified Sellers</h4>
          <p style={styles.featureDescription}>All suppliers are thoroughly verified for quality and reliability</p>
        </div>
        
        <div style={styles.featureCard}>
          <FaShippingFast style={styles.featureIcon} />
          <h4 style={styles.featureTitle}>Global Logistics</h4>
         <p style={styles.featureDescription}>
  Doorstep delivery with installation support worldwide
</p>
  </div>
        
        <div style={styles.featureCard}>
          <FaTachometerAlt style={styles.featureIcon} />
          <h4 style={styles.featureTitle}>Quality Assurance</h4>
          <p style={styles.featureDescription}>Every robot undergoes rigorous testing and certification</p>
        </div>
        
        <div style={styles.featureCard}>
          <FaRobot style={styles.featureIcon} />
          <h4 style={styles.featureTitle}>After-Sales Support</h4>
          <p style={styles.featureDescription}>Comprehensive warranty and maintenance services</p>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>🤖 Industrial Robots Marketplace</h1>
          <p style={styles.heroSubtitle}>
            Discover, compare, and purchase industrial robots from verified suppliers worldwide. 
            Complete with logistics, installation, and after-sales support.
          </p>
          
          <div style={styles.heroStats}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>500+</div>
              <div style={styles.statLabel}>Robots Listed</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>200+</div>
              <div style={styles.statLabel}>Verified Suppliers</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>Countries Served</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div style={styles.searchSection}>
        <div style={styles.searchCard}>
          <div style={styles.searchBar}>
            <input
              type="text"
              placeholder="Search robots by name, brand, or model..."
              style={styles.searchInput}
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              onFocus={e => e.target.style.borderColor = '#667eea'}
              onBlur={e => e.target.style.borderColor = '#e2e8f0'}
            />
            <button style={styles.searchButton}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <FiSearch /> Search Robots
            </button>
          </div>
          
          <div style={styles.filtersGrid}>
            <select style={styles.filterSelect}>
              <option>All Categories</option>
              <option>Articulated Robots</option>
              <option>SCARA Robots</option>
              <option>Delta Robots</option>
            </select>
            
            <select style={styles.filterSelect}>
              <option>All Price Ranges</option>
              <option>Under ₹20,00,000</option>
              <option>₹20,00,000 - ₹50,00,000</option>
              <option>Over ₹50,00,000</option>
            </select>
            
            <select style={styles.filterSelect}>
              <option>All Conditions</option>
              <option>New</option>
              <option>Used</option>
              <option>Refurbished</option>
            </select>
            
            <select style={styles.filterSelect}>
              <option>Sort By: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.container}>
        <div style={styles.marketplaceLayout}>
          <aside style={styles.sidebar}>
            {renderFilterSidebar()}
          </aside>
          
          <main style={styles.mainContent}>
            <div style={styles.resultsHeader}>
              <div style={styles.resultsCount}>
                {filteredRobots.length} robots found
              </div>
              <select style={styles.sortSelect}>
                <option>Sort by: Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Highest Rated</option>
              </select>
            </div>
            
            {filteredRobots.length > 0 ? (
              renderRobotGrid()
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '80px 20px',
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{fontSize: '64px', marginBottom: '20px'}}>🔍</div>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '15px'}}>
                  No robots found
                </h3>
                <p style={{color: '#64748b', maxWidth: '500px', margin: '0 auto 30px'}}>
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button 
                  style={styles.viewButton}
                  onClick={() => setFilters({
                    search: '',
                    type: 'All types',
                    brand: 'All Brands',
                    location: 'All Locations',
                    minPrice: '',
                    maxPrice: ''
                  })}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
        
        {renderFeatures()}
      </div>
    </div>
  );
};

export default Home;