import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import solutions from '../data/solutions';
import { submitToHubspot } from '../utils/hubspot';
import ballisticGlass from '../assets/ballistic-glass.jpg';
import acousticGlass from '../assets/acoustic-glass.jpg';
import poolGlass from '../assets/pool-glass.jpg';
import clearGlass from '../assets/clear-glass.jpg';
import toughenedGlass from '../assets/toughened-glass.jpg';
import laminatedGlass from '../assets/laminated-glass.jpg';
import mirrorGlass from '../assets/mirror-glass.jpg';

const heroImages = {
  "ballistic-glass": ballisticGlass,
  "thermal-glass": acousticGlass,
  "pool-glass": poolGlass,
  "clear-glass": clearGlass,
  "toughened-glass": toughenedGlass,
  "laminated-glass": laminatedGlass,
  "mirror-glass": mirrorGlass,
};

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find(s => s.slug === slug);
  const [status, setStatus] = useState('idle');
  const heroImg = heroImages[slug];

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

  if (!solution) {
    return (
      <div className="page-placeholder">
        <h1>Not found</h1>
        <Link to="/solutions" className="cta-outline">Back to Solutions →</Link>
      </div>
    );
  }

  return (
    <div className="detail-hero product-hero-bg">
  {heroImg && <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />}
      <Link to="/solutions" className="back-link detail-back">← All Solutions</Link>
      <div className="detail-hero-inner">
        <div className="detail-text">
          <div className="eyebrow">PRODUCT</div>
          <h1 className="headline">{solution.name}</h1>
          <p className="lede">{solution.tagline}</p>
          <p>{solution.description}</p>
<ul className="feature-list">
  {solution.features.map((f, i) => (
    <li key={i}>{f}</li>
  ))}
</ul>

{solution.applications && (
  <div className="applications-block">
    <h3 className="block-title">Typical Applications</h3>
    <div className="applications-grid">
      {solution.applications.map((a, i) => (
        <span key={i} className="application-tag">{a}</span>
      ))}
    </div>
  </div>
)}
          <Link to="/contact" className="cta-outline">REQUEST A QUOTE →</Link>
        </div>

        <div className="panel detail-panel">
          <div className="panel-badge">GV-2026 · ENQUIRE</div>
          <div className="panel-eyebrow">REQUEST A QUOTE</div>
          <h2>Ask about<br /><span className="blue">{solution.name}.</span></h2>
          <form onSubmit={handleSubmit}>
            <input className="field" type="text" name="firstname" placeholder="Full Name *" required />
            <input className="field" type="text" name="company" placeholder="Company" />
            <div className="row2">
              <input className="field" type="email" name="email" placeholder="Email *" required />
              <input className="field" type="tel" name="phone" placeholder="Phone *" required />
            </div>
            <textarea className="field" name="message" placeholder={`Tell us about your ${solution.name} project...`} />
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