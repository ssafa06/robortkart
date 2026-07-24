import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobileNumber: '',
    location: '',
    email: '',
    password: '',
    accountType: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Registration attempt:', formData);
      setIsLoading(false);
      // Navigate to success page or dashboard after successful registration
      // navigate('/dashboard');
    }, 2000);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    authPage: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4a5568 100%)',
      padding: '2rem 0',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    authPageBefore: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 60%)
      `,
      pointerEvents: 'none',
      animation: 'float 6s ease-in-out infinite',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      width: '100%',
    },
    authContainer: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      padding: '3.5rem',
      borderRadius: '28px',
      boxShadow: `
        0 25px 50px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.6)
      `,
      border: '1px solid rgba(255, 255, 255, 0.4)',
      width: '100%',
      maxWidth: '520px',
      margin: '2rem auto',
      position: 'relative',
      zIndex: 1,
      transform: 'translateY(0)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    authContainerHover: {
      transform: 'translateY(-5px)',
      boxShadow: `
        0 35px 60px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.8)
      `,
    },
    backButton: {
      background: 'rgba(102, 126, 234, 0.1)',
      border: '2px solid rgba(102, 126, 234, 0.2)',
      color: '#667eea',
      fontSize: '0.95rem',
      fontWeight: 600,
      padding: '10px 16px',
      borderRadius: '12px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      marginBottom: '2rem',
      backdropFilter: 'blur(10px)',
    },
    backButtonHover: {
      background: 'rgba(102, 126, 234, 0.15)',
      borderColor: 'rgba(102, 126, 234, 0.3)',
      transform: 'translateX(-3px)',
    },
    registerHeader: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#1a202c',
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      textAlign: 'center',
      color: '#718096',
      fontSize: '1.125rem',
      lineHeight: 1.6,
      margin: 0,
      fontWeight: 400,
    },
    authForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.75rem',
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.25rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    label: {
      marginBottom: '0.75rem',
      fontWeight: 600,
      color: '#2d3748',
      fontSize: '0.95rem',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    requiredStar: {
      color: '#e53e3e',
      fontSize: '1.2em',
      fontWeight: 'bold',
    },
    inputContainer: {
      position: 'relative',
    },
    input: {
      padding: '16px 18px',
      border: '2px solid #e2e8f0',
      borderRadius: '14px',
      fontSize: '1rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      background: 'rgba(255, 255, 255, 0.8)',
      fontFamily: 'inherit',
      width: '100%',
      boxSizing: 'border-box',
      backdropFilter: 'blur(10px)',
    },
    inputFocus: {
      outline: 'none',
      borderColor: '#667eea',
      boxShadow: `
        0 0 0 4px rgba(102, 126, 234, 0.15),
        inset 0 1px 2px rgba(0, 0, 0, 0.05)
      `,
      background: 'rgba(255, 255, 255, 0.95)',
      transform: 'translateY(-1px)',
    },
    passwordToggle: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#718096',
      cursor: 'pointer',
      fontSize: '1.1rem',
      padding: '4px',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
    },
    passwordToggleHover: {
      color: '#667eea',
      background: 'rgba(102, 126, 234, 0.1)',
    },
    select: {
      padding: '16px 48px 16px 18px',
      border: '2px solid #e2e8f0',
      borderRadius: '14px',
      fontSize: '1rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      background: `rgba(255, 255, 255, 0.8) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 18px center / 16px`,
      fontFamily: 'inherit',
      width: '100%',
      boxSizing: 'border-box',
      cursor: 'pointer',
      appearance: 'none',
      backdropFilter: 'blur(10px)',
    },
    selectFocus: {
      outline: 'none',
      borderColor: '#667eea',
      boxShadow: `
        0 0 0 4px rgba(102, 126, 234, 0.15),
        inset 0 1px 2px rgba(0, 0, 0, 0.05)
      `,
      background: `rgba(255, 255, 255, 0.95) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23667eea' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 18px center / 16px`,
      transform: 'translateY(-1px)',
    },
    submitButton: {
      width: '100%',
      padding: '18px',
      fontSize: '1.1rem',
      fontWeight: 700,
      marginTop: '1rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '14px',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: `
        0 8px 25px rgba(102, 126, 234, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3)
      `,
      backdropFilter: 'blur(10px)',
    },
    submitButtonHover: {
      boxShadow: `
        0 12px 35px rgba(102, 126, 234, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.4)
      `,
      transform: 'translateY(-3px)',
      background: 'linear-gradient(135deg, #5a6fd8 0%, #6a42a8 100%)',
    },
    submitButtonActive: {
      transform: 'translateY(-1px)',
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      border: '3px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: 'white',
      animation: 'spin 1s ease-in-out infinite',
      marginRight: '10px',
    },
    authLinks: {
      textAlign: 'center',
      marginTop: '2.5rem',
      color: '#718096',
      fontSize: '0.95rem',
    },
    authLink: {
      color: '#667eea',
      fontWeight: 600,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    authLinkHover: {
      color: '#764ba2',
    },
    authLinkUnderline: {
      position: 'absolute',
      bottom: '-2px',
      left: 0,
      width: '0%',
      height: '2px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      transition: 'width 0.3s ease',
    },
    featureBadge: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: 700,
      boxShadow: '0 4px 12px rgba(72, 187, 120, 0.4)',
    },
  };

  return (
    <div style={styles.authPage}>
      <div style={styles.authPageBefore}></div>
      <div style={styles.container}>
        <div 
          style={styles.authContainer}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, styles.authContainerHover);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, styles.authContainer);
          }}
        >
          <div style={styles.featureBadge}>NEW</div>
          
          <button 
            style={styles.backButton}
            onClick={handleBackToHome}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, styles.backButtonHover);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.target.style, styles.backButton);
            }}
          >
            ← Back to RobortKart
          </button>
          
          <div style={styles.registerHeader}>
            <h2 style={styles.title}>Join RobortKart</h2>
            <p style={styles.subtitle}>
              Create your account to start your robotics journey
            </p>
          </div>
          
          <form onSubmit={handleSubmit} style={styles.authForm}>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Full Name <span style={styles.requiredStar}>*</span>
                </label>
                <div style={styles.inputContainer}>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    style={styles.input}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.input);
                    }}
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Company Name <span style={styles.requiredStar}>*</span>
                </label>
                <div style={styles.inputContainer}>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    required
                    style={styles.input}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.input);
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Mobile Number <span style={styles.requiredStar}>*</span>
                </label>
                <div style={styles.inputContainer}>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    required
                    style={styles.input}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.input);
                    }}
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Location <span style={styles.requiredStar}>*</span>
                </label>
                <div style={styles.inputContainer}>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your location"
                    required
                    style={styles.input}
                    onFocus={(e) => {
                      Object.assign(e.target.style, styles.inputFocus);
                    }}
                    onBlur={(e) => {
                      Object.assign(e.target.style, styles.input);
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                Email Address <span style={styles.requiredStar}>*</span>
              </label>
              <div style={styles.inputContainer}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  style={styles.input}
                  onFocus={(e) => {
                    Object.assign(e.target.style, styles.inputFocus);
                  }}
                  onBlur={(e) => {
                    Object.assign(e.target.style, styles.input);
                  }}
                />
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Password <span style={styles.requiredStar}>*</span>
              </label>
              <div style={styles.inputContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  style={styles.input}
                  onFocus={(e) => {
                    Object.assign(e.target.style, styles.inputFocus);
                  }}
                  onBlur={(e) => {
                    Object.assign(e.target.style, styles.input);
                  }}
                />
                <button
                  type="button"
                  style={styles.passwordToggle}
                  onClick={togglePasswordVisibility}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.passwordToggleHover);
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.passwordToggle);
                  }}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                Account Type <span style={styles.requiredStar}>*</span>
              </label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                required
                style={styles.select}
                onFocus={(e) => {
                  Object.assign(e.target.style, styles.selectFocus);
                }}
                onBlur={(e) => {
                  Object.assign(e.target.style, styles.select);
                }}
              >
                <option value="">Choose your account type</option>
                <option value="buyer">🤖 Buyer</option>
                <option value="seller">🏪 Seller</option>
                <option value="service-provider">🔧 Service Provider</option>
                <option value="logistics-partner">🚚 Logistics Partner</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              style={styles.submitButton}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  Object.assign(e.target.style, styles.submitButtonHover);
                }
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, styles.submitButton);
              }}
              onMouseDown={(e) => {
                Object.assign(e.target.style, styles.submitButtonActive);
              }}
              onMouseUp={(e) => {
                Object.assign(e.target.style, styles.submitButtonHover);
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span style={styles.loadingSpinner}></span>
                  Creating Account...
                </>
              ) : (
                'Review Agreement & Create Account'
              )}
            </button>
          </form>
          
          <div style={styles.authLinks}>
            <p>
              Already have an account?{' '}
              <Link 
                to="/login" 
                style={styles.authLink}
                onMouseEnter={(e) => {
                  e.target.style.color = styles.authLinkHover.color;
                  e.target.querySelector('.underline').style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.authLink.color;
                  e.target.querySelector('.underline').style.width = '0%';
                }}
              >
                Sign in here
                <span className="underline" style={styles.authLinkUnderline}></span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Register;