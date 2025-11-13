// // useCarouselLaptops.js (concept)
// const useCarouselLaptops = () =>
//   useQuery({
//     queryKey: ["carousel", "laptops"],
//     queryFn: async () => {
//       const { data, error } = await supabase
//         .from("products")
//         .select("id, name, price, product_images(url, is_primary)")
//         .eq("carousel", true)
//         .limit(5);

//       if (error) throw error;
//       return data;
//     },
//     staleTime: 300000, // 5 minutes
//   });
// export default useCarouselLaptops;
