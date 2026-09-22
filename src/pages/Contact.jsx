import { useState } from 'react';
import { submitToHubspot } from '../utils/hubspot';
import heroBg from '../assets/hero-bg.png';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    try {
      await submitToHubspot({
        firstname: form.firstname.value,
        company: form.company.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value,
      });
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <div className="site-hero">
  <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
  <div className="site-hero-inner contact-inner">
        <div className="hero-text">
          <div className="eyebrow">GET IN TOUCH</div>
          <h1 className="headline">Let's talk<br /><span className="blue">protection.</span></h1>
          <hr className="rule" />
          <p className="lede">
            Whether you need a single pane or a full building's worth of glazing,
            our team is ready to help you spec the right solution.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-label">PHONE</div>
              <a href="tel:+27690075588">+27 69 007 5588</a>
            </div>
            <div className="contact-item">
              <div className="contact-label">EMAIL</div>
              <a href="mailto:sales@premiumsafetyglass.co.za">sales@premiumsafetyglass.co.za</a>
            </div>
            <div className="contact-item">
           <div className="contact-label">LOCATION</div>
           <a href="https://www.google.com/maps/search/?api=1&query=Premium+Safety+Glass,+11+Woburn+Ave,+Benoni" target="_blank" rel="noopener noreferrer">11 Woburn Ave, Benoni</a>
           </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-badge">GV-2026 · CONTACT</div>
          <div className="panel-eyebrow">REQUEST A QUOTE</div>
          <h2>Send us<br /><span className="blue">a message.</span></h2>
          <form onSubmit={handleSubmit}>
            <input className="field" type="text" name="firstname" placeholder="Full Name *" required />
            <input className="field" type="text" name="company" placeholder="Company" />
            <div className="row2">
              <input className="field" type="email" name="email" placeholder="Email *" required />
              <input className="field" type="tel" name="phone" placeholder="Phone *" required />
            </div>
            <textarea className="field" name="message" placeholder="Message (optional)" />
            <button className="submit-btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'SENDING...' : status === 'sent' ? 'SENT ✓' : 'SEND ENQUIRY →'}
            </button>
            {status === 'error' && <p style={{color: '#ff6b6b', fontSize: '13px', marginTop: '10px'}}>Something went wrong — please try again.</p>}
          </form>
          <div className="privacy-note">🔒 Your information is kept confidential.</div>
        </div>
      </div>
    </div>
  );
}