import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders navigation", () => {
  render(<App />);
  const homeLinks = screen.getAllByText(/home/i);
  expect(homeLinks.length).toBeGreaterThan(0);
  expect(homeLinks[0]).toBeInTheDocument();
});

test("renders skip link targeting main content", () => {
  render(<App />);
  const skipLink = screen.getByRole("link", { name: /skip to main content/i });
  expect(skipLink).toBeInTheDocument();
  expect(skipLink).toHaveAttribute("href", "#main-content");
});

test("renders accessible main landmark with id", () => {
  render(<App />);
  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();
  expect(main).toHaveAttribute("id", "main-content");
});
test("renders theme toggle button", () => {
  render(<App />);
  const toggleButtons = screen.getAllByRole("button", {
    name: /switch to (light|dark) theme/i,
  });
  expect(toggleButtons.length).toBeGreaterThan(0);
});

test("renders ambient sound toggle button", () => {
  render(<App />);
  const soundButtons = screen.getAllByRole("button", {
    name: /ambient synthesizer audio/i,
  });
  expect(soundButtons.length).toBeGreaterThan(0);
});

