import React, { useState } from "react";
import { FiSearch, FiEye, FiGrid, FiList, FiMapPin, FiPackage, FiCheckCircle } from "react-icons/fi";
import { FaStar, FaWhatsapp, FaEnvelope, FaShoppingCart } from "react-icons/fa";

const sparePartsData = [
  {
    id: 1,
    name: "Robotic End of Arm Tooling",
    category: "Tooling & End Effectors",
    price: "₹5,00,000",
    originalPrice: "₹6,50,000",
    company: "Shobai Automation Private Limited",
    city: "Pune, India",
    views: 42,
    rating: 4.5,
    reviews: 18,
    quantity: 1,
    compatible: "Universal - FANUC, ABB, KUKA, Yaskawa",
    partNo: "SAPL-ASSAMBLY",
    stock: "In Stock",
    stockCount: 3,
    delivery: "2-3 days",
    warranty: "1 Year",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    bestSeller: true,
    certified: true
  },
  {
    id: 2,
    name: "Cross Roller Bearing - High Precision",
    category: "Cross Roller Bearing",
    price: "₹30,000",
    company: "PGS Technologies",
    city: "Chennai, India",
    views: 148,
    rating: 4.7,
    reviews: 36,
    compatible: "Precision cobots, Yaskawa Motoman, KUKA, ABB collaborative robots",
    partNo: "RBU-SERIES-PRO",
    stock: "In Stock",
    stockCount: 15,
    delivery: "1-2 days",
    warranty: "2 Years",
    image: "https://images.unsplash.com/photo-1530240024479-8567e392f1c8?w-800&auto=format&fit=crop",
    bestSeller: true,
    certified: true
  },
  {
    id: 3,
    name: "Industrial Robot Servo Motor",
    category: "Motors & Drives",
    price: "₹1,25,000",
    originalPrice: "₹1,75,000",
    company: "Precision Robotics Components",
    city: "Bangalore, India",
    views: 89,
    rating: 4.8,
    reviews: 42,
    compatible: "FANUC R-30iB, ABB IRC5, KUKA KRC4 Controllers",
    partNo: "SERVO-FANUC-01",
    stock: "Low Stock",
    stockCount: 2,
    delivery: "3-5 days",
    warranty: "18 Months",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w-800&auto=format&fit=crop",
    bestSeller: false,
    certified: true,
    discount: "30% OFF"
  },
  {
    id: 4,
    name: "Robot Controller Module",
    category: "Electronics & Controllers",
    price: "₹2,50,000",
    company: "Automation Masters Ltd",
    city: "Gurgaon, India",
    views: 156,
    rating: 4.9,
    reviews: 52,
    compatible: "ABB IRC5, FANUC R-30iB Plus",
    partNo: "CTRL-ABB-05",
    stock: "In Stock",
    stockCount: 8,
    delivery: "1 day",
    warranty: "3 Years",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w-800&auto=format&fit=crop",
    bestSeller: true,
    certified: true,
    expressDelivery: true
  },
  {
    id: 5,
    name: "Robot Vision Camera System",
    category: "Sensors & Vision",
    price: "₹3,75,000",
    company: "VisionTech Robotics",
    city: "Hyderabad, India",
    views: 72,
    rating: 4.6,
    reviews: 24,
    compatible: "Universal with adapter kits available",
    partNo: "VISION-PRO-2024",
    stock: "In Stock",
    stockCount: 6,
    delivery: "2-4 days",
    warranty: "2 Years",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w-800&auto=format&fit=crop",
    bestSeller: false,
    certified: true
  },
  {
    id: 6,
    name: "Robot Gripper Assembly",
    category: "End Effectors",
    price: "₹85,000",
    originalPrice: "₹1,10,000",
    company: "GripTech Solutions",
    city: "Mumbai, India",
    views: 215,
    rating: 4.4,
    reviews: 38,
    compatible: "Universal industrial robots",
    partNo: "GRIP-UNIV-PRO",
    stock: "In Stock",
    stockCount: 12,
    delivery: "2-3 days",
    warranty: "1 Year",
    image: "https://images.unsplash.com/photo-1530240024479-8567e392f1c8?w-800&auto=format&fit=crop",
    bestSeller: true,
    certified: true,
    discount: "25% OFF"
  }
];

