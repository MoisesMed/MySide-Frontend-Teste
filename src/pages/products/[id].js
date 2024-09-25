import Button from "@/components/Button";
import { useCart } from "@/contexts/CardContext";
import { fetchSingleProduct } from "@/service/api";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 800px;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  gap: 20px;
`;

const ProductImage = styled.img`
  min-height: 300px;
  max-height: 300px;
`;

const ProductTitle = styled.h1`
  font-size: 16px;
  color: #111;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: 600;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const ProductCategory = styled.p`
  font-size: 16px;
  color: #666;
`;

export default function Product({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <Container>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>$ {product.price}</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductCategory>Category: {product.category}</ProductCategory>
      <Button color="red" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>

      <Button color="black" onClick={() => router.back()}>
        Back to Products
      </Button>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const product = await fetchSingleProduct(params.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return { props: { product } };
}
