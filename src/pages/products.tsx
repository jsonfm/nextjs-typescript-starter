import { productsService } from "@/services/products.service";
import useSWR from "swr";


export const Products = () => {
    const { data: products, isLoading, error } = useSWR(null, () => productsService.getAllProducts())
    
    return (
        <div>Products</div>
    )
}
