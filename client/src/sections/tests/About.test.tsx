import { render, screen } from "@testing-library/react";
import { About } from "../About.tsx";

describe("About", () => {
  it("renders the about section with its heading", () => {
    const { container } = render(<About />);

    const section = container.querySelector("#about");

    expect(section).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "About Us" }),
    ).toBeInTheDocument();
  });

  it("renders the owner image", () => {
    render(<About />);

    expect(screen.getByAltText("owner barber")).toBeInTheDocument();
  });

  it("renders the main about copy", () => {
    render(<About />);

    expect(
      screen.getByText(/bring back classic grooming/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/we create experiences/i)).toBeInTheDocument();
    expect(
      screen.getByText(/quality, respect, and connection/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/precision and modern style/i)).toBeInTheDocument();
    expect(screen.getByText(/style meets personality/i)).toBeInTheDocument();
  });

  it("renders the highlight cards", () => {
    render(<About />);

    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("+10 years")).toBeInTheDocument();
    expect(screen.getByText("Clients")).toBeInTheDocument();
    expect(screen.getByText("+1000")).toBeInTheDocument();
    expect(screen.getByText("Style")).toBeInTheDocument();
    expect(screen.getByText("Premium")).toBeInTheDocument();
  });
});
