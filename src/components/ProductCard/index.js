import React from "react";
import Image from "next/image";
import { Card, ImageContainer, Title, Price, Description } from "./styles";

const formatPrice = (price) => {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const ProductCard = ({ product }) => {
  return (
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
      <Price>{formatPrice(product.price)}</Price>
      <Description title={product.description}>
        {product.description}
      </Description>
    </Card>
  );
};

export default ProductCard;
