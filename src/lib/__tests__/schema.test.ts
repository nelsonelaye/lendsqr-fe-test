import { validationSchema } from "../schema";

describe("Login Validation Schema", () => {
  it("should pass when email and password are provided", async () => {
    const validData = {
      email: "test@example.com",
      password: "securepassword123",
    };
    
    await expect(validationSchema.validate(validData)).resolves.toBe(validData);
  });

  it("should fail when email is empty", async () => {
    const invalidData = {
      email: "",
      password: "securepassword123",
    };

    await expect(validationSchema.validate(invalidData)).rejects.toThrow("Email is required");
  });

  it("should fail when email is invalid format", async () => {
    const invalidData = {
      email: "not-an-email",
      password: "securepassword123",
    };

    await expect(validationSchema.validate(invalidData)).rejects.toThrow("Email is invalid");
  });

  it("should fail when password is less than 6 characters", async () => {
    const invalidData = {
      email: "test@example.com",
      password: "short",
    };

    await expect(validationSchema.validate(invalidData)).rejects.toThrow("Password must be at least 6 characters");
  });

  it("should fail when password is empty", async () => {
    const invalidData = {
      email: "test@example.com",
      password: "",
    };

    // empty string triggers the min(6) check first in Yup based on the definition order
    await expect(validationSchema.validate(invalidData)).rejects.toThrow("Password must be at least 6 characters");
  });
});
