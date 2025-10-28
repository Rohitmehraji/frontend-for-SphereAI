# Sphere.AI Frontend

This is the official frontend for Sphere.AI, a powerful platform of AI-driven tools designed to help founders and entrepreneurs solve critical business problems. This application is built with Next.js and Tailwind CSS, and it is fully integrated with the [Sphere.AI Backend](https://github.com/Rohitmehraji/backend-for-shereai).

## Features

- **Founder-Friendly Dashboard:** A visually rich dashboard with dynamic metrics, charts, and an activity feed.
- **Live Backend Integration:** Every feature, from authentication to the AI tools, is connected to the live production backend.
- **Secure Authentication:** A complete login/signup flow with secure token handling.
- **Billing & Subscription Management:** A fully functional billing page with live Stripe integration.
- **Suite of AI Tools:** A comprehensive set of AI-powered tools for business planning, marketing, finance, and more.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- A running instance of the [Sphere.AI Backend](https://github.com/Rohitmehraji/backend-for-shereai).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/frontend-for-sphere-ai.git
    cd frontend-for-sphere-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

To run this project, you need to create a `.env.local` file in the root of your project and add the following environment variables:

```
NEXT_PUBLIC_API_URL=https://backend-for-shereai.onrender.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51SJ7eUIWpKXzj9UsLZfnHeWWmNKCkZNT9LR3WjA4wId3EjYNl9ZrhW8lH92HKRtXLu2WAuYAfzzaL5rK8iERGH4h00aQMYqkiV
```

-   `NEXT_PUBLIC_API_URL`: The URL of your deployed Sphere.AI backend.
-   `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your publishable key from Stripe for processing payments.

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Vercel

This application is optimized for deployment on [Vercel](https://vercel.com/), the platform from the creators of Next.js.

### Step-by-Step Guide

1.  **Push your code to a Git repository** (e.g., GitHub, GitLab, Bitbucket).

2.  **Import your project into Vercel.**
    - Go to your Vercel dashboard and click "Add New... > Project".
    - Select your Git repository.

3.  **Configure your project.**
    - Vercel will automatically detect that you are using Next.js and will configure the build settings for you.

4.  **Add your environment variables.**
    - In your Vercel project settings, navigate to the "Environment Variables" section.
    - Add the `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` with their respective values.

5.  **Deploy.**
    - Click the "Deploy" button. Vercel will build and deploy your application. After a few moments, you will have a live, production-ready URL for your Sphere.AI frontend.
