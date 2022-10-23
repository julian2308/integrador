// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

process.env.TZ = "UTC";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^grupo-04/components/(.*)$": "<rootDir>/components/$1",
    "^grupo-04/features/(.*)$": "<rootDir>/features/$1",
    "^grupo-04/services/(.*)$": "<rootDir>/services/$1",
    "^grupo-04/pages/(.*)$": "<rootDir>/pages/$1",
    "^grupo-04/test/(.*)$": "<rootDir>/test/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: [
    "components/**/*.ts",
    "components/**/*.tsx",
    "!components/**/*.stories.tsx",
    "features/**/*.ts",
    "features/**/*.tsx",
    "pages/**/*.route.ts",
    "pages/**/*.page.tsx",
    "services/**/*.ts",
    "!pages/_app.page.tsx",
    "!pages/_document.page.tsx",
    "!**/*.test.tsx",
    "!**/*.spec.tsx",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
