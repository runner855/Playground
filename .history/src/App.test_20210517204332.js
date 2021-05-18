import { render, screen } from "@testing-library/react";
import App from "./components/App";

xtest("renders learn react link", () => {
  render(<App />);
  const appTitle = screen.getByText(/Playground/i);
  expect(appTitle).toBeInTheDocument();
});
