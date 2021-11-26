export default {
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{ts}',
    '!src/**/*.spec.{ts}',
    '!src/app.ts',
    '!src/config/*.ts',
    '!src/interfaces/**'
  ],
  testEnvironment: 'node',
  testRegex: './(tests?|src)/.*\\.(test|spec)?\\.(js|ts)$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
