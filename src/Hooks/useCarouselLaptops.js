import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/suparbase";

const useCarouselLaptops = () =>
  useQuery({
    queryKey: ["carousel", "laptops"],
    queryFn: async () => {
      // Request product fields and the related product_images.image_1
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, product_images(*)")
        .limit(5);

      if (error) {
        console.error("Supabase fetch error:", error);
        throw new Error(error.message || "Failed to fetch carousel products");
      }

      return data;
    },

    staleTime: 300000, // 5 minutes
  });

export default useCarouselLaptops;
