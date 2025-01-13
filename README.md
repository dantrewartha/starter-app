# Starter Vue 3 App with TypeScript and Vite

This project serves as a scalable and maintainable starter template for Vue 3 applications using Vite, TypeScript, Tailwind CSS, ESLint, Prettier, Stylelint, and Vitest.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup](#setup)
- [Code Standards](#code-style-guidelines)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## **Project Structure**

```bash
.
├── .vscode/                 # VS Code settings and workspace configurations.
├── deployment/              # Deployment configurations
├── dist/                    # Production build output
├── nginx-docker/            # Nginx Docker configurations
├── public/                  # Static public assets
├── src/
│   ├── assets/              # Static assets (images, fonts, etc.)
│   ├── components/          # Reusable Vue components organized by feature or purpose.
│   ├── composables/         # Reusable Composition API functions for shared logic.
│   ├── config/              # Configuration files for application settings and environment variables.
│   ├── directives/          # Custom Vue directives for DOM manipulation and behavior.
│   ├── hooks/               # Custom hooks for reusable logic and stateful behaviors.
│   ├── layouts/             # Page layouts that define structural templates.
│   ├── pages/               # Route views that represent entire pages.
│   ├── plugins/             # Custom plugins for third-party integrations like Axios or authentication.
│   ├── router/              # Vue Router configuration and route definitions.
│   ├── services/            # API calls and backend service integrations.
│   ├── stores/              # Pinia state management for application-level state.
│   ├── stories/             # Storybook stories for documenting and testing components.
│   ├── styles/              # Global and utility styles, including Tailwind setup.
│   ├── tests/               # Unit and integration tests organized by feature or component.
│   ├── types/               # TypeScript type definitions and interfaces.
│   ├── utils/               # Utility functions for reusable helpers.
│   ├── main.ts              # App entry point that initializes the application.
│   └── App.vue              # Root component for the application.
├── tests/                   # Unit and integration tests.
├── .dockerignore            # Docker ignore file
├── .editorconfig            # Editor configuration
├── .gitignore               # Git ignore file
├── .npmrc                   # NPM configuration
├── .prettierignore          # Prettier ignore file
├── .prettierrc              # Prettier configuration
├── .storybook               # Storybook configuration
├── .stylelintignore         # Stylelint ignore file
├── Dockerfile               # Dockerfile for containerization
├── README.md                # Project documentation
├── ci_settings.xml          # Continuous integration settings
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package-lock.json        # Package lock file
├── package.json             # Package manifest
├── postcss.config.js        # PostCSS configuration
├── stylelint.config.cjs     # Stylelint configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.app.json        # TypeScript config for application
├── tsconfig.base.json       # Base TypeScript configuration
├── tsconfig.eslint.json     # TypeScript config for ESLint
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── vitest.config.ts         # Vitest configuration
```

## **Setup**

### **Requirements**

- **Node.js**: v22.x or later
- **npm**: v11.x or later

### **Major Dependencies**

- **Vue 3**: ^3.5.13
- **Vite**: ^6.0.3
- **TypeScript**: ~5.6.2
- **Tailwind CSS**: ^3.4.17
- **Axios**: ^1.7.9

### **Install Dependencies**

```bash
npm install
```

### **Development Server**

```bash
npm run dev
```

### **Build for Production**

```bash
npm run build
```

### **Linting and Formatting**

- **JavaScript/TypeScript Linting**

```bash
npm run lint:js
```

- **CSS Linting**

```bash
npm run lint:style
```

- **Prettier Formatting**

```bash
npm run format
```

---

## **Code Standards**

### **ESLint**

- Extends: `eslint:recommended`, `plugin:vue/vue3-recommended`, `plugin:@typescript-eslint/recommended`, and `plugin:prettier/recommended`
- Rules:
  - Enforces recommended rules for Vue, TypeScript, and Prettier.
  - Integrates Prettier for consistent code formatting.

### **Prettier**

- Configuration: `.prettierrc`
- Key Rules:
  - Tabs: 2 spaces
  - Quotes: Single
  - Semicolons: Enabled
  - Trailing Commas: ES5

### **Stylelint**

- Configuration: `stylelint.config.cjs`
- Extends:
  - `stylelint-config-standard`
  - `stylelint-config-tailwindcss`
- Rules:
  - Alphabetical ordering of CSS properties.
  - Enforces Tailwind conventions.

### **EditorConfig**

- Configuration: `.editorconfig`
- Enforces consistent indentation, charset, and line endings across files.

---

## **Testing**

- Framework: **Vitest**
- Run tests:

```bash
npm run test
```

---

## **Contributing**

1. Fork the repository.
2. Create a new branch.
3. Commit changes with descriptive messages.
4. Push and create a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).
