import { useEffect, useRef, useState } from "react";

type CarteBretagneProps = {
  /** rendu sur fond navy : tracé et libellés en blanc cassé */
  onNavy?: boolean;
  className?: string;
};

const CarteBretagne = ({ onNavy = false, className = "" }: CarteBretagneProps) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stroke = onNavy ? "#F4F1EB" : "#1B2D4F";
  const label = onNavy ? "#F4F1EB" : "#1B2D4F";
  const dot = "#C9A84C";

  const villes = [
    { cx: 143.1, cy: 166.6, x: 159.1, y: 171.6, anchor: "start", name: "Brest" },
    { cx: 518.3, cy: 127.4, x: 518.3, y: 109.4, anchor: "middle", name: "Saint-Brieuc" },
    { cx: 752.5, cy: 258.0, x: 736.5, y: 263.0, anchor: "end", name: "Rennes" },
    { cx: 518.3, cy: 405.0, x: 502.3, y: 411.0, anchor: "end", name: "Vannes" },
  ];

  return (
    <div className={`w-full max-w-[520px] mx-auto ${className}`}>
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 920 560"
        role="img"
        aria-label="Carte de la Bretagne avec Brest, Saint-Brieuc, Rennes et Vannes"
        className="w-full h-auto"
      >
        <path
          d="M 80.2 186.2 C 75.2 187.0, 82.6 178.8, 82.4 176.4 C 82.2 173.9, 77.0 162.5, 78.1 156.8 C 79.2 151.1, 91.3 112.7, 95.4 107.8 C 99.6 102.9, 120.9 100.7, 127.9 98.0 C 135.0 95.3, 169.5 78.7, 180.0 75.1 C 190.5 71.6, 241.4 56.1, 253.7 55.5 C 266.0 55.0, 320.1 69.7, 327.5 68.6 C 334.9 67.5, 339.0 46.0, 342.6 42.5 C 346.3 38.9, 364.7 26.7, 370.8 26.1 C 377.0 25.6, 409.1 34.8, 416.4 35.9 C 423.6 37.0, 450.4 35.4, 457.6 39.2 C 464.8 43.0, 497.7 74.8, 503.1 81.7 C 508.5 88.5, 513.4 121.9, 522.6 120.8 C 531.9 119.8, 600.7 71.9, 613.7 68.6 C 626.7 65.3, 670.3 81.4, 678.8 81.7 C 687.3 81.9, 707.5 71.3, 715.6 71.9 C 723.8 72.4, 768.6 84.6, 776.4 88.2 C 784.1 91.7, 804.0 106.7, 808.9 114.3 C 813.8 121.9, 828.2 170.1, 834.9 179.6 C 841.6 189.2, 884.1 217.7, 889.1 228.6 C 894.2 239.5, 897.4 298.8, 895.6 310.3 C 893.8 321.7, 873.4 358.4, 867.4 365.8 C 861.5 373.1, 840.3 392.2, 824.1 398.5 C 807.8 404.7, 692.5 435.5, 672.3 440.9 C 652.0 446.4, 593.3 462.7, 581.2 463.8 C 569.1 464.9, 532.2 458.1, 527.0 454.0 C 521.7 449.9, 525.5 414.0, 518.3 414.8 C 511.1 415.6, 448.2 464.6, 440.2 463.8 C 432.3 463.0, 429.7 412.9, 422.9 405.0 C 416.0 397.1, 370.8 374.8, 357.8 369.1 C 344.8 363.3, 277.6 339.1, 266.7 336.4 C 255.9 333.7, 235.8 334.5, 227.7 336.4 C 219.6 338.3, 177.1 363.3, 169.2 359.3 C 161.2 355.2, 139.7 293.9, 132.3 287.4 C 124.9 280.9, 76.8 283.6, 80.2 280.9 C 83.7 278.2, 170.2 260.2, 173.5 254.7 C 176.7 249.3, 119.8 220.7, 119.3 215.6 C 118.7 210.4, 165.0 196.8, 167.0 192.7 C 169.0 188.6, 150.4 167.1, 143.1 166.6 C 135.9 166.0, 85.3 185.3, 80.2 186.2 Z"
          fill={stroke}
          fillOpacity="0.05"
          stroke={stroke}
          strokeOpacity="0.55"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {villes.map((v, i) => (
          <g
            key={v.name}
            className={`map-dot ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${300 + i * 150}ms` }}
          >
            <circle cx={v.cx} cy={v.cy} r="14" fill={dot} opacity=".18" />
            <circle cx={v.cx} cy={v.cy} r="5.5" fill={dot} />
            <text
              x={v.x}
              y={v.y}
              textAnchor={v.anchor}
              fontFamily="'DM Sans',system-ui,sans-serif"
              fontSize="19"
              fontWeight="600"
              fill={label}
            >
              {v.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default CarteBretagne;
