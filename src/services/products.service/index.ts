class ProductsService {
	getAllProducts = async () => {
		return ["product 1", "product 2", "product 3", "product 4"];
	};
}

export const productsService = new ProductsService();
