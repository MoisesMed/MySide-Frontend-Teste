import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #d3d2d2;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  height: 435px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageContainer = styled.div`
  min-height: 300px;
  max-height: 300px;
  align-content: center;
  background-color: white;
  margin-bottom: 8px;
  img {
    width: 100%;
    max-width: 350px;
    max-height: 100%;
  }
`;

export const Title = styled.span`
  height: 35px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #111;
  font-size: 14px;
`;

export const Price = styled.p`
  margin: 8px 0;
  color: #333;
  font-size: 16px;
  font-weight: 600;
`;

export const Description = styled.span`
  color: #666;
  font-size: 14px !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SkeletonLoader = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite;
  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
`;
