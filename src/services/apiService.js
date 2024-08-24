// src/services/apiService.js
const API_URL = "http://localhost:8000/v1/registration/register";

export const registerUser = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("There was an error with the registration:", error);
  }
};
