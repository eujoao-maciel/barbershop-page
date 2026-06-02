import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "../layout/Navbar.tsx";

describe("Navbar", () => {
  it("renders the brand and primary navigation content", () => {
    render(<Navbar />);

    expect(screen.getByText("Barbershop Name")).toBeInTheDocument();
    expect(screen.getByText("BarberShop")).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /primary navigation/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Open menu" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute(
      "href",
      "#services",
    );
    expect(screen.getByRole("link", { name: "Gallery" })).toHaveAttribute(
      "href",
      "#gallery",
    );
    expect(screen.getByRole("link", { name: "Book now" })).toHaveAttribute(
      "href",
      "#booking",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(screen.getByRole("link", { name: "Schedule Now" })).toHaveAttribute(
      "href",
      "#booking",
    );
  });

  it("does not show mobile menu content before opening", () => {
    render(<Navbar />);

    expect(screen.getAllByText("Barbershop Name")).toHaveLength(1);
  });

  it("opens the mobile menu when clicking Open menu", async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    expect(screen.getByText("Barbershop Name")).toBeInTheDocument();
    expect(screen.getByText("Barber Name")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(2);
  });

  it("closes the mobile menu when clicking a modal link", async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.click(screen.getAllByRole("link", { name: "About" })[1]);

    expect(screen.getAllByText("Barbershop Name")).toHaveLength(1);
  });
});
