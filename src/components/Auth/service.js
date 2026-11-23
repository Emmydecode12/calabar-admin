import config from "../../config";

export const login = async (email, password) => {
  try {
    console.log("API URL: ", config.API_URL);
    const response = await fetch(`${config.API_URL}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await fetch(`${config.API_URL}/api/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fullname: name, email: email, password: password })
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};