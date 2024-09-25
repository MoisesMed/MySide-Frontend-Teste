import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 45px;
  background-color: #333;
  color: #fff;
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  margin-right: 12px;
  &:hover {
    opacity: 0.7;
  }
`;

export const CartCount = styled.span`
  background-color: #d71920;
  border-radius: 50%;
  color: #fff;
  padding: 3px 6px;
  position: absolute;
  top: -10px;
  right: -20px;
  font-size: 12px;
`;
