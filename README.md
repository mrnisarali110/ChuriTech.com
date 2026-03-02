# Deployment Instructions for Vercel

To deploy this Angular application to Vercel, follow these steps:

1.  **Push to GitHub**: Push your code to a GitHub repository.
2.  **Import to Vercel**:
    -   Go to [Vercel](https://vercel.com) and click **"Add New"** > **"Project"**.
    -   Import your GitHub repository.
3.  **Configure Project Settings**:
    -   **Framework Preset**: Select **"Angular"** (Vercel should detect this automatically).
    -   **Build Command**: `npm run build` (Default).
    -   **Output Directory**: `dist` (This matches the configuration in `angular.json`).
    -   **Install Command**: `npm install` (Default).
4.  **Deploy**: Click **"Deploy"**.

### Notes:
-   The project uses a custom entry point (`index.tsx`), but the Angular build system is configured to handle it.
-   A `vercel.json` file has been included to handle Single Page Application (SPA) routing, ensuring that deep links work correctly.
-   Unnecessary files like `.angular` and `node_modules` are excluded via `.vercelignore`.
