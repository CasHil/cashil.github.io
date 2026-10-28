import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders navigation and portfolio content", () => {
  render(<App />);
  const overviewLinks = screen.getAllByText(/overview|overzicht/i);
  expect(overviewLinks.length).toBeGreaterThan(0);
});

test("toggles language between English and Dutch", () => {
  render(<App />);

  // Switch to Dutch
  const nlButtons = screen.getAllByRole("button", { name: /nederlands/i });
  if (nlButtons.length > 0) {
    fireEvent.click(nlButtons[0]);
    expect(screen.getAllByText(/Overzicht/i).length).toBeGreaterThan(0);
  }

  // Switch back to English
  const enButtons = screen.getAllByRole("button", { name: /english/i });
  if (enButtons.length > 0) {
    fireEvent.click(enButtons[0]);
    expect(screen.getAllByText(/Overview/i).length).toBeGreaterThan(0);
  }
});

test("toggles theme between light and dark", () => {
  render(<App />);
  const themeToggle = screen.getAllByLabelText(/switch to/i)[0];
  expect(themeToggle).toBeDefined();
  fireEvent.click(themeToggle);
  // Root class or style should update
  expect(document.documentElement.style.colorScheme).toMatch(/light|dark/);
});
