import React from "react";
import { vi } from "vitest";
import { render } from "@testing-library/react";
import LoadButton from "./LoadButton";

vi.mock("../svg/pokeball.svg?react", () => ({
  default: () => React.createElement("svg", { "data-testid": "pokeball-icon" }),
}));

it("renders LoadButton successfully", () => {
  const { container, getByText } = render(
    <LoadButton clickHandler={() => {}} />
  );

  expect(getByText("Load More")).toBeTruthy();
  expect(container).toMatchSnapshot();
});
