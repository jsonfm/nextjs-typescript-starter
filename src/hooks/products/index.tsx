import { productsService } from "@/services/products.service";
import useSWR from "swr";

export const useGetProducts = () => {
    const { data: products, ...rest } = useSWR(null, () => productsService.getAllProducts());

    return { products, ...rest };
};
