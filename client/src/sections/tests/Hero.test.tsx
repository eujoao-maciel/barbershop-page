import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero.tsx";

describe("Hero", () => {
  it("renders the main hero content", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Name" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Barber" }),
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
      screen.getByRole("button", { name: "Book appointment" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Send a message" }),
    ).toBeInTheDocument();
  });
});
