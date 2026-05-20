import { render, screen } from "@testing-library/react";
import { AddressMap } from "../ui/AddressMap.tsx";

describe("AddressMap", () => {
  it("renders the map iframe", () => {
    render(<AddressMap />);

    const map = screen.getByTitle("Barbershop location");
    expect(map).toBeInTheDocument();
    expect(map.tagName).toBe("IFRAME");
  });

  it("sets the expected iframe attributes", () => {
    render(<AddressMap />);

    const map = screen.getByTitle("Barbershop location");
    expect(map).toHaveAttribute("src");
    expect(map).toHaveAttribute("loading", "lazy");
    expect(map).toHaveAttribute("referrerpolicy", "no-referrer-when-downgrade");
    expect(map).toHaveClass("h-full", "w-full", "border-0");
  });
});
