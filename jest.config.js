module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test-utils/setup.ts'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.ts'],
  coverageReporters: ['lcov', 'text-summary']
};