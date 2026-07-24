import React, { useState } from "react";
import { FiSearch, FiMapPin, FiPackage, FiClock, FiCheckCircle, FiTruck, FiGlobe, FiShield, FiCalendar } from "react-icons/fi";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaQuoteLeft, FaShippingFast } from "react-icons/fa";

const LOGISTICS = [
  {
    id: 1,
    title: "Express Robot Delivery",
    provider: "Pacific Logistics India Pvt Ltd",
    rating: 4.8,
    reviews: 156,
    delivery: "24h Delivery",
    coverage: "India + International (50+ Countries)",
    services: "Robot Shipping, Heavy Machinery Transport, Customs Clearance, Insurance, Installation Support",
    transport: "Air Cargo, Sea Freight, Road Transport, Rail",
    specialties: ["Industrial Robots", "Heavy Machinery", "Hazardous Items", "Temperature Control"],
    pricing: "Custom Quotes",
    minOrder: "₹15,000",
    responseTime: "Within 2 hours",
    certified: true,
    premium: true,
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "EASYWAY LOGISTICS",
    provider: "Easy Way Logistics Pvt Ltd",
    rating: 4.5,
    reviews: 89,
    delivery: "24/7 Express Delivery",
    coverage: "Pan India + SAARC Countries",
    services: "Bulk Transport, Machinery Relocation, Assembly Support, Packing & Crating",
    transport: "Air Cargo, Road Transport, Multi-modal",
    specialties: ["Robot Assembly", "Factory Relocation", "Just-in-Time Delivery", "White Glove Service"],
    pricing: "₹8,500 - ₹25,000 per unit",
    minOrder: "₹10,000",
    responseTime: "Within 4 hours",
    certified: true,
    premium: false,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Global Heavy Machinery Logistics",
    provider: "Kensho Global Logistics",
    rating: 4.9,
    reviews: 234,
    delivery: "24h - 72h Delivery",
    coverage: "USA, Canada, Europe, Asia (34+ Countries)",
    services: "Heavy Machinery Movement, Temperature-controlled Shipments, Customs Brokerage, Tracking & Insurance",
    transport: "Container Shipping, Air Charter, Specialized Trailers",
    specialties: ["CNC Machines", "Robotic Arms", "Industrial Equipment", "Oversized Loads"],
    pricing: "Premium Service",
    minOrder: "₹50,000",
    responseTime: "Within 1 hour",
    certified: true,
    premium: true,
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Drone Express Logistics",
    provider: "SkyHigh Drone Delivery",
    rating: 4.7,
    reviews: 67,
    delivery: "Same Day Delivery",
    coverage: "Metro Cities in India",
    services: "Urgent Parts Delivery, Small Robot Components, Medical Equipment, Emergency Supplies",
    transport: "Drone Delivery, Road Support",
    specialties: ["Small Parts", "Emergency Delivery", "Last Mile", "High Value Items"],
    pricing: "₹5,000 - ₹20,000",
    minOrder: "₹3,000",
    responseTime: "Within 30 minutes",
    certified: true,
    premium: false,
    image: "https://images.unsplash.com/photo-1506947411487-a56738267383?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Cold Chain Robot Logistics",
    provider: "FrostLine Logistics",
    rating: 4.6,
    reviews: 42,
    delivery: "48-72h Temperature Controlled",
    coverage: "India + Middle East",
    services: "Temperature Sensitive Shipments, Medical Robots, Laboratory Equipment, Climate Control",
    transport: "Refrigerated Trucks, Air Cargo, Sea Containers",
    specialties: ["Medical Robots", "Laboratory Equipment", "Sensitive Components", "Climate Control"],
    pricing: "₹12,000 - ₹40,000",
    minOrder: "₹8,000",
    responseTime: "Within 3 hours",
    certified: true,
    premium: false,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Complete Installation & Logistics",
    provider: "RoboInstall Pro Services",
    rating: 4.8,
    reviews: 178,
    delivery: "Installation + Delivery Package",
    coverage: "India + Neighbouring Countries",
    services: "Full Installation Service, Commissioning, Testing, Training, After-sales Support",
    transport: "Dedicated Teams, Special Equipment",
    specialties: ["Robot Installation", "System Integration", "Training", "Maintenance Support"],
    pricing: "Package Deals",
    minOrder: "₹25,000",
    responseTime: "Within 6 hours",
    certified: true,
    premium: true,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop"
  }
];

