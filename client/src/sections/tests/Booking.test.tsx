import { render, screen } from "@testing-library/react";
import { Booking } from "../Booking.tsx";

describe("Booking", () => {
  it("renders the booking section with its heading", () => {
    const { container } = render(<Booking />);

    const section = container.querySelector("#booking");

    expect(section).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Book your cut" }),
    ).toBeInTheDocument();
  });

  it("renders the booking form fields", () => {
    render(<Booking />);

    expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("dd/mm/aaaa")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders the service options", () => {
    render(<Booking />);

    expect(
      screen.getByRole("option", { name: "Select Service" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Haircut" })).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Visagism" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Beard Trim" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Hair Wash" }),
    ).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Booking />);

    expect(
      screen.getByRole("button", { name: "Confirm Booking" }),
    ).toHaveAttribute("type", "submit");
  });
});
