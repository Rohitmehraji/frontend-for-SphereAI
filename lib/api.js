// lib/api.js

/**
 * Mock function to simulate user login.
 * In a real application, this would make a request to your backend API.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<object>} - A promise that resolves with a success message or rejects with an error.
 */
export const loginUser = async (email, password) => {
  console.log('Logging in with:', email, password);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@sphere.ai' && password === 'password') {
        resolve({ success: true, message: 'Login successful!' });
      } else {
        reject({ success: false, message: 'Invalid email or password.' });
      }
    }, 1000);
  });
};

/**
 * Mock function to simulate user registration.
 * In a real application, this would make a request to your backend API.
 * @param {string} fullName - The user's full name.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<object>} - A promise that resolves with a success message.
 */
export const registerUser = async (fullName, email, password) => {
  console.log('Registering user:', fullName, email, password);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Registration successful!' });
    }, 1000);
  });
};