const Logistics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [coverageFilter, setCoverageFilter] = useState("All Coverage");
  const [serviceFilter, setServiceFilter] = useState("All Services");
  const [deliveryFilter, setDeliveryFilter] = useState("All Delivery");

  const filteredLogistics = LOGISTICS.filter(item => {
    const matchesSearch = searchTerm === "" || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.services.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCoverage = coverageFilter === "All Coverage" || 
      item.coverage.toLowerCase().includes(coverageFilter.toLowerCase());
    
    const matchesService = serviceFilter === "All Services" ||
      item.specialties.some(specialty => specialty.toLowerCase().includes(serviceFilter.toLowerCase()));
    
    const matchesDelivery = deliveryFilter === "All Delivery" ||
      item.delivery.toLowerCase().includes(deliveryFilter.toLowerCase());

    return matchesSearch && matchesCoverage && matchesService && matchesDelivery;
  });

  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>🚚 Specialized Robot Logistics</h1>
          <p style={styles.subtitle}>
            Safe handling and delivery of your robots with trusted logistics partners - Installation, shipping, and customs clearance included
          </p>
        </div>
      </header>

      {/* Search & Filter Section */}
      <div style={styles.searchSection}>
        <div style={styles.searchBar}>
          <div style={styles.searchInputContainer}>
            <FiSearch style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search logistics providers, services, or specialties..."
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button style={styles.searchButton}>
              <FiSearch /> Search
            </button>
          </div>

          <div style={styles.filtersRow}>
            <select 
              style={styles.filterSelect}
              value={coverageFilter}
              onChange={(e) => setCoverageFilter(e.target.value)}
            >
              <option>All Coverage</option>
              <option>India</option>
              <option>International</option>
              <option>Pan India</option>
              <option>Metro Cities</option>
            </select>

            <select 
              style={styles.filterSelect}
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
            >
              <option>All Services</option>
              <option>Installation</option>
              <option>Heavy Machinery</option>
              <option>Temperature Control</option>
              <option>Customs Clearance</option>
              <option>Emergency Delivery</option>
            </select>

            <select 
              style={styles.filterSelect}
              value={deliveryFilter}
              onChange={(e) => setDeliveryFilter(e.target.value)}
            >
              <option>All Delivery</option>
              <option>24h Delivery</option>
              <option>Same Day</option>
              <option>48-72h</option>
              <option>Express</option>
            </select>

            <select style={styles.filterSelect}>
              <option>All Ratings</option>
              <option>4.5+ Stars</option>
              <option>4.0+ Stars</option>
              <option>3.5+ Stars</option>
            </select>
          </div>

          <div style={styles.resultsInfo}>
            <span style={styles.resultsCount}>{filteredLogistics.length} logistics providers found</span>
            <div style={styles.sortSection}>
              <span style={styles.sortLabel}>Sort by:</span>
              <select style={styles.sortSelect}>
                <option>Highest Rated</option>
                <option>Fastest Response</option>
                <option>Lowest Minimum</option>
                <option>Most Reviews</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Logistics Providers Grid */}
      {filteredLogistics.length > 0 ? (
        <div style={styles.gridContainer}>
          {filteredLogistics.map((item) => (
            <div key={item.id} style={styles.logisticsCard}>
              {/* Card Header */}
              <div style={styles.cardHeader}>
                <div style={styles.imageContainer}>
                  <img src={item.image} alt={item.title} style={styles.image} />
                  {item.premium && (
                    <div style={styles.premiumBadge}>⭐ Premium Partner</div>
                  )}
                  {item.certified && (
                    <div style={styles.certifiedBadge}>
                      <FiCheckCircle /> Certified
                    </div>
                  )}
                </div>
                
                <div style={styles.titleSection}>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.providerName}>{item.provider}</p>
                  
                  <div style={styles.ratingContainer}>
                    <div style={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={i < Math.floor(item.rating) ? styles.starFilled : styles.starEmpty}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span style={styles.ratingText}>
                      {item.rating} ({item.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={styles.cardBody}>
                {/* Quick Info */}
                <div style={styles.quickInfo}>
                  <div style={styles.infoItem}>
                    <FiClock style={styles.infoIcon} />
                    <div>
                      <span style={styles.infoLabel}>Delivery</span>
                      <span style={styles.infoValue}>{item.delivery}</span>
                    </div>
                  </div>
                  
                  <div style={styles.infoItem}>
                    <FiGlobe style={styles.infoIcon} />
                    <div>
                      <span style={styles.infoLabel}>Coverage</span>
                      <span style={styles.infoValue}>{item.coverage}</span>
                    </div>
                  </div>
                  
                  <div style={styles.infoItem}>
                    <FaShippingFast style={styles.infoIcon} />
                    <div>
                      <span style={styles.infoLabel}>Min Order</span>
                      <span style={styles.infoValue}>{item.minOrder}</span>
                    </div>
                  </div>
                  
                  <div style={styles.infoItem}>
                    <FiCalendar style={styles.infoIcon} />
                    <div>
                      <span style={styles.infoLabel}>Response</span>
                      <span style={styles.infoValue}>{item.responseTime}</span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div style={styles.servicesSection}>
                  <h4 style={styles.sectionTitle}>Services Offered</h4>
                  <p style={styles.servicesText}>{item.services}</p>
                  
                  <div style={styles.transportSection}>
                    <div style={styles.transportItem}>
                      <FiTruck style={styles.transportIcon} />
                      <span>{item.transport}</span>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div style={styles.specialtiesSection}>
                  <h4 style={styles.sectionTitle}>Specialties</h4>
                  <div style={styles.tagsContainer}>
                    {item.specialties.map((specialty, index) => (
                      <span key={index} style={styles.tag}>
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div style={styles.pricingSection}>
                  <div style={styles.pricingInfo}>
                    <span style={styles.pricingLabel}>Pricing:</span>
                    <span style={styles.pricingValue}>{item.pricing}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div style={styles.cardFooter}>
                <button style={styles.primaryButton}>
                  <FaWhatsapp /> Quick Contact
                </button>
                <button style={styles.secondaryButton}>
                  <FaQuoteLeft /> Get Quote
                </button>
                <button style={styles.tertiaryButton}>
                  <FaEnvelope /> Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📦</div>
          <h3 style={styles.emptyTitle}>No logistics providers found</h3>
          <p style={styles.emptyText}>
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button 
            style={styles.resetButton}
            onClick={() => {
              setSearchTerm("");
              setCoverageFilter("All Coverage");
              setServiceFilter("All Services");
              setDeliveryFilter("All Delivery");
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
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    borderRadius: '20px',
    color: 'white',
  },
  headerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '42px',
    fontWeight: '800',
    marginBottom: '15px',
    color: 'white',
  },
  subtitle: {
    fontSize: '18px',
    opacity: '0.9',
    lineHeight: '1.6',
  },
  searchSection: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
    marginBottom: '40px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  searchInputContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: '12px',
    padding: '5px',
  },
  searchIcon: {
    margin: '0 15px',
    color: '#4facfe',
    fontSize: '20px',
  },
  searchInput: {
    flex: '1',
    padding: '18px',
    border: 'none',
    fontSize: '16px',
    outline: 'none',
    backgroundColor: 'transparent',
    color: '#334155',
  },
  searchButton: {
    padding: '18px 35px',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  },
  filtersRow: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
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
    minWidth: '180px',
    flex: '1',
    transition: 'all 0.3s ease',
  },
  resultsInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    borderTop: '2px solid #f1f5f9',
  },
  resultsCount: {
    fontWeight: '700',
    fontSize: '18px',
    color: '#1e293b',
    backgroundColor: '#e0f2fe',
    padding: '10px 20px',
    borderRadius: '25px',
  },
  sortSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  sortLabel: {
    fontWeight: '600',
    color: '#475569',
  },
  sortSelect: {
    padding: '12px 20px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#475569',
    backgroundColor: 'white',
    cursor: 'pointer',
    minWidth: '200px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '30px',
  },
  logisticsCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s ease',
    border: '1px solid #e2e8f0',
  },
  cardHeader: {
    position: 'relative',
    padding: '25px 25px 20px',
    borderBottom: '1px solid #e2e8f0',
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  premiumBadge: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    backgroundColor: '#fbbf24',
    color: '#78350f',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    zIndex: '2',
  },
  certifiedBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#10b981',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    zIndex: '2',
  },
  titleSection: {
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '5px',
  },
  providerName: {
    fontSize: '16px',
    color: '#4b5563',
    marginBottom: '15px',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  stars: {
    display: 'flex',
    gap: '2px',
  },
  starFilled: {
    color: '#fbbf24',
    fontSize: '16px',
  },
  starEmpty: {
    color: '#e2e8f0',
    fontSize: '16px',
  },
  ratingText: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '500',
  },
  cardBody: {
    padding: '25px',
  },
  quickInfo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginBottom: '25px',
    padding: '20px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  infoIcon: {
    color: '#4facfe',
    fontSize: '20px',
    minWidth: '24px',
  },
  infoLabel: {
    display: 'block',
    fontSize: '12px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '4px',
  },
  infoValue: {
    display: 'block',
    fontSize: '14px',
    color: '#1e293b',
    fontWeight: '600',
  },
  servicesSection: {
    marginBottom: '25px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '12px',
  },
  servicesText: {
    fontSize: '14px',
    color: '#4b5563',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  transportSection: {
    marginTop: '15px',
  },
  transportItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#4facfe',
    fontSize: '14px',
    fontWeight: '500',
  },
  transportIcon: {
    fontSize: '16px',
  },
  specialtiesSection: {
    marginBottom: '25px',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tag: {
    backgroundColor: '#e0f2fe',
    color: '#0369a1',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
  },
  pricingSection: {
    padding: '20px',
    backgroundColor: '#f1f5f9',
    borderRadius: '12px',
    marginBottom: '25px',
  },
  pricingInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pricingLabel: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '600',
  },
  pricingValue: {
    fontSize: '20px',
    color: '#10b981',
    fontWeight: '700',
  },
  cardFooter: {
    padding: '20px 25px',
    borderTop: '1px solid #e2e8f0',
    display: 'flex',
    gap: '12px',
  },
  primaryButton: {
    flex: '1',
    padding: '14px',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  },
  secondaryButton: {
    flex: '1',
    padding: '14px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  },
  tertiaryButton: {
    flex: '1',
    padding: '14px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
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
    borderRadius: '20px',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
  },
  emptyIcon: {
    fontSize: '64px',
    marginBottom: '20px',
  },
  emptyTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '15px',
  },
  emptyText: {
    fontSize: '16px',
    color: '#64748b',
    maxWidth: '500px',
    margin: '0 auto 30px',
    lineHeight: '1.6',
  },
  resetButton: {
    padding: '15px 40px',
    backgroundColor: '#4facfe',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default Logistics;