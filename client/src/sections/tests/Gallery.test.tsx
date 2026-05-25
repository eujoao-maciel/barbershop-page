import { render, screen } from "@testing-library/react";
import { Gallery } from "../Gallery.tsx";

describe("Gallery", () => {
  it("renders the gallery section with its heading", () => {
    const { container } = render(<Gallery />);

    const section = container.querySelector("#gallery");

    expect(section).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Gallery" }),
    ).toBeInTheDocument();
  });

  it("renders all gallery images", () => {
    render(<Gallery />);

    expect(
      screen.getByAltText("Barber trimming a client's beard in the chair."),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Barbershop interior with chairs and warm lighting."),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Classic barbershop with black chairs and a brick wall.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Barber refining a men's haircut with comb and scissors.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Clipper creating a fade on a men's haircut."),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Barbershop pole with a shaving brush in the background.",
      ),
    ).toBeInTheDocument();
  });

  it("renders six images with lazy loading", () => {
    render(<Gallery />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(6);

    images.forEach((image) => {
      expect(image).toHaveAttribute("loading", "lazy");
    });
  });
});
