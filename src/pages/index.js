import { useState, useEffect } from "react";
import { fetchProducts } from "../service/api";
import styled from "styled-components";
import ProductCard from "@/components/ProductCard";

const Container = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}
