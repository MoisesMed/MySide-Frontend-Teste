import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "./index";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 100,
  description: "This is a test product",
  image: "/test-image.jpg",
};

describe("ProductCard Component", () => {
  it("renders correctly with product data", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$ 100")).toBeInTheDocument();
    expect(screen.getByText("This is a test product")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
  });
});
