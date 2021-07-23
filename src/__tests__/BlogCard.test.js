import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import BlogCard from "../components/BlogCard"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with  topic", () => {
  act(() => {
    render(<BlogCard topic="React" />, container);
  });
  expect(container.textContent).toBe(" React ");

  act(() => {
    render(<BlogCard id="1" topic="React" />, container);
  });
  expect(container.textContent).toBe(" React ");
});