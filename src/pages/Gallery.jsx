import { useState } from 'react';
import g1 from '../assets/gallery-1.jpg';
import g2 from '../assets/gallery-2.jpg';
import g3 from '../assets/gallery-3.jpg';
import g4 from '../assets/gallery-4.jpg';
import g5 from '../assets/gallery-5.jpg';
import g6 from '../assets/gallery-6.jpg';
import heroBg from '../assets/hero-bg.png';

const images = [g1, g2, g3, g4, g5, g6];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <div className="page-header-bg">
  <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
  <div className="page-header">
    <div className="eyebrow">OUR WORK</div>
    <h1 className="headline">Built and <span className="blue">installed.</span></h1>
    <hr className="rule" />
    <p className="lede">
      A look at real GuardVue installations — engineered, tested, and delivered
      across residential, commercial, and security applications.
    </p>
  </div>
</div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            key={i}
            className="gallery-item"
            onClick={() => setActive(img)}
            aria-label={`View image ${i + 1}`}
          >
            <img src={img} alt={`GuardVue installation ${i + 1}`} />
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)}>✕</button>
          <img src={active} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}