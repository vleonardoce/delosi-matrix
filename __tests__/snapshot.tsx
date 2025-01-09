/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Page from "app/page";

it("renders mainpage unchanged", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
