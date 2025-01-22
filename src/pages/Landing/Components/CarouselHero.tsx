import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const images = [
  {
    imageUrl:
      "https://ik.imagekit.io/deveoper99/Emotion-AI-for-B2B-Sales-1024x683.jpg",
    content: (
      <div className="text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to Emotiplay
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover videos that match your mood
        </p>
        <Link to={"/signup"}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Button>
        </Link>
      </div>
    ),
  },
  {
    imageUrl:
      "https://ik.imagekit.io/deveoper99/istockphoto-1334366001-640x640.jpg",
    content: (
      <div className="text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to Emotiplay
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover videos that match your mood
        </p>
        <Link to={"/signup"}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Button>
        </Link>
      </div>
    ),
  },
  {
    imageUrl: "https://ik.imagekit.io/deveoper99/banner-ai-tools.jpg",
    content: (
      <div className="text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to Emotiplay
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover videos that match your mood
        </p>
        <Link to={"/signup"}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Button>
        </Link>
      </div>
    ),
  },
];

const CarouselHero: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[300px] md:h-[400px] lg:h-[500px]"
          >
            <img
              src={image.imageUrl}
              alt={`Emotiplay Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              {image.content}
            </div>
          </div>
        ))}
      </Slider>
      <Button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hidden md:block z-10"
        onClick={goToPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hidden md:block z-10"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default CarouselHero;
