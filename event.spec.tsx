import { vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

function createMouseEvent(
  type: string,
  elem: Window | Element,
  centerX: number,
  centerY: number
): Event {
  return new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    view: window,
    detail: 1,
    screenX: 1,
    screenY: 1,
    clientX: centerX,
    clientY: centerY,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    button: 0,
    relatedTarget: elem,
  });
}

test("should call onClick", () => {
  const onClick = vi.fn();
  const { getByTestId } = render(
    <button onClick={onClick} data-testid="button">
      Click me
    </button>
  );
  const elem = getByTestId("button");
  fireEvent(elem, createMouseEvent("click", elem, 0, 0));
  expect(onClick).toHaveBeenCalled();
});
