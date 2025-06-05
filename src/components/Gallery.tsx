'use client';

import { urlFor } from '@/sanity/lib/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import { getImageDimensions } from '@/lib/utils';

interface PhotoGalleryProps {
  media: {
    asset: {
      _ref: string;
    };
    file?: {
      asset: {
        _ref: string;
      };
    };
  }[];
  title: string;
}

export function Gallery({ media, title }: PhotoGalleryProps) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: true,
 
  };

  const images = media.map((m) => {
    if (m.file) {
      const { width, height } = getImageDimensions(m.file.asset._ref);
      return {
        src: urlFor(m.file.asset._ref).url(),
        width,
        height,
      };
    }

    const { width, height } = getImageDimensions(m.asset._ref);
    return {
      src: urlFor(m.asset._ref).url(),
      width,
      height,
    };
  });

  return (
    <section className="grid gap-10">
      <div className="slider-container w-full overflow-hidden">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="rounded-xl">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
