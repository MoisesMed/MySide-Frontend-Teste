import { useState } from "react";
import StyledModal from "../StyledModal";
import { CartButton, CartCount, NavbarContainer } from "./styles";
import { useCart } from "@/contexts/CardContext";

export default function Navbar() {
  const { cart, getTotalItems } = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <NavbarContainer>
      <div>My Store</div>
      <CartButton onClick={openModal}>
        Cart
        {cart.length > 0 && <CartCount>{getTotalItems()}</CartCount>}
      </CartButton>
      <StyledModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </NavbarContainer>
  );
}
