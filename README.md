# Welcome to the Dashboard of the Zoo Cologne!

A modern web dashboard for managing and displaying zoo animal information, built with Nuxt.js and TypeScript.

## Tech Stack

This project is built using the following technologies:

- **[Nuxt.js 3](https://nuxt.com/)** - The Intuitive Vue Framework for building modern web applications
- **[Vue.js 3](https://vuejs.org/)** - The Progressive JavaScript Framework (included with Nuxt)
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development
- **[Vitest](https://vitest.dev/)** - A blazing fast unit test framework powered by Vite
- **[ESLint](https://eslint.org/)** - JavaScript/TypeScript linter with Antfu's configuration
- **[Faker.js](https://fakerjs.dev/)** - Generate massive amounts of fake data for testing
- **[TanStack Table](https://tanstack.com/table/v8)** - A powerful headless UI table library for tables and datagrids
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (version 10.11.0 or higher)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Available Commands

| Command                  | Description                             |
| ------------------------ | --------------------------------------- |
| `pnpm dev`               | Start the development server            |
| `pnpm build`             | Build the application for production    |
| `pnpm start`             | Start the production server             |
| `pnpm lint`              | Run ESLint to check code quality        |
| `pnpm lint:fix`          | Run ESLint and automatically fix issues |
| `pnpm typecheck`         | Run TypeScript type checking            |
| `pnpm test`              | Run unit tests                          |
| `pnpm test-for-reviewer` | Build and test (used for code review)   |

### Development

To start developing, run:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Production

To build and run in production:

```bash
pnpm build
pnpm start
```

## Folder Structure

The project follows standard Nuxt.js conventions:

| Directory      | Purpose                                     |
| -------------- | ------------------------------------------- |
| `components/`  | Vue components (auto-imported)              |
| `composables/` | Vue 3 composables for shared reactive logic |
| `data/`        | Static data and mock data files             |
| `server/api/`  | Server-side API endpoints                   |
| `types/`       | TypeScript type definitions                 |
| `utils/`       | Utility functions (auto-imported)           |
| `test/`        | Unit tests                                  |

**Configuration files:**

- `nuxt.config.ts` - Nuxt.js configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - Linting rules

This structure follows Nuxt.js conventions and best practices for scalable Vue.js applications.
