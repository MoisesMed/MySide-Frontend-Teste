import React from "react";
import Image from "next/image";
import { Card, ImageContainer, Title, Price, Description } from "./styles";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <Card>
        <ImageContainer>
          <Image
            width={250}
            height={300}
            src={product.image}
            alt={product.title}
            layout="responsive"
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
