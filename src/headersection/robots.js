import React, { useState } from "react";
import { FiSearch, FiGrid, FiList, FiEye, FiShare2, FiMapPin, FiFilter, FiClock, FiStar, FiCheckCircle } from "react-icons/fi";
import { FaStar, FaWhatsapp, FaEnvelope, FaTruck, FaTools } from "react-icons/fa";

const robotData = [
  {
    id: 1,
    name: "FANUC R-2000iA/165F, R-J3iB",
    type: "Used",
    views: 98,
    price: "₹12,50,000",
    originalPrice: "₹15,00,000",
    condition: "Used - Excellent",
    category: "Industrial Robots",
    company: "FANUC Corporation",
    location: "Pune, India",
    rating: 4.8,
    reviews: 42,
    payload: "20 Kg",
    reach: "2.1m",
    axes: "6-axis",
    year: 2018,
    warranty: "6 Months",
    delivery: "7-10 days",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    certified: true,
    bestDeal: true,
    discount: "18% OFF"
  },
  {
    id: 2,
    name: "Fanuc R-2000iA, 210F, R-J3IB",
    type: "Used",
    views: 156,
    price: "₹15,75,000",
    condition: "Used - Good",
    category: "Welding Robots",
    company: "FANUC India",
    location: "Chennai, India",
    rating: 4.5,
    reviews: 28,
    payload: "210 Kg",
    reach: "3.2m",
    axes: "6-axis",
    year: 2019,
    warranty: "1 Year",
    delivery: "5-7 days",
    image: "https://images.unsplash.com/photo-1530240024479-8567e392f1c8?w=800&auto=format&fit=crop",
    certified: true,
    bestDeal: false
  },
  {
    id: 3,
    name: "Fanuc 420iF - RJ2 Controller",
    type: "Refurbished",
    views: 72,
    price: "₹18,90,000",
    originalPrice: "₹22,50,000",
    condition: "Refurbished - Like New",
    category: "Automation Robots",
    company: "Precision Robotics",
    location: "Bangalore, India",
    rating: 4.9,
    reviews: 56,
    payload: "420 Kg",
    reach: "2.8m",
    axes: "6-axis",
    year: 2020,
    warranty: "18 Months",
    delivery: "10-14 days",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    certified: true,
    bestDeal: true,
    discount: "16% OFF"
  },
  {
    id: 4,
    name: "ABB IRB 6700 - 200/2.60",
    type: "New",
    views: 215,
    price: "₹32,50,000",
    condition: "Brand New",
    category: "Assembly Robots",
    company: "ABB Robotics",
    location: "Gurgaon, India",
    rating: 4.7,
    reviews: 38,
    payload: "200 Kg",
    reach: "2.6m",
    axes: "6-axis",
    year: 2023,
    warranty: "3 Years",
    delivery: "15-20 days",
    image: "https://images.unsplash.com/photo-1530240024479-8567e392f1c8?w=800&auto=format&fit=crop",
    certified: true,
    bestDeal: false
  },
  {
    id: 5,
    name: "KUKA KR 1000 Titan",
    type: "Used",
    views: 89,
    price: "₹28,75,000",
    originalPrice: "₹35,00,000",
    condition: "Used - Very Good",
    category: "Heavy Payload",
    company: "KUKA Robotics",
    location: "Mumbai, India",
    rating: 4.6,
    reviews: 31,
    payload: "1000 Kg",
    reach: "3.2m",
    axes: "6-axis",
    year: 2017,
    warranty: "1 Year",
    delivery: "7-12 days",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    certified: true,
    bestDeal: true,
    discount: "22% OFF"
  },
  {
    id: 6,
    name: "Yaskawa Motoman MA1440",
    type: "Refurbished",
    views: 124,
    price: "₹21,90,000",
    condition: "Refurbished - Excellent",
    category: "Assembly Robots",
    company: "Yaskawa India",
    location: "Hyderabad, India",
    rating: 4.8,
    reviews: 47,
    payload: "144 Kg",
    reach: "2.4m",
    axes: "6-axis",
    year: 2019,
    warranty: "2 Years",
    delivery: "8-12 days",
    image: "https://images.unsplash.com/photo-1530240024479-8567e392f1c8?w=800&auto=format&fit=crop",
    certified: true,
    bestDeal: false
  }
];

