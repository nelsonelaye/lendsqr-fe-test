/** @jest-environment node */
import { GET } from "../route";

global.fetch = jest.fn();

describe("GET /api/users/[id]", () => {
  const mockUsers = [
    { id: "1", username: "user1" },
    { id: "2", username: "user2" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.API_URL = "http://mock-api.com";
    process.env.JSON_GENERATOR_TOKEN = "mock-token";
  });

  afterEach(() => {
    delete process.env.API_URL;
    delete process.env.JSON_GENERATOR_TOKEN;
  });

  it("should return specific user if found", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockUsers,
    });

    const req = new Request("http://localhost:3000/api/users/2");
    const params = Promise.resolve({ id: "2" });

    const response = await GET(req, { params });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.id).toBe("2");
    expect(data.username).toBe("user2");
  });

  it("should return 404 if user not found", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockUsers,
    });

    const req = new Request("http://localhost:3000/api/users/99");
    const params = Promise.resolve({ id: "99" });

    const response = await GET(req, { params });

    expect(response.status).toBe(404);
    const data = await response.json();
    expect(data.error).toBe("User not found");
  });

  it("should return upstream error on API failure", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 503,
      statusText: "Service Unavailable",
    });

    const req = new Request("http://localhost:3000/api/users/1");
    const params = Promise.resolve({ id: "1" });

    const response = await GET(req, { params });

    expect(response.status).toBe(503);
    const data = await response.json();
    expect(data.error).toContain("Upstream API error");
  });

  it("should return 500 if env vars are missing", async () => {
    delete process.env.API_URL;
    delete process.env.JSON_GENERATOR_TOKEN;

    const req = new Request("http://localhost:3000/api/users/1");
    const params = Promise.resolve({ id: "1" });

    const response = await GET(req, { params });

    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.error).toBe("API configuration is missing");
  });
});
