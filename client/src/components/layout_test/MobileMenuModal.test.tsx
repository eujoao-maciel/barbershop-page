import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { MobileMenuModal } from "../layout/MobileMenuModal.tsx";

describe("MobileMenuModal", () => {
  it("does not render when isOpen is false", () => {
    render(<MobileMenuModal isOpen={false} onClose={vi.fn()} navLinks={[]} />);

    expect(screen.queryByText("Barber Name")).not.toBeInTheDocument();
  });

  it("renders links and CTA when isOpen is true", () => {
    render(
      <MobileMenuModal
        isOpen={true}
        onClose={vi.fn()}
        navLinks={[
          { label: "Services", href: "#services" },
          { label: "Gallery", href: "#gallery" },
        ]}
      />
    );

    expect(screen.getByText("Barber Name")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "#services");
    expect(screen.getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "#gallery");
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Schedule Now" })).toHaveAttribute("href", "#booking");
  });

  it("calls onClose when the close button is clicked", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(<MobileMenuModal isOpen={true} onClose={onClose} navLinks={[]} />);

    await user.click(screen.getByRole("button"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when a nav link is clicked", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(
      <MobileMenuModal
        isOpen={true}
        onClose={onClose}
        navLinks={[{ label: "Services", href: "#services" }]}
      />
    );

    await user.click(screen.getByRole("link", { name: "Services" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
