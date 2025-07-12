import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ className = '' }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 2500);
    }, 1200);
  };

  return (
    <section className={`contact-section fade-in-section show ${className}`} id="contact">
      <div className="contact-container solid-bg">
        <h2 className="contact-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className="contact-btn" type="submit" disabled={sending}>
            {sending ? 'Sending...' : sent ? 'Sent!' : (
              <>
                Send Message <span className="contact-btn-icon" role="img" aria-label="send">✈️</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 