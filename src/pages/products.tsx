import { useGetProducts } from "@/hooks/products";

export const Products = () => {
    const { products } = useGetProducts();
    return <div>Products</div>;
};
