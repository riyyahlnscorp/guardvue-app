import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

const values = [
  { title: "Proven Protection", text: "Every product we make is engineered and tested to perform when it matters most." },
  { title: "Precision Engineering", text: "From spec to installation, our team gets the details right the first time." },
  { title: "Honest Partnership", text: "We work alongside architects, builders, and clients — not just as a supplier." },
  { title: "Built to Last", text: "Our glass is designed for real-world conditions, not just lab tests." },
];

export default function About() {
  return (
    <div>
      <div className="page-header-bg">
  <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
  <div className="page-header">
    <div className="eyebrow">OUR STORY</div>
    <h1 className="headline">Built on trust,<br />engineered for <span className="blue">protection.</span></h1>
    <hr className="rule" />
    <p className="lede">
      GuardVue was founded to solve a simple problem: security shouldn't mean sacrificing
      visibility. We design and manufacture bullet-resistant and high-performance glass
      for the environments where safety, clarity, and craftsmanship all matter.
    </p>
  </div>
</div>

      <div className="about-story">
  <h2 className="story-heading">Our Story</h2>
  <p>
    What started as a small team of glass specialists has grown into a trusted supply
    partner for residential, commercial, and government projects. We believe protective
    glazing should be as transparent about its performance as it is to look through —
    every pane we produce is tested, certified, and backed by a team that stands behind
    its work.
  </p>
</div>

      <div className="values-grid">
        {values.map((v, i) => (
          <div key={i} className="value-card">
            <h3>{v.title}</h3>
            <hr className="line" />
            <p>{v.text}</p>
          </div>
        ))}
      </div>

      <div className="about-cta">
        <p className="lede" style={{margin: '0 auto 24px', textAlign: 'center'}}>
          Have a project in mind? We'd love to hear about it.
        </p>
        <Link to="/contact" className="cta-outline">GET IN TOUCH →</Link>
      </div>
    </div>
  );
}