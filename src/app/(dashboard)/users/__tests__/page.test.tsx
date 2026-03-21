import { render, screen, waitFor } from "@testing-library/react";
import Users from "../page";
import { fetchAllUsers, fetchUsers } from "@/lib/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("@/lib/api", () => ({
  fetchAllUsers: jest.fn(),
  fetchUsers: jest.fn(),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe("Users List Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should render users table and stats correctly", async () => {
    const mockAllUsers = {
      total: 2,
      data: [
        { id: "1", status: "active", educationAndEmployment: { loanRepayment: 100 }, accountBalance: 200 },
        { id: "2", status: "inactive", educationAndEmployment: { loanRepayment: 0 }, accountBalance: 0 },
      ],
    };
    const mockUsers = {
      total: 2,
      data: [
        {
          id: "1",
          organization: "Lendsqr",
          username: "john_doe",
          email: "john@lendsqr.com",
          phoneNumber: "08012345678",
          createdAt: "2024-01-01T00:00:00.000Z",
          status: "active",
        },
      ],
    };

    (fetchAllUsers as jest.Mock).mockResolvedValue(mockAllUsers);
    (fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    renderWithClient(<Users />);
    
    await waitFor(() => {
      expect(screen.getByText("john_doe")).toBeInTheDocument();
      expect(screen.getByText("john@lendsqr.com")).toBeInTheDocument();
    });

    expect(screen.getByText("users")).toBeInTheDocument();
  });

  it("should handle empty state negatively", async () => {
    (fetchAllUsers as jest.Mock).mockResolvedValue({ total: 0, data: [] });
    (fetchUsers as jest.Mock).mockResolvedValue({ total: 0, data: [] });

    renderWithClient(<Users />);

    await waitFor(() => {
      expect(screen.getByText(/no users found/i)).toBeInTheDocument();
    });
  });

  it("should render error state correctly", async () => {
    (fetchAllUsers as jest.Mock).mockRejectedValue(new Error("API Error"));
    (fetchUsers as jest.Mock).mockRejectedValue(new Error("API Error"));

    renderWithClient(<Users />);

    await waitFor(() => {
      expect(screen.getByText(/Failed to load users/i)).toBeInTheDocument();
    });
  });
});
