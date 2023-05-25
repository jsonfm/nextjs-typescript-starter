import { useGetProducts } from "@/hooks/products";

export const Products = () => {
    const { products } = useGetProducts();
    console.log("🚀 ~ file: products.tsx:5 ~ Products ~ products:", products);
    return <div>Products</div>;
};
