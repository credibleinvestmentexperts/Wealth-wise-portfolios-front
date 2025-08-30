import React, { useState } from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import emailjs from "emailjs-com";

const ReachOut = () => {
  const [formDetails, setFormDetails] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification("");

    emailjs
      .send(
        "service_z9j5ouc", 
        "template_q9bb7xt", 
        formDetails,
        "ffH6RYFAcrEi2rwdb"
      )
      .then(
        () => {
          setNotification("✅ Message sent successfully!");
          setFormDetails({ user_name: "", user_email: "", message: "" });
        },
        () => {
          setNotification("❌ Failed to send. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setNotification(""), 5000);
      });
  };

  return (
    <>
      <div className="reachOutPage">
        <h1 className="reachOutTitle">Get in Touch</h1>
        <p className="reachOutSubtitle">
          We’d love to hear from you! Fill out the form and we’ll get back shortly.
        </p>
        <div className="reachOutFormWrapper">
          <form className="reachOutForm" onSubmit={handleSubmit}>
            <div className="inputGroup">
              <input
                type="text"
                name="user_name"
                value={formDetails.user_name}
                onChange={handleChange}
                required
              />
              <label>Your Name</label>
            </div>

            <div className="inputGroup">
              <input
                type="email"
                name="user_email"
                value={formDetails.user_email}
                onChange={handleChange}
                required
              />
              <label>Your Email</label>
            </div>

            <div className="inputGroup">
              <textarea
                name="message"
                rows="5"
                value={formDetails.message}
                onChange={handleChange}
                required
              ></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <span className="loader"></span> : "Send Message"}
            </button>

            {notification && (
              <div className="notification-banner">{notification}</div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReachOut;