export default function Robots() {
  const [layout, setLayout] = useState("grid");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [conditionFilter, setConditionFilter] = useState("All Conditions");
  const [priceFilter, setPriceFilter] = useState("All Prices");
  const [companyFilter, setCompanyFilter] = useState("All Companies");

  const categories = ["All Categories", "Industrial Robots", "Welding Robots", "Assembly Robots", "Automation Robots", "Heavy Payload", "SCARA Robots"];
  const locations = ["All Locations", "Pune", "Chennai", "Bangalore", "Gurgaon", "Mumbai", "Hyderabad"];
  const conditions = ["All Conditions", "New", "Used", "Refurbished"];
  const companies = ["All Companies", "FANUC", "ABB", "KUKA", "Yaskawa", "Precision Robotics", "Custom Robotics"];

  const filteredRobots = robotData.filter((robot) => {
    const matchesSearch = search === "" || 
      robot.name.toLowerCase().includes(search.toLowerCase()) ||
      robot.company.toLowerCase().includes(search.toLowerCase()) ||
      robot.category.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = categoryFilter === "All Categories" || robot.category === categoryFilter;
    const matchesLocation = locationFilter === "All Locations" || robot.location.includes(locationFilter);
    const matchesCondition = conditionFilter === "All Conditions" || robot.type === conditionFilter;
    const matchesCompany = companyFilter === "All Companies" || robot.company.includes(companyFilter);
    
    let matchesPrice = true;
    if (priceFilter === "Under ₹15,00,000") {
      matchesPrice = parseFloat(robot.price.replace(/[^0-9.]/g, '')) < 1500000;
    } else if (priceFilter === "₹15,00,000 - ₹25,00,000") {
      const price = parseFloat(robot.price.replace(/[^0-9.]/g, ''));
      matchesPrice = price >= 1500000 && price <= 2500000;
    } else if (priceFilter === "Over ₹25,00,000") {
      matchesPrice = parseFloat(robot.price.replace(/[^0-9.]/g, '')) > 2500000;
    }

    return matchesSearch && matchesCategory && matchesLocation && matchesCondition && matchesCompany && matchesPrice;
  });

  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>🤖 Industrial Robots Marketplace</h1>
          <p style={styles.subtitle}>
            Browse verified robots from trusted sellers - with financing, logistics, parts, and service support all available in one place
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
              placeholder="Search robots by name, model, or company..."
              style={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button style={styles.searchButton}>
              <FiSearch /> Search
            </button>
          </div>

          <div style={styles.filtersRow}>
            <select 
              style={styles.filterSelect}
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat}>{cat}</option>
              ))}
            </select>

            <select 
              style={styles.filterSelect}
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              {locations.map(loc => (
                <option key={loc}>{loc}</option>
              ))}
            </select>

            <select 
              style={styles.filterSelect}
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value)}
            >
              {conditions.map(cond => (
                <option key={cond}>{cond}</option>
              ))}
            </select>

            <select 
              style={styles.filterSelect}
              value={companyFilter}
              onChange={(e) => setCompanyFilter(e.target.value)}
            >
              {companies.map(comp => (
                <option key={comp}>{comp}</option>
              ))}
            </select>

            <select 
              style={styles.filterSelect}
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option>All Prices</option>
              <option>Under ₹15,00,000</option>
              <option>₹15,00,000 - ₹25,00,000</option>
              <option>Over ₹25,00,000</option>
            </select>
          </div>

          <div style={styles.filterControls}>
            <div style={styles.resultsInfo}>
              <span style={styles.resultsCount}>{filteredRobots.length} robots found</span>
              <div style={styles.viewToggle}>
                <button
                  onClick={() => setLayout("grid")}
                  style={layout === "grid" ? styles.viewButtonActive : styles.viewButton}
                >
                  <FiGrid /> Grid
                </button>
                <button
                  onClick={() => setLayout("list")}
                  style={layout === "list" ? styles.viewButtonActive : styles.viewButton}
                >
                  <FiList /> List
                </button>
              </div>
            </div>

            <div style={styles.sortSection}>
              <span style={styles.sortLabel}>Sort by:</span>
              <select style={styles.sortSelect}>
                <option>Most Popular</option>
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Robots Display */}
      {filteredRobots.length > 0 ? (
        <div style={layout === "grid" ? styles.gridContainer : styles.listContainer}>
          {filteredRobots.map((robot) => (
            <div key={robot.id} style={styles.robotCard}>
              {/* Image Section */}
              <div style={styles.imageContainer}>
                <img src={robot.image} alt={robot.name} style={styles.image} />
                {robot.bestDeal && (
                  <div style={styles.bestDealBadge}>🔥 Best Deal</div>
                )}
                {robot.discount && (
                  <div style={styles.discountBadge}>{robot.discount}</div>
                )}
                <div style={styles.conditionBadge}>
                  {robot.type}
                </div>
                {robot.certified && (
                  <div style={styles.certifiedBadge}>
                    <FiCheckCircle /> Certified
                  </div>
                )}
                <button style={styles.shareButton}>
                  <FiShare2 />
                </button>
              </div>

              {/* Content Section */}
              <div style={styles.cardContent}>
                <div style={styles.headerRow}>
                  <h3 style={styles.robotName}>{robot.name}</h3>
                  <div style={styles.views}>
                    <FiEye /> {robot.views}
                  </div>
                </div>

                <div style={styles.ratingContainer}>
                  <div style={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        style={i < Math.floor(robot.rating) ? styles.starFilled : styles.starEmpty}
                      />
                    ))}
                  </div>
                  <span style={styles.ratingText}>
                    {robot.rating} ({robot.reviews} reviews)
                  </span>
                </div>

                {/* Company & Location */}
                <div style={styles.companyInfo}>
                  <p style={styles.companyName}>🏢 {robot.company}</p>
                  <p style={styles.location}><FiMapPin /> {robot.location}</p>
                </div>

                {/* Specifications */}
                <div style={styles.specsGrid}>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Payload:</span>
                    <span style={styles.specValue}>{robot.payload}</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Reach:</span>
                    <span style={styles.specValue}>{robot.reach}</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Year:</span>
                    <span style={styles.specValue}>{robot.year}</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Warranty:</span>
                    <span style={styles.specValue}>{robot.warranty}</span>
                  </div>
                </div>

                {/* Price Section */}
                <div style={styles.priceSection}>
                  <div style={styles.priceMain}>
                    <span style={styles.price}>{robot.price}</span>
                    {robot.originalPrice && (
                      <span style={styles.originalPrice}>{robot.originalPrice}</span>
                    )}
                  </div>
                  <span style={styles.delivery}>
                    <FaTruck /> {robot.delivery} delivery
                  </span>
                </div>

                {/* Action Buttons */}
                <div style={styles.actionButtons}>
                  <button style={styles.primaryButton}>
                    <FaWhatsapp /> Contact Seller
                  </button>
                  <button style={styles.secondaryButton}>
                    <FaTools /> View Details
                  </button>
                  <button style={styles.tertiaryButton}>
                    <FaEnvelope /> Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>🤖</div>
          <h3 style={styles.emptyTitle}>No robots found</h3>
          <p style={styles.emptyText}>
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button 
            style={styles.resetButton}
            onClick={() => {
              setSearch("");
              setCategoryFilter("All Categories");
              setLocationFilter("All Locations");
              setConditionFilter("All Conditions");
              setCompanyFilter("All Companies");
              setPriceFilter("All Prices");
            }}
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}

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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    color: '#667eea',
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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
  filterControls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    borderTop: '2px solid #f1f5f9',
  },
  resultsInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  resultsCount: {
    fontWeight: '700',
    fontSize: '18px',
    color: '#1e293b',
    backgroundColor: '#e0f2fe',
    padding: '10px 20px',
    borderRadius: '25px',
  },
  viewToggle: {
    display: 'flex',
    gap: '10px',
  },
  viewButton: {
    padding: '12px 25px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    backgroundColor: 'white',
    color: '#64748b',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
    fontSize: '14px',
    transition: 'all 0.3s ease',
  },
  viewButtonActive: {
    padding: '12px 25px',
    border: '2px solid #667eea',
    borderRadius: '10px',
    backgroundColor: '#667eea',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
    fontSize: '14px',
    transition: 'all 0.3s ease',
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: '30px',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  robotCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s ease',
    border: '1px solid #e2e8f0',
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    height: '250px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  bestDealBadge: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    backgroundColor: '#f59e0b',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    zIndex: '2',
  },
  discountBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '700',
    zIndex: '2',
  },
  conditionBadge: {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    backgroundColor: 'rgba(102, 126, 234, 0.9)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    zIndex: '2',
  },
  certifiedBadge: {
    position: 'absolute',
    bottom: '15px',
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
  shareButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: '2',
    transition: 'all 0.3s ease',
  },
  cardContent: {
    padding: '25px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '15px',
  },
  robotName: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e293b',
    lineHeight: '1.4',
    flex: '1',
    marginRight: '15px',
  },
  views: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#64748b',
    fontSize: '14px',
    whiteSpace: 'nowrap',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
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
  companyInfo: {
    marginBottom: '20px',
  },
  companyName: {
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '5px',
  },
  location: {
    color: '#64748b',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '25px',
    padding: '20px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
  },
  specItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specLabel: {
    fontSize: '13px',
    color: '#64748b',
    fontWeight: '500',
  },
  specValue: {
    fontSize: '14px',
    color: '#1e293b',
    fontWeight: '600',
  },
  priceSection: {
    marginBottom: '25px',
    padding: '20px',
    backgroundColor: '#f1f5f9',
    borderRadius: '12px',
  },
  priceMain: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '15px',
    marginBottom: '10px',
  },
  price: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#10b981',
  },
  originalPrice: {
    fontSize: '18px',
    color: '#94a3b8',
    textDecoration: 'line-through',
  },
  delivery: {
    color: '#3b82f6',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  actionButtons: {
    display: 'flex',
    gap: '12px',
  },
  primaryButton: {
    flex: '1',
    padding: '16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
  },
  secondaryButton: {
    flex: '1',
    padding: '16px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
  },
  tertiaryButton: {
    flex: '1',
    padding: '16px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
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
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};