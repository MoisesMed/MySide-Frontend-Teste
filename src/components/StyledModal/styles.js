import styled from "styled-components";

export const ModalContent = styled.div`
  width: 400px;
  margin: 0 auto;
  gap: 16px;
  display: flex;
  flex-direction: column;

  h2,
  p {
    color: #444;
    text-align-last: center;
  }

  @media (max-width: 600px) {
    width: 300px;
  }

  @media (max-width: 450px) {
    width: 250px;
  }

  @media (max-width: 350px) {
    width: 200px;
  }
`;

export const ProductList = styled.div`
  max-height: 300px;
  padding: 4px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  @media (max-height: 600px) {
    max-height: 200px;
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
  gap: 4px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ProductTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #444;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  color: #444;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  place-content: flex-end;
`;

export const ProductQuantity = styled.span`
  font-size: 14px;
  color: #666;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
