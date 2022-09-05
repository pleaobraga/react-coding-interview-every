module.exports = {
  preset: 'ts-jest',
  bail: false,
  displayName: {
    name: 'MERN Challenge',
    color: 'blue',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/testing/setup.ts'],
  testMatch: ['<rootDir>/**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: [`node_modules`],
  transform: {
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.tsx$': 'babel-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  verbose: true,
};
