import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>✦</span> Nova
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <a href="#contact" className="nav-button">
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <main id="home">
        <section className="hero-section">
          <div className="hero-content">
            <div className="badge">
              ✨ The future starts here
            </div>

            <h1>
              Build something
              <span> amazing.</span>
            </h1>

            <p>
              Create beautiful digital experiences with a modern,
              simple and powerful platform designed for everyone.
            </p>

            <div className="hero-buttons">
              <a href="#features" className="primary-btn">
                Explore Now →
              </a>

              <a href="#about" className="secondary-btn">
                Learn More
              </a>
            </div>

            <div className="users">
              <div className="avatars">
                <span>👨🏻</span>
                <span>👩🏻</span>
                <span>👨🏽</span>
                <span>👩🏽</span>
              </div>
              <div>
                <strong>10,000+</strong>
                <small>Happy users</small>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-glow"></div>

            <div className="dashboard">
              <div className="dashboard-top">
                <div className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span>Dashboard</span>
                <div></div>
              </div>

              <div className="welcome">
                <small>Welcome back 👋</small>
                <h3>Your Overview</h3>
              </div>

              <div className="stats">
                <div className="stat">
                  <span>Revenue</span>
                  <strong>$24,580</strong>
                  <em>↑ 18.2%</em>
                </div>

                <div className="stat">
                  <span>Users</span>
                  <strong>12,430</strong>
                  <em>↑ 12.5%</em>
                </div>
              </div>

              <div className="chart">
                <div className="chart-label">
                  <span>Analytics</span>
                  <b>+24.8%</b>
                </div>

                <div className="bars">
                  <i style={{ height: '35%' }}></i>
                  <i style={{ height: '50%' }}></i>
                  <i style={{ height: '42%' }}></i>
                  <i style={{ height: '68%' }}></i>
                  <i style={{ height: '58%' }}></i>
                  <i style={{ height: '82%' }}></i>
                  <i style={{ height: '95%' }}></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="features-section">
          <div className="section-title">
            <span>POWERFUL FEATURES</span>
            <h2>Everything you need</h2>
            <p>
              Simple tools that help you turn your ideas into reality.
            </p>
          </div>

          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Optimized for speed so your website feels incredibly
                smooth and responsive.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>
                Modern interfaces that look great on every device
                and screen size.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>
                Your data stays protected with reliable and secure
                technology.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="about-section">
          <div className="about-image">
            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>
            <div className="about-icon">✦</div>
          </div>

          <div className="about-content">
            <span>WHY NOVA?</span>
            <h2>Made for people who want to create.</h2>
            <p>
              Whether you're building a startup, portfolio, online
              store or personal project, Nova gives you everything
              you need to get started quickly.
            </p>

            <div className="check">
              <div>✓</div>
              <span>Easy to use</span>
            </div>

            <div className="check">
              <div>✓</div>
              <span>Fully responsive</span>
            </div>

            <div className="check">
              <div>✓</div>
              <span>Built for the modern web</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="cta-section">
          <div>
            <h2>Ready to build something great?</h2>
            <p>Start creating your next project today.</p>
          </div>

          <button onClick={() => alert('Welcome to Nova!')}>
            Get Started →
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-logo">✦ Nova</div>
        <p>© 2026 Nova. All rights reserved.</p>

        <div className="socials">
          <a href="#home">Instagram</a>
          <a href="#home">Twitter</a>
          <a href="#home">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
