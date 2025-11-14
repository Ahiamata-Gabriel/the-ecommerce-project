import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/suparbase";

const useCarouselLaptops = () =>
  useQuery({
    queryKey: ["carousel", "laptops"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, product_images(url, is_primary)")
        .eq("carousel", true)
        .limit(5);

      if (error) {
        console.error("Supabase fetch error:", error);
        throw new Error(error.message || "Failed to fetch carousel products");
      }
      console.log("Carousel data fetched:", data);
      return data;
    },

    staleTime: 300000, // 5 minutes
  });

export default useCarouselLaptops;
