import { render, screen } from "@testing-library/react";
import TestWithMockData from "@/pages/test";
import { mockData } from "../mocks/mockData";

describe("tobe visible text", () => {
  test("List renders successfully", () => {
		render(<TestWithMockData data={mockData} />)
    expect(screen.getByText(/linhdam@vippro1602/i)).toBeInTheDocument();
  });

  test("better way", () => {
    render(<TestWithMockData data={mockData} />);
		expect(typeof mockData).toBe('object');
		expect(Array.isArray(mockData)).toBe(true)
  });

	// test("get text by id", () => {
	// 	expect(screen.getByDisplayValue('check id Visible')).toHaveAttribute('id', 'checkId');
	// 	expect(screen.getByDisplayValue('check id Visible').id).toBe('checkId');
	// })
});
