import React, { useState } from 'react';
import { FaTools, FaMapMarkerAlt, FaList, FaTh, FaSearch, FaFilter, FaQuoteLeft, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SERVICES = [
  {
    title: "Robotics and Automation System Integrator",
    provider: "Pathway Robotics and Automation",
    location: "Gurgaon & China",
    price: "₹15,000/day",
    tags: ["Installation", "Repair", "Inspection", "Training", "Calibration"],
    description: "Pathway Robotics provides installation, commissioning, inspection, automation system support and full life-cycle assistance.",
    rating: 4.8,
    reviews: 42,
    verified: true,
    responseTime: "Within 24 hours"
  },
  {
    title: "ROBOT SYSTEM INTEGRATOR",
    provider: "Suprak Technologies",
    location: "Maharashtra, India",
    price: "₹50,000 - ₹2,50,000",
    tags: ["Installation", "Maintenance", "Repair", "Training", "Inspection"],
    description: "System integrator for robot programming, upgrades and emergency inspection support.",
    rating: 4.5,
    reviews: 28,
    verified: true,
    responseTime: "Within 12 hours"
  },
  {
    title: "Industrial Robot Calibration Specialist",
    provider: "Precision Robotics Solutions",
    location: "Bangalore, India",
    price: "₹8,000/day",
    tags: ["Calibration", "Precision", "Alignment", "Maintenance"],
    description: "High-precision calibration services for industrial robots to ensure optimal performance.",
    rating: 4.9,
    reviews: 56,
    verified: true,
    responseTime: "Within 6 hours"
  },
  {
    title: "Robot Programming & Training Services",
    provider: "Automation Masters",
    location: "Pune, India",
    price: "₹12,000/day",
    tags: ["Training", "Programming", "Consulting", "Support"],
    description: "Comprehensive robot programming and operator training services for all major brands.",
    rating: 4.7,
    reviews: 35,
    verified: true,
    responseTime: "Within 24 hours"
  },
  {
    title: "Emergency Robot Repair Services",
    provider: "RoboTech Emergency",
    location: "Pan India",
    price: "₹25,000 - ₹1,00,000",
    tags: ["Emergency", "Repair", "24x7", "Support"],
    description: "24/7 emergency repair services with on-site support across all major cities.",
    rating: 4.6,
    reviews: 89,
    verified: true,
    responseTime: "Within 2 hours"
  },
  {
    title: "Robot Preventive Maintenance",
    provider: "Maintenance Pro",
    location: "Delhi NCR",
    price: "₹10,000/month",
    tags: ["Maintenance", "Preventive", "Scheduled", "Checkup"],
    description: "Regular preventive maintenance plans to keep your robots running optimally.",
    rating: 4.4,
    reviews: 47,
    verified: true,
    responseTime: "Within 48 hours"
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [layout, setLayout] = useState("grid");
  const [serviceFilter, setServiceFilter] = useState("All Services");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = SERVICES.filter(service => {
    const matchesService = serviceFilter === "All Services" || service.tags.includes(serviceFilter);
    const matchesLocation = locationFilter === "All Locations" || 
      service.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesSearch = searchTerm === "" || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesService && matchesLocation && matchesSearch;
  });

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>🤖 Professional Robot Services</h1>
          <p style={styles.headerSubtitle}>
            Connect with certified professionals for installation, maintenance, repair, and training services
          </p>
        </div>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <div style={styles.searchBar}>
            <FaSearch style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for services, providers, or keywords..."
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button style={styles.searchButton}>
              <FaSearch /> Search
            </button>
          </div>
        </div>

        {/* Filters */}
        <div style={styles.filtersContainer}>
          <div style={styles.filterGroup}>
            <FaFilter style={styles.filterIcon} />
            <select 
              style={styles.filterSelect}
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
            >
              <option>All Services</option>
              <option>Installation</option>
              <option>Maintenance</option>
              <option>Calibration</option>
              <option>Repair</option>
              <option>Training</option>
              <option>Consulting</option>
              <option>Emergency</option>
            </select>

            <select 
              style={styles.filterSelect}
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option>All Locations</option>
              <option>India</option>
              <option>Bangalore</option>
              <option>Pune</option>
              <option>Delhi NCR</option>
              <option>Gurgaon</option>
              <option>Maharashtra</option>
            </select>

            <select style={styles.filterSelect}>
              <option>All Ratings</option>
              <option>4.5+ Rating</option>
              <option>4.0+ Rating</option>
              <option>3.5+ Rating</option>
            </select>
          </div>

          <div style={styles.layoutControls}>
            <span style={styles.resultsCount}>
              {filteredServices.length} services found
            </span>
            <div style={styles.layoutButtons}>
              <button 
                style={layout === "grid" ? styles.layoutButtonActive : styles.layoutButton}
                onClick={() => setLayout("grid")}
              >
                <FaTh /> Grid
              </button>
              <button 
                style={layout === "list" ? styles.layoutButtonActive : styles.layoutButton}
                onClick={() => setLayout("list")}
              >
                <FaList /> List
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid/List */}
      <div style={layout === "grid" ? styles.serviceGrid : styles.serviceList}>
        {filteredServices.map((service, index) => (
          <div key={index} style={styles.serviceCard}>
            <div style={styles.cardHeader}>
              <div style={styles.serviceBadge}>
                {service.verified && (
                  <span style={styles.verifiedBadge}>✓ Verified</span>
                )}
                <span style={styles.responseBadge}>
                  ⚡ {service.responseTime}
                </span>
              </div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <div style={styles.providerInfo}>
                <span style={styles.providerName}>{service.provider}</span>
                <div style={styles.rating}>
                  <span style={styles.stars}>
                    {'★'.repeat(Math.floor(service.rating))}
                    {'☆'.repeat(5 - Math.floor(service.rating))}
                  </span>
                  <span style={styles.ratingText}>
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div style={styles.cardBody}>
              <div style={styles.location}>
                <FaMapMarkerAlt style={styles.locationIcon} />
                <span>{service.location}</span>
              </div>

              <p style={styles.description}>{service.description}</p>

              <div style={styles.tagsContainer}>
                {service.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={styles.priceContainer}>
                <div style={styles.price}>
                  <span style={styles.priceLabel}>Starting from</span>
                  <span style={styles.priceValue}>{service.price}</span>
                </div>
              </div>
            </div>

            <div style={styles.cardFooter}>
              <button style={styles.contactButton}>
                <FaEnvelope /> Contact Provider
              </button>
              <button style={styles.quoteButton}>
                <FaQuoteLeft /> Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>🔍</div>
          <h3 style={styles.emptyTitle}>No services found</h3>
          <p style={styles.emptyText}>
            Try adjusting your filters or search terms to find what you're looking for.
          </p>
          <button 
            style={styles.resetButton}
            onClick={() => {
              setServiceFilter("All Services");
              setLocationFilter("All Locations");
              setSearchTerm("");
            }}
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
  },
  header: {
    marginBottom: '40px',
  },
  headerContent: {
    textAlign: 'center',
    marginBottom: '30px',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    color: 'white',
  },
  headerTitle: {
    fontSize: '42px',
    fontWeight: '700',
    marginBottom: '15px',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: '18px',
    opacity: '0.9',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  searchContainer: {
    marginBottom: '30px',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '5px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  searchIcon: {
    margin: '0 15px',
    color: '#667eea',
    fontSize: '18px',
  },
  searchInput: {
    flex: '1',
    padding: '15px',
    border: 'none',
    fontSize: '16px',
    outline: 'none',
    backgroundColor: 'transparent',
  },
  searchButton: {
    padding: '15px 30px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  },
  filtersContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '30px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  },
  filterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  filterIcon: {
    color: '#667eea',
    fontSize: '18px',
  },
  filterSelect: {
    padding: '12px 20px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#4a5568',
    backgroundColor: 'white',
    cursor: 'pointer',
    minWidth: '180px',
    transition: 'border-color 0.3s ease',
  },
  layoutControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  resultsCount: {
    fontWeight: '600',
    color: '#4a5568',
    fontSize: '16px',
  },
  layoutButtons: {
    display: 'flex',
    gap: '10px',
  },
  layoutButton: {
    padding: '10px 20px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
    color: '#4a5568',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  layoutButtonActive: {
    padding: '10px 20px',
    border: '2px solid #667eea',
    borderRadius: '8px',
    backgroundColor: '#667eea',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
  },
  serviceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  serviceCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    border: '1px solid #e2e8f0',
    position: 'relative',
  },
  cardHeader: {
    padding: '25px 25px 20px',
    borderBottom: '1px solid #e2e8f0',
  },
  serviceBadge: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  verifiedBadge: {
    backgroundColor: '#48bb78',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  responseBadge: {
    backgroundColor: '#ed8936',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  serviceTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '10px',
    lineHeight: '1.4',
  },
  providerInfo: {
    marginBottom: '10px',
  },
  providerName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#4a5568',
    display: 'block',
    marginBottom: '5px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  stars: {
    color: '#fbbf24',
    fontSize: '16px',
  },
  ratingText: {
    fontSize: '14px',
    color: '#718096',
  },
  cardBody: {
    padding: '20px 25px',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '15px',
    color: '#718096',
    fontSize: '14px',
  },
  locationIcon: {
    color: '#667eea',
  },
  description: {
    color: '#4a5568',
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '25px',
  },
  tag: {
    backgroundColor: '#edf2f7',
    color: '#4a5568',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
  },
  priceContainer: {
    marginBottom: '20px',
  },
  price: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  priceLabel: {
    fontSize: '12px',
    color: '#718096',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  priceValue: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#48bb78',
  },
  cardFooter: {
    padding: '20px 25px',
    borderTop: '1px solid #e2e8f0',
    display: 'flex',
    gap: '15px',
  },
  contactButton: {
    flex: '1',
    padding: '14px',
    backgroundColor: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  },
  quoteButton: {
    flex: '1',
    padding: '14px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  },
  emptyState: {
    textAlign: 'center',
    padding: '80px 20px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  },
  emptyIcon: {
    fontSize: '64px',
    marginBottom: '20px',
  },
  emptyTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '15px',
  },
  emptyText: {
    fontSize: '16px',
    color: '#718096',
    maxWidth: '500px',
    margin: '0 auto 30px',
    lineHeight: '1.6',
  },
  resetButton: {
    padding: '15px 40px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default Services;
