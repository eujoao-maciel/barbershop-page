import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero.tsx";

describe("Hero", () => {
  it("renders the main hero content", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Name" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "BarberShop" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A litle description about barbershop"),
    ).toBeInTheDocument();
  });

  it("renders the hero background image", () => {
    render(<Hero />);

    expect(screen.getByAltText("Hero section image")).toBeInTheDocument();
  });

  it("renders the call to action buttons", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: "Book your cut" }),
    ).toHaveAttribute("href", "#booking");
    expect(
      screen.getByRole("link", { name: "Who we are" }),
    ).toHaveAttribute("href", "#about");
  });
});
