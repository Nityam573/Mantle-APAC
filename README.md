# OnlyFund

OnlyFund is a cutting-edge decentralized platform designed to revolutionize funding for the open-source ecosystem. By connecting open-source maintainers with donors, OnlyFund ensures sustainable growth and development in the community. Donors can discover and support impactful projects, while maintainers receive the financial backing they need to innovate.

---

## 🌟 Features

- **Seamless Project Funding**: Effortlessly make donations using cryptocurrency.
- **GitHub Integration**: Link directly to GitHub repositories and manage issues.
- **Secure Smart Contracts**: Transparent fund management via blockchain.
- **Multi-Wallet Support**: Leverage the Okto SDK for smooth wallet management.
- **Project Discovery**: Explore and search for open-source initiatives.
- **Contributor Dashboard**: Manage projects and track contributions with ease.
- **Donor Dashboard**: Discover new projects and monitor donation impact.
- **AI Agent Integration**: Automate smart contract actions with natural language commands.

---

## 🛠 Tech Stack

### Frontend

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **UI Components**: Radix UI
- **Routing**: React Router
- **Wallet Integration**: Okto SDK

### Backend

- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT and GitHub OAuth (via Passport.js)
- **AI Integration**: BAML Boundary ML for intent-based smart contract execution
- **GitHub Tools**: Octokit and Probot for automation

---

## 📁 Project Structure

The project is organized into modular components:

- `web-client/`: React-based frontend application
- `web-server/`: Node.js backend server
- `contract/`: Smart contract implementations
- `contract-testing/`: Smart contract test suite
- `github-server/`: GitHub integration service
- `baml_client/`: BAML client for AI integration for independently interacting with blockchain infrastructure
- `app_name/`: GitHub bot implementation

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- Git
- Okto Wallet
- MetaMask or compatible Web3 wallet

### Installation

1. **Clone the repository:**

2. **Set up the web client:**

   ```bash
   cd web-client
   npm install
   cp .env.example .env # Configure your environment variables
   npm run dev
   ```
3. **Set up the web server:**

   ```bash
   cd ../web-server
   npm install
   cp .env.example .env # Configure your environment variables
   npm run start
   ```
4. **Configure environment variables:**

   - MongoDB connection string
   - GitHub OAuth credentials
   - JWT secret
   - Okto SDK keys
   - Smart contract addresses

