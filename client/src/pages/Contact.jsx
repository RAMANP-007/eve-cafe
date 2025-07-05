import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PageTransition from '../components/animations/PageTransition';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitStatus('SUCCESS');
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          setSubmitStatus('ERROR');
          setIsSubmitting(false);
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <PageTransition>
      <div className="contact-page container py-5">
        <div className="row justify-content-center align-items-start">
          {/* Left Column: Info */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="contact-info-left">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                alt="Cafe Interior" 
                className="img-fluid rounded shadow-sm mb-4"
              />
              <h2 className="contact-title">Contact Us</h2>
              <p className="contact-subtitle mb-4">We're here to help! Reach out to us with any questions or feedback.</p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <strong>Address:</strong> 123, MG Road, Bengaluru, Karnataka, India
                </div>
                <div className="contact-detail-item">
                  <strong>Phone:</strong> +91 98765 43210
                </div>
                <div className="contact-detail-item">
                  <strong>Email:</strong> info@evecafe.com
                </div>
                <div className="contact-detail-item">
                  <strong>Opening Hours:</strong> Monday - Sunday: 8 AM - 10 PM
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-form-right">
              <h2 className="contact-title mb-4">Send us a Message</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'SUCCESS' && <div className="alert alert-success mt-3">Message sent successfully!</div>}
                {submitStatus === 'ERROR' && <div className="alert alert-danger mt-3">Failed to send message. Please try again.</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
