import styled from "styled-components";

const Button = styled.button`
  align-items: center;
  background: ${(props) => (props.color === "red" ? "#d71920" : "#000")};
  border-radius: 8px;
  color: #fff;
  display: flex;
  font-size: ${(props) => (props.small ? "12px" : "14px")};
  height: ${(props) => (props.small ? "35px" : "48px")};
  justify-content: center;
  padding: ${(props) => (props.small ? "4px 12px" : "0 32px")};
  text-transform: ${(props) => (props.small ? "none" : "uppercase")};
  font-weight: ${(props) => (props.small ? "600" : "500")};
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export default Button;
