import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PageTransition from '../components/animations/PageTransition';
import './Reservations.css';

const Reservations = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_RESERVATION,
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
      <div className="reservations-page container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center section-title mb-5">Book a Table</h1>
            <form ref={form} onSubmit={sendEmail} className="reservation-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" name="phone" required />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input type="date" className="form-control" id="date" name="date" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="time" className="form-label">Time</label>
                  <input type="time" className="form-control" id="time" name="time" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="guests" className="form-label">Number of Guests</label>
                <select className="form-select" id="guests" name="guests" defaultValue="1">
                  {[...Array(8).keys()].map(n => (
                    <option key={n + 1} value={n + 1}>{n + 1}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Book Now'}
              </button>
              {submitStatus === 'SUCCESS' && <div className="alert alert-success mt-3">Reservation submitted successfully!</div>}
              {submitStatus === 'ERROR' && <div className="alert alert-danger mt-3">Failed to submit reservation. Please try again.</div>}
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Reservations;
