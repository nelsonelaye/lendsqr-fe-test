import { render, screen, fireEvent } from "@testing-library/react";
import UserMenu from "../UserMenu";
import { toast } from "sonner";

// mocks
jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

jest.mock('next/image', () => {
  return ({ src, alt }: any) => <img src={src} alt={alt} />;
});

jest.mock('sonner', () => ({
  toast: {
    info: jest.fn()
  }
}));

jest.mock("@radix-ui/react-dropdown-menu", () => ({
  Root: ({ children }: any) => <div data-testid="dropdown-root">{children}</div>,
  Trigger: ({ children }: any) => <div data-testid="dropdown-trigger">{children}</div>,
  Portal: ({ children }: any) => <div data-testid="dropdown-portal">{children}</div>,
  Content: ({ children }: any) => <div data-testid="dropdown-content">{children}</div>,
  Item: ({ children, onSelect, className }: any) => (
    <button data-testid="dropdown-item" className={className} onClick={onSelect}>
      {children}
    </button>
  ),
}));

describe("UserMenu Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the trigger button", () => {
    render(<UserMenu userId="123" />);
    
    const triggerBtn = screen.getByRole("button", { name: /user actions/i });
    expect(triggerBtn).toBeInTheDocument();
  });

  it("displays menu options", () => {
    render(<UserMenu userId="123" />);
    
    expect(screen.getByText("View Details")).toBeInTheDocument();
    expect(screen.getByText("Blacklist User")).toBeInTheDocument();
    expect(screen.getByText("Activate User")).toBeInTheDocument();
    
    const link = screen.getByRole("link", { name: /view details/i });
    expect(link).toHaveAttribute("href", "/users/123");
  });

  it("calls toast on non-implemented actions", () => {
    render(<UserMenu userId="123" />);
    
    const blacklistBtn = screen.getByText("Blacklist User");
    fireEvent.click(blacklistBtn);
    
    expect(toast.info).toHaveBeenCalledWith(
        "Blacklist feature coming soon", 
        expect.objectContaining({ description: "This action is not available yet." })
    );
  });
});
