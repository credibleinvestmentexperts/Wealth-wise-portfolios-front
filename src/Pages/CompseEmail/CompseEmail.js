import React, { useState } from "react";
import axios from "axios";
import "./CompseEmail.css";

const ComposeEmail = () => {
  const [formData, setFormData] = useState({
    send_to: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}api/users/sendComposedEmail`,
        formData
      );
      setFeedback({ type: "success", message: "✅ Email sent successfully!" });
      setFormData({ send_to: "", reply_to: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setFeedback({
        type: "error",
        message: "❌ Failed to send email. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="compose-wrapper">
      <div className="compose-card">
        <h2 className="compose-title">Compose Email</h2>
        <form onSubmit={handleSubmit} className="compose-form">
          <div className="form-group">
            <label>Recipient Email</label>
            <input
              type="email"
              name="send_to"
              value={formData.send_to}
              onChange={handleChange}
              placeholder="Enter recipient email"
              required
            />
          </div>

          <div className="form-group">
            <label>Reply-To</label>
            <input
              type="email"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              placeholder="Enter reply-to email"
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter email subject"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </button>

          {feedback.message && (
            <p className={`feedback ${feedback.type}`}>{feedback.message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ComposeEmail;
