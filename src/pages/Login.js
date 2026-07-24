import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft, FiEye, FiEyeOff, FiShield, FiRobot } from 'react-icons/fi';
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData);
      // Navigate to dashboard after successful login
      navigate('/dashboard');
      setIsLoading(false);
    }, 1500);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  const styles = {
    // Page Container
    pageContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    
    // Main Container
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    
    // Auth Wrapper
    authWrapper: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(102, 126, 234, 0.1)',
      minHeight: '700px'
    },
    
    // Left Panel (Hero)
    leftPanel: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '60px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    
    leftPanelContent: {
      position: 'relative',
      zIndex: 2
    },
    
    leftPanelTitle: {
      fontSize: '36px',
      fontWeight: '800',
      marginBottom: '20px',
      lineHeight: '1.3'
    },
    
    leftPanelSubtitle: {
      fontSize: '18px',
      opacity: '0.9',
      lineHeight: '1.6',
      marginBottom: '40px'
    },
    
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: '40px 0'
    },
    
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '25px',
      fontSize: '16px'
    },
    
    featureIcon: {
      background: 'rgba(255, 255, 255, 0.1)',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px'
    },
    
    // Right Panel (Form)
    rightPanel: {
      padding: '60px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    
    // Back Button
    backButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'transparent',
      border: 'none',
      color: '#667eea',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      marginBottom: '30px',
      transition: 'all 0.3s ease'
    },
    
    // Form Header
    formHeader: {
      marginBottom: '40px'
    },
    
    formTitle: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#1e293b',
      marginBottom: '10px'
    },
    
    formSubtitle: {
      fontSize: '16px',
      color: '#64748b'
    },
    
    // Form Styles
    authForm: {
      width: '100%'
    },
    
    formGroup: {
      marginBottom: '25px'
    },
    
    formLabel: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#475569',
      marginBottom: '8px'
    },
    
    inputWrapper: {
      position: 'relative'
    },
    
    formInput: {
      width: '100%',
      padding: '16px 50px 16px 20px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      outline: 'none',
      color: '#1e293b'
    },
    
    inputIcon: {
      position: 'absolute',
      left: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#94a3b8',
      fontSize: '20px'
    },
    
    passwordToggle: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      color: '#94a3b8',
      cursor: 'pointer',
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    errorMessage: {
      color: '#ef4444',
      fontSize: '13px',
      marginTop: '5px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    
    // Submit Button
    submitButton: {
      width: '100%',
      padding: '18px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      marginTop: '10px',
      position: 'relative'
    },
    
    loadingSpinner: {
      width: '20px',
      height: '20px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: 'white',
      animation: 'spin 1s linear infinite'
    },
    
    // Divider
    divider: {
      display: 'flex',
      alignItems: 'center',
      margin: '30px 0',
      color: '#64748b'
    },
    
    dividerLine: {
      flex: 1,
      height: '1px',
      background: '#e2e8f0'
    },
    
    dividerText: {
      padding: '0 15px',
      fontSize: '14px'
    },
    
    // Social Login
    socialLogin: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px',
      marginBottom: '30px'
    },
    
    socialButton: {
      padding: '15px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      background: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      fontSize: '20px'
    },
    
    // Links Section
    authLinks: {
      textAlign: 'center',
      marginTop: '30px'
    },
    
    authLinkText: {
      fontSize: '15px',
      color: '#64748b',
      marginBottom: '10px'
    },
    
    authLink: {
      color: '#667eea',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    
    forgotPassword: {
      fontSize: '14px',
      color: '#64748b',
      marginTop: '15px',
      cursor: 'pointer',
      display: 'inline-block'
    },
    
    // Animation
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    
    // Responsive
    '@media (max-width: 992px)': {
      authWrapper: {
        gridTemplateColumns: '1fr'
      },
      
      leftPanel: {
        display: 'none'
      }
    },
    
    '@media (max-width: 576px)': {
      rightPanel: {
        padding: '40px 20px'
      },
      
      socialLogin: {
        gridTemplateColumns: '1fr'
      }
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <div style={styles.authWrapper}>
          
          {/* Left Panel - Hero Section */}
          <div style={styles.leftPanel}>
            <div style={styles.leftPanelContent}>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px'}}>
                <FiRobot style={{fontSize: '40px', color: 'white'}} />
                <h1 style={{fontSize: '24px', fontWeight: '700'}}>RobotVerse</h1>
              </div>
              
              <h2 style={styles.leftPanelTitle}>
                Join the Future of Industrial Robotics
              </h2>
              
              <p style={styles.leftPanelSubtitle}>
                Access the largest marketplace for industrial robots, parts, and services. Connect with verified suppliers worldwide.
              </p>
              
              <ul style={styles.featuresList}>
                <li style={styles.featureItem}>
                  <div style={styles.featureIcon}>🤖</div>
                  <span>Access 500+ verified robots</span>
                </li>
                <li style={styles.featureItem}>
                  <div style={styles.featureIcon}>🔧</div>
                  <span>Source genuine spare parts</span>
                </li>
                <li style={styles.featureItem}>
                  <div style={styles.featureIcon}>🛠️</div>
                  <span>Connect with expert services</span>
                </li>
                <li style={styles.featureItem}>
                  <div style={styles.featureIcon}>🚚</div>
                  <span>Global logistics support</span>
                </li>
              </ul>
            </div>
            
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '300px',
              height: '300px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50%',
              transform: 'translate(30%, -30%)'
            }}></div>
          </div>
          
          {/* Right Panel - Login Form */}
          <div style={styles.rightPanel}>
            <button 
              style={styles.backButton}
              onClick={handleBackToHome}
              onMouseEnter={e => e.currentTarget.style.color = '#764ba2'}
              onMouseLeave={e => e.currentTarget.style.color = '#667eea'}
            >
              <FiArrowLeft /> Back to RobotVerse
            </button>
            
            <div style={styles.formHeader}>
              <h2 style={styles.formTitle}>Welcome Back 🤖</h2>
              <p style={styles.formSubtitle}>Sign in to access your robot marketplace dashboard</p>
            </div>
            
            {/* Social Login */}
            <div style={styles.socialLogin}>
              <button 
                style={styles.socialButton}
                onClick={() => handleSocialLogin('google')}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaGoogle style={{color: '#DB4437'}} />
              </button>
              
              <button 
                style={styles.socialButton}
                onClick={() => handleSocialLogin('github')}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaGithub style={{color: '#333'}} />
              </button>
              
              <button 
                style={styles.socialButton}
                onClick={() => handleSocialLogin('linkedin')}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaLinkedin style={{color: '#0077B5'}} />
              </button>
            </div>
            
            {/* Divider */}
            <div style={styles.divider}>
              <div style={styles.dividerLine}></div>
              <span style={styles.dividerText}>or continue with email</span>
              <div style={styles.dividerLine}></div>
            </div>
            
            {/* Login Form */}
            <form onSubmit={handleSubmit} style={styles.authForm}>
              {/* Email Field */}
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Email Address</label>
                <div style={styles.inputWrapper}>
                  <FiMail style={styles.inputIcon} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    style={{
                      ...styles.formInput,
                      borderColor: errors.email ? '#ef4444' : '#e2e8f0'
                    }}
                    onFocus={e => e.target.style.borderColor = errors.email ? '#ef4444' : '#667eea'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : '#e2e8f0'}
                  />
                </div>
                {errors.email && (
                  <div style={styles.errorMessage}>
                    <FiShield /> {errors.email}
                  </div>
                )}
              </div>
              
              {/* Password Field */}
              <div style={styles.formGroup}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                  <label style={styles.formLabel}>Password</label>
                  <Link 
                    to="/forgot-password" 
                    style={{
                      fontSize: '13px',
                      color: '#667eea',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    Forgot password?
                  </Link>
                </div>
                <div style={styles.inputWrapper}>
                  <FiLock style={styles.inputIcon} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    style={{
                      ...styles.formInput,
                      borderColor: errors.password ? '#ef4444' : '#e2e8f0'
                    }}
                    onFocus={e => e.target.style.borderColor = errors.password ? '#ef4444' : '#667eea'}
                    onBlur={e => e.target.style.borderColor = errors.password ? '#ef4444' : '#e2e8f0'}
                  />
                  <button
                    type="button"
                    style={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {errors.password && (
                  <div style={styles.errorMessage}>
                    <FiShield /> {errors.password}
                  </div>
                )}
              </div>
              
              {/* Remember Me Checkbox */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '25px'
              }}>
                <input
                  type="checkbox"
                  id="remember"
                  style={{
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer'
                  }}
                />
                <label htmlFor="remember" style={{
                  fontSize: '14px',
                  color: '#64748b',
                  cursor: 'pointer'
                }}>
                  Remember me for 30 days
                </label>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                style={{
                  ...styles.submitButton,
                  opacity: isLoading ? '0.8' : '1',
                  cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
                onMouseEnter={e => !isLoading && (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => !isLoading && (e.currentTarget.style.transform = 'translateY(0)')}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div style={styles.loadingSpinner}></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in to RobotVerse
                    <FiArrowLeft style={{transform: 'rotate(180deg)'}} />
                  </>
                )}
              </button>
            </form>
            
            {/* Links Section */}
            <div style={styles.authLinks}>
              <p style={styles.authLinkText}>
                Don't have an account?{' '}
                <Link 
                  to="/register" 
                  style={styles.authLink}
                  onMouseEnter={e => e.currentTarget.style.color = '#764ba2'}
                  onMouseLeave={e => e.currentTarget.style.color = '#667eea'}
                >
                  Join RobotVerse
                </Link>
              </p>
              
              <div style={{
                fontSize: '13px',
                color: '#94a3b8',
                marginTop: '30px',
                padding: '15px',
                background: '#f8fafc',
                borderRadius: '10px'
              }}>
                <FiShield style={{marginRight: '8px'}} />
                Your data is secured with enterprise-grade encryption
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add spin animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;