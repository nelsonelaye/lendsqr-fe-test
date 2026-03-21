import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../page";

// Mock next/navigation
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock next/image
jest.mock('next/image', () => {
  return ({ src, alt }: any) => <img src={src} alt={alt} />;
});

describe("Login Page Component", () => {
  let localStorageMock: { [key: string]: string } = {};

  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock localStorage via Storage prototype since window.localStorage is read-only
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(jest.fn());
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(jest.fn());
  });

  it("renders login form correctly", () => {
    render(<Login />);
    
    expect(screen.getByRole("heading", { name: /welcome/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    
    // Login button should be initially disabled (due to formik dirty/valid checks)
    const loginButton = screen.getByRole("button", { name: /log in/i });
    expect(loginButton).toBeDisabled();
  });

  it("shows validation errors on input blur with empty values", async () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    // Focus and blur to trigger touched state
    fireEvent.focus(emailInput);
    fireEvent.blur(emailInput);
    
    fireEvent.focus(passwordInput);
    fireEvent.blur(passwordInput);

    // Wait for Formik async validation and render
    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  it("enables the submit button only when valid and dirty", async () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByRole("button", { name: /log in/i });

    expect(loginButton).toBeDisabled();

    // Enter partial/invalid data
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    
    // Submit button still disabled
    await waitFor(() => {
      expect(loginButton).toBeDisabled();
    });

    // Enter valid data
    fireEvent.change(emailInput, { target: { value: 'user@lendsqr.com' } });
    fireEvent.change(passwordInput, { target: { value: 'securepassword123' } });

    // Submit button should now be enabled
    await waitFor(() => {
      expect(loginButton).not.toBeDisabled();
    });
  });

  it("saves auth to localStorage and redirects on successful submit", async () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByRole("button", { name: /log in/i });

    // Enter valid data
    fireEvent.change(emailInput, { target: { value: 'admin@lendsqr.com' } });
    fireEvent.change(passwordInput, { target: { value: 'validpassword' } });

    await waitFor(() => {
      expect(loginButton).not.toBeDisabled();
    });

    // Submit form
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "auth",
        JSON.stringify({ email: "admin@lendsqr.com", isAuthenticated: true })
      );
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });
});
