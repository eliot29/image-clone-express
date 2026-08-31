import { useEffect, useState } from "react";

interface PhotoSlideshowProps {
  images: string[];
  label: string;
  captions?: string[];
  interval?: number;
}

const PhotoSlideshow = ({ images, label, captions, interval = 3500 }: PhotoSlideshowProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-or-mat/70 aspect-[16/10]">
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
      {captions && captions.length > 0 && (
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-blanc-casse text-navy font-medium text-sm px-4 py-1.5 rounded-full whitespace-nowrap">
          {captions[index % captions.length]}
        </span>
      )}
    </div>
  );
};

export default PhotoSlideshow;
