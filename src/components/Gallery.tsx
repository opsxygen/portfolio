"use client";

import { urlFor } from "@/sanity/lib/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { getImageDimensions } from "@/lib/utils";

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
}

export function Gallery({ media }: PhotoGalleryProps) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        <Slider {...sliderSettings} className="">
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

function SampleNextArrow(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
) {
  const classNames = ` border-none block place-content-center place-items-center overflow-hidden bg-black/20 cursor-pointer m-0 p-0 w-10 h-10 rounded-full pointer-events-auto transform-none`;

  const { style, onClick } = props;
  return (
    <button
      type="button"
      className={classNames}
      style={{
        ...style,
        display: "block",
        width: "50px",
        height: "50px",
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <Image src="/right.svg" alt="arrow-left" width={40} height={40} />
    </button>
  );
}

function SamplePrevArrow(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
) {
  const classNames = ` border-none block place-content-center place-items-center overflow-hidden bg-black/20 cursor-pointer m-0 p-0 w-10 h-10 rounded-full pointer-events-auto transform-none`;

  const { style, onClick } = props;
  return (
    <button
      type="button"
      className={classNames}
      style={{
        ...style,
        display: "block",
        width: "50px",
        height: "50px",
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <Image src="/left.svg" alt="arrow-left" width={40} height={40} />
    </button>
  );
}
