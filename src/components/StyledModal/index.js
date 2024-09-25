import Modal from "react-modal";
import {
  ButtonsContainer,
  ModalContent,
  ProductDetails,
  ProductItem,
  ProductPrice,
  ProductQuantity,
  ProductTitle,
} from "./styles";
import { useCart } from "@/contexts/CardContext";
import Button from "../Button";
Modal.setAppElement("#__next");

export default function StyledModal({ modalIsOpen, closeModal }) {
  const { cart, clearCart, getTotalItems, getTotalPrice } = useCart();

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Cart Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <ModalContent>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <ProductItem key={product.id}>
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
              </ProductDetails>
            </ProductItem>
          ))
        )}
        <ProductTitle>Total Items: {getTotalItems()}</ProductTitle>

        <ProductTitle>Total Price: ${getTotalPrice()}</ProductTitle>

        <ButtonsContainer>
          <Button small color="red" onClick={closeModal}>
            Close
          </Button>
          <Button small color="black" onClick={clearCart}>
            Clear Cart
          </Button>
        </ButtonsContainer>
      </ModalContent>
    </Modal>
  );
}
