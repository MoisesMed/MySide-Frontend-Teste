const ApiUrl = "https://fakestoreapi.in/api";

export async function fetchProducts(page = 1, limit) {
  const res = await fetch(`${ApiUrl}/products?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  return products.products;
}

export async function fetchCategories() {
  const res = await fetch(`${ApiUrl}/products/category`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  return products.categories;
}

export async function fetchSingleProduct(id) {
  const res = await fetch(`${ApiUrl}/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const product = await res.json();
  return product.product;
}
