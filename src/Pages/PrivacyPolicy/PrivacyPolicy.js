import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./PrivacyPolicy.css";

const ModernPrivacy = () => {
  return (
    <>
      <section className="privacy-wrapper">
        {/* Hero Section */}
        <header className="privacy-hero">
          <h1 className="privacy-title">Privacy Center</h1>
          <p className="privacy-subtitle">
            At{" "}
            <Link to="/" className="brand-link">
              Wealth Wise Portfolios
            </Link>
            , protecting your privacy is more than a promise — it’s a tradition.  
            Our platform has been{" "}
            <span className="highlight">safe, secure, and trusted for over 20 years</span>.
          </p>
        </header>

        {/* Main Content */}
        <article className="privacy-content">
          <section className="privacy-card">
            <h2>Contact Us</h2>
            <p>
              For questions or privacy concerns, email us at{" "}
              <a href="mailto:invest@wealthwiseportfolios.com">
                invest@wealthwiseportfolios.com
              </a>
              .
            </p>
            <p>
              This Privacy Policy applies only to online activities and does not
              extend to offline or third-party channels.
            </p>
          </section>

          <section className="privacy-card">
            <h2>Consent</h2>
            <p>By using our site, you agree to our privacy practices and terms.</p>
          </section>

          <section className="privacy-card">
            <h2>What We Collect</h2>
            <ul>
              <li>Full name, email, and phone number</li>
              <li>Company details and contact address</li>
              <li>Messages sent via our contact forms</li>
            </ul>
          </section>

          <section className="privacy-card">
            <h2>How We Use Your Info</h2>
            <ul>
              <li>Maintain and improve website functionality</li>
              <li>Enhance your browsing experience</li>
              <li>Analyze traffic and trends</li>
              <li>Communicate updates and offers</li>
              <li>Prevent fraud and protect users</li>
            </ul>
          </section>

          <section className="privacy-card">
            <h2>Cookies</h2>
            <p>
              Cookies help us remember your preferences and provide a smoother
              experience. You can manage them in your browser settings.
            </p>
          </section>

          <section className="privacy-card">
            <h2>Third-Party Services</h2>
            <p>
              Ads and analytics may come from third-party providers. Please
              review their policies separately when leaving our site.
            </p>
          </section>

          <section className="privacy-card">
            <h2>Your Rights</h2>
            <p>
              Under GDPR and CCPA, you may request access, corrections, or
              deletion of your data by contacting us directly.
            </p>
          </section>

          <section className="privacy-card">
            <h2>Children's Privacy</h2>
            <p>
              We do not knowingly collect data from individuals under 13. If
              such data is found, it will be promptly deleted.
            </p>
          </section>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default ModernPrivacy;
