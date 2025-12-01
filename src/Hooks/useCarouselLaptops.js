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

      // Normalize the first related product_images row into a top-level image1
      const normalized = (data || []).map((p) => {
        const imgRow =
          p.product_images && p.product_images.length
            ? p.product_images[0]
            : null;
        return {
          id: p.id,
          name: p.name,
          price: p.price,
          image1: imgRow?.image_1 ?? null,
          product_images: p.product_images ?? [],
        };
      });

      console.log("Carousel data fetched (normalized):", normalized);
      return normalized;
    },

    staleTime: 300000, // 5 minutes
  });

export default useCarouselLaptops;
