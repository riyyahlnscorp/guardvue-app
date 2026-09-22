import { useState } from 'react';
import { Link } from 'react-router-dom';
import solutions from '../data/solutions';
import heroBg from '../assets/hero-bg.png';
import { submitToHubspot } from '../utils/hubspot';

export default function Solutions() {
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
    <div className="solutions-page">
      <div className="site-hero">
  <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
  <div className="site-hero-inner">
    <div className="hero-text">
            <div className="eyebrow">OUR RANGE</div>
            <h1 className="headline">Solutions built<br />for <span className="blue">every threat.</span></h1>
            <p className="lede">Seven product lines, engineered for the environments where safety, performance, and clarity matter most.</p>
          </div>

          <div className="panel">
            <div className="panel-badge">GV-2026 · ENQUIRE</div>
            <div className="panel-eyebrow">REQUEST A QUOTE</div>
            <h2>Not sure which<br /><span className="blue">solution fits?</span></h2>
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

      <div className="solutions-grid">
        {solutions.map(s => (
          <Link key={s.slug} to={`/solutions/${s.slug}`} className="solution-card">
            <h3>{s.name}</h3>
            <p>{s.tagline}</p>
            <span className="view-link">View details →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}