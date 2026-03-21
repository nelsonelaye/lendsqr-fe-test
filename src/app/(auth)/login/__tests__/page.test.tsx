import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../page";

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('next/image', () => {
  return ({ src, alt }: any) => <img src={src} alt={alt} />;
});

describe("Login Page Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // mock localStorage
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(jest.fn());
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(jest.fn());
  });

  it("renders login form correctly", () => {
    render(<Login />);

    expect(
      screen.getByRole("heading", { name: /welcome/i }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    // login button should be initially disabled
    const loginButton = screen.getByRole("button", { name: /log in/i });
    expect(loginButton).toBeDisabled();
  });

  it("shows validation errors on input blur with empty values", async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    // trigger touched state
    fireEvent.focus(emailInput);
    fireEvent.blur(emailInput);

    fireEvent.focus(passwordInput);
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  it("enables the submit button only when values are valid", async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByRole("button", { name: /log in/i });

    expect(loginButton).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });

    // submit button still disabled
    await waitFor(() => {
      expect(loginButton).toBeDisabled();
    });

    // valid data
    fireEvent.change(emailInput, { target: { value: "user@lendsqr.com" } });
    fireEvent.change(passwordInput, { target: { value: "securepassword123" } });

    // submit button should now be enabled
    await waitFor(() => {
      expect(loginButton).not.toBeDisabled();
    });
  });

  it("saves auth to localStorage and redirects on successful submit", async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByRole("button", { name: /log in/i });

    fireEvent.change(emailInput, { target: { value: "nelson@lendsqr.com" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword" } });

    await waitFor(() => {
      expect(loginButton).not.toBeDisabled();
    });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "auth",
        JSON.stringify({ email: "nelson@lendsqr.com", isAuthenticated: true }),
      );
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });
});
