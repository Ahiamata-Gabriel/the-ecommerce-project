import useCarouselLaptops from "../Hooks/useCarouselLaptops";
import Swiper from "swiper";

const HeroCarousel = () => {
  const { data, error, isPending } = useCarouselLaptops();
  console.log("Carousel data:", data);
  console.log("Carousel error:", error);

  if (isPending) return <div>Loading carousel...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    // <Swiper autoplay loop>
    //   {data.map((laptop) => (
    //     <SwiperSlide key={laptop.id}>
    //       {/* Show image, name, and call to action */}
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <h1>Hero Carousel</h1>
  );
};

export default HeroCarousel;
