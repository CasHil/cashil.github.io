import { render, screen, fireEvent } from "@testing-library/react";
import DataExplorer from "./DataExplorer";
import { LanguageProvider } from "../../context/LanguageContext";

function renderWithProviders(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

test("renders DataExplorer with initial metrics and handles tab switching", () => {
  renderWithProviders(<DataExplorer />);

  // Verify headline & stats are present
  expect(screen.getByText(/Debugging the Divide/i)).toBeDefined();
  expect(screen.getAllByText(/174,988/i).length).toBeGreaterThan(0);

  // Switch to Engagement Clusters tab
  const clustersTabBtn = screen.getByText(/Clusters/i);
  fireEvent.click(clustersTabBtn);

  // Verify cluster content rendered
  expect(screen.getAllByText(/Completers|Afronders/i).length).toBeGreaterThan(0);
});

test("handles trajectory tab and week scrubber interaction", () => {
  renderWithProviders(<DataExplorer />);

  // Switch to Trajectory tab
  const trajectoryTabBtn = screen.getByText(/Trajectory|Traject/i);
  fireEvent.click(trajectoryTabBtn);

  // Verify trajectory content is present
  expect(screen.getByText(/Weekly Clickstream|Wekelijkse Klikstream/i)).toBeInTheDocument();

  // Click on week 5
  const week5Btn = screen.getByRole("button", { name: "W5" });
  fireEvent.click(week5Btn);

  expect(screen.getAllByText(/Week 5/i).length).toBeGreaterThan(0);
});
