import { useEffect, useState } from "react";

interface PhotoSlideshowProps {
  images: string[];
  label: string;
  interval?: number;
  caption?: string;
}

const PhotoSlideshow = ({ images, label, interval = 3500, caption }: PhotoSlideshowProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative overflow-hidden h-[280px] md:h-[380px]">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${label} ${i + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {caption && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
          <span className="absolute bottom-0 left-0 p-5 md:p-6 font-dm text-[11px] font-semibold uppercase tracking-[0.18em] text-blanc-casse">
            {caption}
          </span>
        </>
      )}
    </div>
  );
};

export default PhotoSlideshow;
