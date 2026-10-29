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
