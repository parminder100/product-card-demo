import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/index"; // adjust path if needed

// Mock ProductCard with a display name
jest.mock("../components/ProductCard", () => {
  const MockProductCard = ({ product }) => (
    <div data-testid="product-card">{product.title}</div>
  );
  return MockProductCard;
});

// Mock ThemeToggle with a display name
jest.mock("../components/ThemeToggle", () => {
  const MockThemeToggle = ({ dark, setDark }) => (
    <button onClick={() => setDark(!dark)}>Toggle Theme</button>
  );
  return MockThemeToggle;
});

describe("Home component", () => {
  const products = [
    { id: 1, title: "Wireless Headphones", outOfStock: false },
    { id: 2, title: "Smart Watch", outOfStock: true },
  ];

  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 500 });
  });

  test("renders products correctly", () => {
    render(<Home products={products} />);
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(products.length);
    expect(productCards[0]).toHaveTextContent("Wireless Headphones");
    expect(productCards[1]).toHaveTextContent("Smart Watch");
  });

  test("applies card-container class on mobile/tablet", () => {
    render(<Home products={products} />);
    const container = screen.getByTestId("product-container");
    expect(container).toHaveClass("card-container");
  });

  test("theme toggle button works", () => {
    render(<Home products={products} />);
    const button = screen.getByText("Toggle Theme");

    // Initially light mode
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    // Click to enable dark mode
    fireEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    // Click again to disable dark mode
    fireEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
