import { render, screen, waitFor } from "@testing-library/react";
import UserDetails from "../page";
import { fetchUserById } from "@/lib/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("@/lib/api", () => ({
  fetchUserById: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useParams: () => ({ id: "123" }),
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

describe("User Details Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should render user details correctly", async () => {
    const mockUser = {
      id: "123",
      username: "jane_doe",
      tier: 2,
      accountBalance: 50000,
      accountNumber: "1234567890",
      bankName: "Guaranty Trust Bank",
    };

    (fetchUserById as jest.Mock).mockResolvedValue(mockUser);

    renderWithClient(<UserDetails />);

    await waitFor(() => {
      expect(screen.getAllByText("jane_doe")[0]).toBeInTheDocument();
      expect(screen.getByText("123")).toBeInTheDocument();
      expect(screen.getByText(/50,000.00/i)).toBeInTheDocument();
      expect(screen.getByText("1234567890 / Guaranty Trust Bank")).toBeInTheDocument();
    });
  });

  it("should hanlde render error state", async () => {
    (fetchUserById as jest.Mock).mockRejectedValue(new Error("Network Error"));

    renderWithClient(<UserDetails />);

    await waitFor(() => {
      expect(screen.getByText(/Failed to load user profile/i)).toBeInTheDocument();
    });
  });
});
