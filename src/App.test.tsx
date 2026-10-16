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

test("renders interactive algorithmic synthesizer console and keys", () => {
  render(<App />);
  const consoleHeading = screen.getByText(/MODEL CH-01 \/\/ ALGORITHMIC SYNTHESIZER/i);
  expect(consoleHeading).toBeInTheDocument();

  // Playable keys C4 through C5
  const c4Key = screen.getByRole("button", { name: /play note C4/i });
  expect(c4Key).toBeInTheDocument();
});

test("renders engineering highlights bento", () => {
  render(<App />);
  expect(screen.getByText(/High-Concurrency Payments/i)).toBeInTheDocument();
  expect(screen.getByText(/Gradual Compilers & Hedy/i)).toBeInTheDocument();
  expect(screen.getByText(/Haptic & Tangible UX/i)).toBeInTheDocument();
});

