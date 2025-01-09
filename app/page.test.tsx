/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("Matriz: works with server component", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Matriz");
});
