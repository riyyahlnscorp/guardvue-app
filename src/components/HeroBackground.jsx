export default function HeroBackground() {
  return (
    <svg className="hero-bg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1c2c" />
          <stop offset="55%" stopColor="#0a1420" />
          <stop offset="100%" stopColor="#050a10" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff9a5a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff9a5a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1600" height="900" fill="url(#sky)" opacity="0.7" />
      <rect x="600" y="380" width="1000" height="60" fill="url(#glow)" opacity="0.4" />
      <g opacity="0.4" fill="#0e1b28">
        <rect x="700" y="520" width="40" height="220" />
        <rect x="750" y="470" width="30" height="270" />
        <rect x="800" y="560" width="50" height="180" />
        <rect x="880" y="430" width="35" height="310" />
        <rect x="940" y="500" width="45" height="240" />
        <rect x="1000" y="470" width="30" height="270" />
        <rect x="1060" y="540" width="60" height="200" />
        <rect x="1150" y="490" width="40" height="250" />
        <rect x="1220" y="560" width="30" height="180" />
        <rect x="1280" y="510" width="50" height="230" />
        <rect x="1360" y="480" width="35" height="260" />
        <rect x="1420" y="540" width="45" height="200" />
      </g>
      <g stroke="#1c3450" strokeWidth="2" opacity="0.5">
        <line x1="900" y1="80" x2="900" y2="900" />
        <line x1="1150" y1="80" x2="1150" y2="900" />
        <line x1="1400" y1="80" x2="1400" y2="900" />
      </g>
    </svg>
  );
}