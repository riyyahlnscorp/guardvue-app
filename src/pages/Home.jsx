import heroBg from '../assets/hero-bg.png';
import { useState } from 'react';
import { submitToHubspot } from '../utils/hubspot';
import { Link } from 'react-router-dom';
export default function Home() {
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
    <>
      <section className="site-hero">
  <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
  <div className="site-hero-inner">
          <div className="hero-text">
            <div className="eyebrow">ADVANCED PROTECTION</div>
            <h1 className="headline">
              Security<br />
              you can <span className="blue">see.</span>
            </h1>
            <hr className="rule" />
            <p className="lede">
              Advanced bullet-resistant glass solutions designed for
              environments where safety, performance and clarity matter most.
            </p>
            <a href="/solutions" className="cta-outline">EXPLORE SOLUTIONS →</a>
          </div>

          <div className="panel">
            <div className="panel-badge">GV-2026 · TESTED SPEC</div>
            <div className="panel-eyebrow">REQUEST A QUOTE</div>
            <h2>Let's discuss<br /><span className="blue">your project.</span></h2>
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
      </section>

      <section className="features">
        <div className="feature">
          <h3>Proven<br />Protection</h3>
        
          <p>Engineered to resist ballistic threats.</p>
        </div>
        <div className="feature">
          <h3>Exceptional<br />Clarity</h3>
          <p>Security without compromising visibility.</p>
        </div>
        <div className="feature">
          <h3>Custom<br />Solutions</h3>
          <p>Tailored to your project requirements.</p>
        </div>
        <div className="feature">
          <h3>Trusted<br />Supply Partner</h3>
          <p>A product of Premium Safety Glass.</p>
                </div>
      </section>

      <section className="why-us">
        <div className="why-us-inner">
          <div className="why-us-text">
            <div className="eyebrow">WHY GUARDVUE</div>
            <h2 className="headline" style={{fontSize: 'clamp(32px,4vw,52px)'}}>
              Engineered for<br />what matters <span className="blue">most.</span>
            </h2>
            <p className="lede">
              We don't just supply glass — we partner with architects, builders, and
              security teams to spec the right solution for every threat level, every
              time. From first consultation to final install, our team stands behind
              every pane we produce.
            </p>
            <Link to="/about" className="cta-outline">LEARN MORE ABOUT US →</Link>
          </div>

          <div className="why-us-stats">
            <div className="stat-card">
          <div className="stat-number">PSG</div>
            <div className="stat-label">A product of Premium Safety Glass</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7</div>
              <div className="stat-label">Specialized product lines</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}