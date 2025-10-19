# Sphere.AI - Frontend

This is the complete frontend for Sphere.AI, a powerful platform designed to help founders and entrepreneurs solve business-critical problems using AI-driven tools. This project was built with Next.js and styled with Tailwind CSS.

## Features

- **Modern UI/UX:** A clean, professional, and intuitive dark-themed interface with smooth animations powered by `framer-motion`.
- **Authentication:** Secure login and registration pages with mock API services.
- **Dashboard:** A central hub for analytics, KPI tracking, and user engagement charts.
- **Core Feature Modules:**
    - AI Business Intelligence Hub
    - Automated Financial Suite
    - Sales & Marketing Automation
    - Customer Support Automation
    - Productivity & Workflow Orchestration
    - Talent & HR Optimization
- **Billing & Subscriptions:** A dedicated page for managing subscriptions and viewing transaction history.
- **Responsive Design:** Fully responsive layout for both desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd sphere-ai-frontend
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Connecting to a Backend

This frontend is designed to be backend-agnostic. All API calls are simulated in mock services, which can be easily replaced with real API endpoints.

### API Services Location

The mock API services are located in `lib/api.js`. This file contains functions for user authentication (`loginUser`, `registerUser`).

### How to Wire Up Your Backend

1.  **Open `lib/api.js`:** This is where you'll find the mock API calls.
2.  **Replace Mock Logic with Real API Calls:**
    - Use a library like `axios` or the native `fetch` API to make requests to your backend.
    - Update the functions to handle real request/response cycles, including loading states and error handling.
    - Ensure your backend returns data in the format expected by the frontend components.

**Example (replacing the mock `loginUser` function):**

```javascript
// lib/api.js

import axios from 'axios';

const API_URL = 'https://your-backend-api.com/api';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    // Assuming your backend returns a token and user data
    // You can store the token in localStorage or cookies
    localStorage.setItem('token', response.data.token);
    return { success: true, user: response.data.user };
  } catch (error) {
    // Throw an error with a message from the backend, or a default one
    throw new Error(error.response?.data?.message || 'Login failed. Please try again.');
  }
};
```
