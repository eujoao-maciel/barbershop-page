import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, vi } from "vitest";
import { Booking } from "../Booking.tsx";

describe("Booking", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

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

    expect(screen.getByRole("textbox", { name: "Full Name" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Phone Number" })).toBeInTheDocument();
    expect(screen.getByLabelText("Appointment Date")).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Select Service" }),
    ).toBeInTheDocument();
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

  it("opens WhatsApp with the booking details when the form is submitted", async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Booking />);

    await user.type(screen.getByRole("textbox", { name: "Full Name" }), "Joao Silva");
    await user.type(screen.getByRole("textbox", { name: "Phone Number" }), "85999999999");
    await user.selectOptions(
      screen.getByRole("combobox", { name: "Select Service" }),
      "Haircut",
    );
    await user.type(screen.getByLabelText("Appointment Date"), "2026-06-10");
    await user.click(screen.getByRole("button", { name: "Confirm Booking" }));

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining("https://wa.me/5585994513251?text="),
      "_blank",
    );
    expect(decodeURIComponent(openSpy.mock.calls[0][0] ?? "")).toContain(
      "Name: Joao Silva",
    );
    expect(decodeURIComponent(openSpy.mock.calls[0][0] ?? "")).toContain(
      "Service: Haircut",
    );
    expect(decodeURIComponent(openSpy.mock.calls[0][0] ?? "")).toContain(
      "Date: 2026-06-10",
    );
  });
});
