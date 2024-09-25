import styled from "styled-components";

export const ModalContent = styled.div`
  max-width: 500px;
  margin: 0 auto;
  gap: 16px;
  display: flex;
  flex-direction: column;

  h2,
  p {
    color: #444;
    text-align-last: center;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: #444;
`;

export const ProductTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #444;
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  color: #444;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  place-content: flex-end;
`;

export const ProductQuantity = styled.span`
  font-size: 14px;
  color: #666;
`;
