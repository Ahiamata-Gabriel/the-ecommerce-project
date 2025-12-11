import React from "react";
import useCarouselLaptops from "../Hooks/useCarouselLaptops";

const HeroCarousel = () => {
  const { data, error, isLoading } = useCarouselLaptops();

  if (isLoading) return <div>Loading carousel...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No carousel items found</div>;

  return (
    <div className="hero-carousel">
      {data.map((item) => (
        <figure className="hero-slide" key={item.id}>
          {item.image1 ? (
            <img src={item.image1} alt={item.name ?? "carousel image"} />
          ) : (
            <div className="hero-slide-placeholder">No image</div>
          )}
          <figcaption className="hero-slide-caption">
            {item.name && <h3>{item.name}</h3>}
            {item.price && <p>{item.price}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default HeroCarousel;
