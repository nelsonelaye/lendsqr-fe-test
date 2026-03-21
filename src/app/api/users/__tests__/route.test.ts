/** @jest-environment node */
import { GET } from "../route";
import { NextRequest } from "next/server";

global.fetch = jest.fn();

describe("GET /api/users", () => {
  const mockUsers = [
    { id: "1", username: "user1" },
    { id: "2", username: "user2" },
    { id: "3", username: "user3" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return paginated users and total successfully", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockUsers,
    });

    const req = new NextRequest("http://localhost:3000/api/users?page=1&size=2");
    const response = await GET(req);

    expect(response.status).toBe(200);
    const data = await response.json();

    expect(data.total).toBe(3);
    expect(data.data).toHaveLength(2);
    expect(data.data[0].id).toBe("1");
    expect(data.data[1].id).toBe("2");
  });

  it("should return an error when the API fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    const req = new NextRequest("http://localhost:3000/api/users?page=1&size=10");
    const response = await GET(req);

    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.error).toBe("Upstream error");
  });
});
