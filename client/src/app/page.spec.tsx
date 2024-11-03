import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("page", () => {
  it("should has h1", () => {
    render(<Page />);

    expect(screen.getByRole("heading")).toHaveTextContent("Hello World!");
  });
});
