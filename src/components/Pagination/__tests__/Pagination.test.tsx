import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";

describe("Pagination Component", () => {
  const defaultProps = {
    total: 100,
    currentPage: 1,
    pageSize: 10,
    onPageChange: jest.fn(),
    onPageSizeChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with initial props", () => {
    render(<Pagination {...defaultProps} />);
    
    // Total count is displayed
    expect(screen.getByText(/out of 100/i)).toBeInTheDocument();
    
    // Page selection shows 10 pages total (using exact role query to avoid matching "10 items per page")
    expect(screen.getByRole("button", { name: "Page 10" })).toBeInTheDocument();
  });

  it("should disable previous button on the first page", () => {
    render(<Pagination {...defaultProps} />);
    
    const prevButton = screen.getByRole("button", { name: /previous page/i });
    expect(prevButton).toBeDisabled();
    
    const nextButton = screen.getByRole("button", { name: /next page/i });
    expect(nextButton).not.toBeDisabled();
  });

  it("should disable next button on the last page", () => {
    render(<Pagination {...defaultProps} currentPage={10} />);
    
    const nextButton = screen.getByRole("button", { name: /next page/i });
    expect(nextButton).toBeDisabled();
    
    const prevButton = screen.getByRole("button", { name: /previous page/i });
    expect(prevButton).not.toBeDisabled();
  });

  it("should call onPageChange when next is clicked", () => {
    render(<Pagination {...defaultProps} />);
    
    const nextButton = screen.getByRole("button", { name: /next page/i });
    fireEvent.click(nextButton);
    
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
  });

  it("should handle completely empty state (0 items)", () => {
    render(<Pagination {...defaultProps} total={0} />);
    
    expect(screen.getByText(/showing/i)).toBeInTheDocument();
  });
});
