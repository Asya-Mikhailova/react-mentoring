module.export = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'],
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
