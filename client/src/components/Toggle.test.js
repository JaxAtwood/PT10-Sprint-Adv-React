import React from "react";
import  { render, cleanup }  from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Toggle from "./Toggle";

afterEach(cleanup);

test('is present', () => {
    const { getByTestId, getByText } = render(<Toggle />);

    expect(getByTestId("divtag")).toHaveTextContent("Orchid Mode");
    expect(getByText("Orchid Mode")).toHaveTextContent("Orchid Mode");
  });