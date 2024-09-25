import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./[id]";
import { useCart } from "../../contexts/CardContext";
import { useRouter } from "next/router";

jest.mock("../../contexts/CardContext", () => ({
  useCart: jest.fn(),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 100,
  description: "This is a test product",
  category: "Test Category",
  image: "/test-image.jpg",
};

describe("Product Component", () => {
  const addToCart = jest.fn();
  const back = jest.fn();

  beforeEach(() => {
    useCart.mockReturnValue({ addToCart });
    useRouter.mockReturnValue({ back });
  });

  it("renders correctly with product data", () => {
    render(<Product product={mockProduct} />);

    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$ 100")).toBeInTheDocument();
    expect(screen.getByText("This is a test product")).toBeInTheDocument();
    expect(screen.getByText("Category: Test Category")).toBeInTheDocument();
  });

  it("calls addToCart when 'Add to Cart' button is clicked", () => {
    render(<Product product={mockProduct} />);

    fireEvent.click(screen.getByText("Add to Cart"));

    expect(addToCart).toHaveBeenCalledWith(mockProduct);
  });

  it("calls router.back when 'Back to Products' button is clicked", () => {
    render(<Product product={mockProduct} />);

    fireEvent.click(screen.getByText("Back to Products"));

    expect(back).toHaveBeenCalled();
  });
});
