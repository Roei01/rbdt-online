# Dance Skill - MVP Dance Tutorial Platform

A production-ready MVP for selling and streaming dance tutorial videos securely.

## Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, TailwindCSS, Framer Motion
- **Backend:** Node.js, Express.js (integrated via Custom Server)
- **Database:** MongoDB
- **Email:** Nodemailer
- **Payment:** GreenInvoice API
- **Auth:** JWT with IP Protection

## Features

- **Landing Page:** High-converting modern design.
- **Purchase Flow:** Seamless integration with GreenInvoice.
- **Secure Access:** Token-based authentication with IP locking to prevent account sharing.
- **Video Protection:** Streamed via protected route, right-click disabled, download disabled.

## Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Copy `.env.example` to `.env` and fill in the required values.
   ```bash
   cp .env.example .env
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   This starts the Next.js app with the custom Express server on `http://localhost:3000`.

4. **Run Production:**
   ```bash
   npm run build
   npm run start
   ```

## Project Structure

- `/app`: Next.js App Router pages and layouts.
- `/server`: Express backend logic, routes, and configuration.
- `/models`: Mongoose database schemas.
- `/sections`: Landing page UI sections.
- `/components`: Reusable UI components.
- `/services`: Business logic (Payment, Email, Auth).

## API Endpoints

- `POST /api/purchase/create`: Initiate purchase.
- `POST /api/purchase/webhook`: Handle payment success.
- `POST /api/auth/login`: User login.
- `GET /api/video/stream/:id`: Secure video stream.

## Security Note

This MVP uses IP address locking to prevent users from sharing their account. If a user tries to login from a new IP, access is denied.

## License

ISC
