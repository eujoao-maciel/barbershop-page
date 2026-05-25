import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact.tsx";

describe("Contact", () => {
  it("renders the contact section with its heading", () => {
    const { container } = render(<Contact />);

    const section = container.querySelector("#contact");

    expect(section).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Contact Info" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Visit us" }),
    ).toBeInTheDocument();
  });

  it("renders the contact items", () => {
    render(<Contact />);

    expect(screen.getByText("123 Barber Avenue")).toBeInTheDocument();
    expect(screen.getByText("Toronto, ON M5V 2T6")).toBeInTheDocument();
    expect(screen.getByText("(416) 555-0189")).toBeInTheDocument();
    expect(screen.getByText("Call us for bookings")).toBeInTheDocument();
    expect(screen.getByText("hello@barbername.com")).toBeInTheDocument();
    expect(screen.getByText("Send us your questions")).toBeInTheDocument();
    expect(screen.getByText("Mon - Sat: 9AM - 8PM")).toBeInTheDocument();
    expect(screen.getByText("Sunday: Closed")).toBeInTheDocument();
  });

  it("renders the closing contact copy", () => {
    render(<Contact />);

    expect(
      screen.getByText(/classic service, modern precision/i),
    ).toBeInTheDocument();
  });

  it("renders the location map", () => {
    render(<Contact />);

    expect(screen.getByTitle("Barbershop location")).toBeInTheDocument();
  });
});
