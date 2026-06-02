import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Services } from "../Services.tsx";

describe("Services", () => {
  it("renders the services section with its heading", () => {
    const { container } = render(<Services />);

    const section = container.querySelector("#services");

    expect(section).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Services" }),
    ).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    render(<Services />);

    expect(
      screen.getByRole("button", { name: /haircut/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Modern cuts for your everyday style."),
    ).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /beard service/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Precise beard shaping with a polished finish."),
    ).toBeInTheDocument();
    expect(screen.getByText("$12")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /visagism/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Personalized styling for your face and image."),
    ).toBeInTheDocument();
    expect(screen.getByText("$15")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /hair wash/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Refreshing cleansing for a clean scalp feel."),
    ).toBeInTheDocument();
    expect(screen.getByText("$8")).toBeInTheDocument();
  });

  it("activates a card when clicked", async () => {
    const user = userEvent.setup();
    render(<Services />);

    const haircutCard = screen.getByRole("button", { name: /haircut/i });

    expect(haircutCard).toHaveAttribute("aria-pressed", "false");

    await user.click(haircutCard);

    expect(haircutCard).toHaveAttribute("aria-pressed", "true");
  });

  it("deactivates a card when clicked twice", async () => {
    const user = userEvent.setup();
    render(<Services />);

    const haircutCard = screen.getByRole("button", { name: /haircut/i });

    await user.click(haircutCard);
    expect(haircutCard).toHaveAttribute("aria-pressed", "true");

    await user.click(haircutCard);
    expect(haircutCard).toHaveAttribute("aria-pressed", "false");
  });

  it("switches the active card when another one is clicked", async () => {
    const user = userEvent.setup();
    render(<Services />);

    const haircutCard = screen.getByRole("button", { name: /haircut/i });
    const beardTrimCard = screen.getByRole("button", { name: /beard service/i });

    await user.click(haircutCard);
    expect(haircutCard).toHaveAttribute("aria-pressed", "true");
    expect(beardTrimCard).toHaveAttribute("aria-pressed", "false");

    await user.click(beardTrimCard);
    expect(haircutCard).toHaveAttribute("aria-pressed", "false");
    expect(beardTrimCard).toHaveAttribute("aria-pressed", "true");
  });
});
