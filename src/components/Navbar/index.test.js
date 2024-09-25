import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./index";
import { useCart } from "../../contexts/CardContext";

jest.mock("../../contexts/CardContext", () => ({
  useCart: jest.fn(),
}));

// eslint-disable-next-line react/display-name
jest.mock("../StyledModal", () => () => (
  <div data-testid="mock-modal">Mock Modal</div>
));

const mockCartContext = {
  cart: [
    { id: 1, title: "Product 1", price: 10, quantity: 1 },
    { id: 2, title: "Product 2", price: 20, quantity: 2 },
  ],
  getTotalItems: jest.fn().mockReturnValue(3),
};

describe("Navbar Component", () => {
  beforeEach(() => {
    useCart.mockReturnValue(mockCartContext);
  });

  it("renders correctly", () => {
    render(<Navbar />);

    expect(screen.getByText("My Store")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("displays cart count when there are items in the cart", () => {
    render(<Navbar />);

    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("increases cart count when items are added to the cart", () => {
    const { rerender } = render(<Navbar />);

    expect(screen.getByText("3")).toBeInTheDocument();

    mockCartContext.cart.push({
      id: 3,
      title: "Product 3",
      price: 30,
      quantity: 1,
    });
    mockCartContext.getTotalItems.mockReturnValue(4);

    rerender(<Navbar />);

    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
