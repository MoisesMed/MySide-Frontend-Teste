import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  ImageContainer,
  Title,
  Price,
  Description,
  SkeletonLoader,
} from "./styles";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Link href={`/products/${product.id}`} passHref>
      <Card>
        <ImageContainer>
          {loading && <SkeletonLoader />}
          <Image
            width={250}
            height={300}
            src={product.image}
            alt={product.title}
            layout="responsive"
            loading="lazy"
            onLoad={() => setLoading(false)}
          />
        </ImageContainer>
        <Title title={product.title}>{product.title}</Title>
        <Price>$ {product.price}</Price>
        <Description title={product.description}>
          {product.description}
        </Description>
      </Card>
    </Link>
  );
};

export default ProductCard;
