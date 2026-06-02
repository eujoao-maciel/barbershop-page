import { render, screen, within } from "@testing-library/react";
import { Footer } from "../layout/Footer.tsx";

describe("Footer", () => {
  it("renders the footer landmark and brand content", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "BarberShop Name" }),
    ).toBeInTheDocument();
    expect(screen.getByText("BarberShop")).toBeInTheDocument();
  });

  it("renders the footer navigation links", () => {
    render(<Footer />);

    const nav = screen.getByRole("navigation", { name: /footer navigation/i });

    expect(within(nav).getByRole("link", { name: "Home" })).toHaveAttribute("href", "#");
    expect(within(nav).getByRole("link", { name: "Services" })).toHaveAttribute("href", "#services");
    expect(within(nav).getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "#gallery");
    expect(within(nav).getByRole("link", { name: "About us" })).toHaveAttribute("href", "#about");
    expect(within(nav).getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });

  it("renders the opening hours", () => {
    render(<Footer />);

    expect(screen.getByRole("heading", { name: "Opening Hours" })).toBeInTheDocument();
    expect(screen.getByText("Monday - Friday: 9AM - 6PM")).toBeInTheDocument();
    expect(screen.getByText("Saturday: 9AM - 4PM")).toBeInTheDocument();
    expect(screen.getByText("Sunday: Closed")).toBeInTheDocument();
  });

  it("renders the social links with external link attributes", () => {
    render(<Footer />);

    const instagram = screen.getByRole("link", { name: "Instagram" });
    const twitter = screen.getByRole("link", { name: "Twitter" });

    expect(instagram).toHaveAttribute("href", "https://instagram.com");
    expect(instagram).toHaveAttribute("target", "_blank");
    expect(instagram).toHaveAttribute("rel", "noreferrer");

    expect(twitter).toHaveAttribute("href", "https://twitter.com");
    expect(twitter).toHaveAttribute("target", "_blank");
    expect(twitter).toHaveAttribute("rel", "noreferrer");
  });
});
