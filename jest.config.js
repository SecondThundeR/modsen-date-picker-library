module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "src/hooks/**/*.{ts,tsx}",
    "!src/**/*.stories.{ts,tsx}",
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jestSetup.ts"],
  testEnvironment: "jsdom",
};