export default function SpareParts() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [stockFilter, setStockFilter] = useState("All");

  const categories = ["All Categories", "Tooling & End Effectors", "Cross Roller Bearing", "Motors & Drives", "Electronics & Controllers", "Sensors & Vision"];
  const locations = ["All Locations", "Pune", "Chennai", "Bangalore", "Gurgaon", "Hyderabad", "Mumbai"];

  const filteredParts = sparePartsData.filter(part => {
    const matchesSearch = searchTerm === "" || 
      part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.partNo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "All Categories" || part.category === categoryFilter;
    const matchesLocation = locationFilter === "All Locations" || part.city.includes(locationFilter);
    const matchesStock = stockFilter === "All" || 
      (stockFilter === "In Stock" && part.stock === "In Stock") ||
      (stockFilter === "Low Stock" && part.stock === "Low Stock");

    return matchesSearch && matchesCategory && matchesLocation && matchesStock;
  });

  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>🔧 Genuine Robot Spare Parts & Accessories</h1>
          <p style={styles.subtitle}>
            Source authentic spare parts and accessories from verified suppliers - delivered to your facility
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
              placeholder="Search parts by name, part number, or supplier..."
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
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
            >
              <option>All</option>
              <option>In Stock</option>
              <option>Low Stock</option>
            </select>

            <select style={styles.filterSelect}>
              <option>All Brands</option>
              <option>FANUC</option>
              <option>ABB</option>
              <option>KUKA</option>
              <option>Yaskawa</option>
            </select>

            <select style={styles.filterSelect}>
              <option>Price: Any</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 - ₹2,00,000</option>
              <option>Over ₹2,00,000</option>
            </select>
          </div>

          <div style={styles.filterControls}>
            <div style={styles.resultsInfo}>
              <span style={styles.resultsCount}>{filteredParts.length} parts found</span>
              <div style={styles.viewToggle}>
                <button
                  onClick={() => setIsGrid(true)}
                  style={isGrid ? styles.viewButtonActive : styles.viewButton}
                >
                  <FiGrid /> Grid
                </button>
                <button
                  onClick={() => setIsGrid(false)}
                  style={!isGrid ? styles.viewButtonActive : styles.viewButton}
                >
                  <FiList /> List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parts Display */}
      {filteredParts.length > 0 ? (
        <div style={isGrid ? styles.gridContainer : styles.listContainer}>
          {filteredParts.map(item => (
            <div key={item.id} style={styles.partCard}>
              {/* Image Section */}
              <div style={styles.imageContainer}>
                <img src={item.image} alt={item.name} style={styles.image} />
                {item.bestSeller && (
                  <div style={styles.bestSellerBadge}>🔥 Best Seller</div>
                )}
                {item.discount && (
                  <div style={styles.discountBadge}>{item.discount}</div>
                )}
                {item.certified && (
                  <div style={styles.certifiedBadge}>
                    <FiCheckCircle /> Certified
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div style={styles.cardContent}>
                <div style={styles.headerRow}>
                  <span style={styles.categoryTag}>{item.category}</span>
                  <div style={styles.views}>
                    <FiEye style={styles.icon} /> {item.views}
                  </div>
                </div>

                <h3 style={styles.partName}>{item.name}</h3>
                
                {/* Rating */}
                <div style={styles.ratingContainer}>
                  <div style={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        style={i < Math.floor(item.rating) ? styles.starFilled : styles.starEmpty}
                      />
                    ))}
                  </div>
                  <span style={styles.ratingText}>
                    {item.rating} ({item.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div style={styles.priceSection}>
                  <div style={styles.priceMain}>
                    <span style={styles.price}>{item.price}</span>
                    {item.originalPrice && (
                      <span style={styles.originalPrice}>{item.originalPrice}</span>
                    )}
                  </div>
                  {item.stock === "Low Stock" ? (
                    <span style={styles.stockWarning}>⚠️ Only {item.stockCount} left!</span>
                  ) : (
                    <span style={styles.stockSuccess}>✓ {item.stockCount}+ in stock</span>
                  )}
                </div>

                {/* Company Info */}
                <div style={styles.companyInfo}>
                  <div style={styles.companyDetails}>
                    <p style={styles.companyName}>🏢 {item.company}</p>
                    <p style={styles.location}><FiMapPin /> {item.city}</p>
                  </div>
                </div>

                {/* Part Details */}
                <div style={styles.detailsSection}>
                  <p style={styles.detail}><strong>Part #:</strong> {item.partNo}</p>
                  <p style={styles.detail}><strong>Compatible:</strong> {item.compatible}</p>
                  <div style={styles.detailRow}>
                    <span style={styles.detailItem}><FiPackage /> {item.delivery} delivery</span>
                    <span style={styles.detailItem}>🛡️ {item.warranty} warranty</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={styles.actionButtons}>
                  <button style={styles.primaryButton}>
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button style={styles.secondaryButton}>
                    <FaWhatsapp /> Quick Buy
                  </button>
                  <button style={styles.tertiaryButton}>
                    <FaEnvelope /> Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>🔍</div>
          <h3 style={styles.emptyTitle}>No parts found</h3>
          <p style={styles.emptyText}>
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button 
            style={styles.resetButton}
            onClick={() => {
              setSearchTerm("");
              setCategoryFilter("All Categories");
              setLocationFilter("All Locations");
              setStockFilter("All");
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
    border: '2px solid #4facfe',
    borderRadius: '10px',
    backgroundColor: '#4facfe',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
    fontSize: '14px',
    transition: 'all 0.3s ease',
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
  partCard: {
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
    height: '220px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  bestSellerBadge: {
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
  certifiedBadge: {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
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
  cardContent: {
    padding: '25px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  categoryTag: {
    backgroundColor: '#e0f2fe',
    color: '#0369a1',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  views: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#64748b',
    fontSize: '14px',
  },
  icon: {
    fontSize: '16px',
  },
  partName: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '15px',
    lineHeight: '1.4',
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
  priceSection: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#f8fafc',
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
  stockWarning: {
    color: '#f59e0b',
    fontSize: '14px',
    fontWeight: '600',
  },
  stockSuccess: {
    color: '#10b981',
    fontSize: '14px',
    fontWeight: '600',
  },
  companyInfo: {
    marginBottom: '20px',
  },
  companyDetails: {
    padding: '15px',
    backgroundColor: '#f1f5f9',
    borderRadius: '12px',
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
  detailsSection: {
    marginBottom: '25px',
  },
  detail: {
    fontSize: '14px',
    color: '#475569',
    marginBottom: '8px',
    lineHeight: '1.5',
  },
  detailRow: {
    display: 'flex',
    gap: '20px',
    marginTop: '15px',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '13px',
    color: '#64748b',
  },
  actionButtons: {
    display: 'flex',
    gap: '12px',
  },
  primaryButton: {
    flex: '2',
    padding: '16px',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
