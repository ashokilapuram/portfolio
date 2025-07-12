import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = ({ className = '' }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init('XtW9uCSqxOTiWpHiS');
      console.log('EmailJS initialized successfully');
    } catch (err) {
      console.error('EmailJS initialization error:', err);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    // EmailJS configuration - match template variables exactly
    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      // title: 'Contact Us', // optional if you want to use {{title}}
    };

    console.log('Sending email with params:', templateParams);
    console.log('Service ID:', 'service_atyzzys');
    console.log('Template ID:', 'template_i5uiv9n');
    console.log('User ID:', 'XtW9uCSqxOTiWpHiS');

    // Send email using EmailJS
    emailjs.send(
      'service_atyzzys',
      'template_i5uiv9n',
      templateParams,
      'XtW9uCSqxOTiWpHiS'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      console.log('Error details:', {
        text: err.text,
        message: err.message,
        status: err.status,
        response: err.response
      });
      setSending(false);
      setError(`Failed to send message: ${err.text || err.message || 'Unknown error'}`);
      setTimeout(() => setError(''), 5000);
    });
  };

  return (
    <section className={`contact-section fade-in-section show ${className}`} id="contact">
      <div className="contact-container solid-bg">
        <h2 className="contact-title">Get in Touch</h2>
        {sent ? (
          <div className="contact-success">
            <span role="img" aria-label="success" style={{fontSize: '2.2rem'}}>✅</span>
            <div className="contact-success-title">Thank you!</div>
            <div className="contact-success-msg">Your message has been sent successfully.<br />I will get back to you soon.</div>
          </div>
        ) : (
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
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
            {error && <div className="contact-error">{error}</div>}
            <button className="contact-btn" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'} <span className="contact-btn-icon" role="img" aria-label="send">✈️</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact; 