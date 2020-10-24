module.exports = {
  collectCoverageFrom: [
    'pages/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/index.{js,jsx,ts,tsx}',
    '!src/constants/**',
    '!src/mock/**',
    '!src/services/**',
    '!<rootDir>/node_modules/',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  coverageReporters: ['text', 'lcov'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(css|less|sass|scss)$': '<rootDir>/config/jest/cssTransform.js',
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|less|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|less|sass|scss)$': '<rootDir>/config/jest/cssMock.js',
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/jest/fileMock.js",
    '^public(.*)$': '<rootDir>/public$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@mock(.*)$': '<rootDir>/src/mock$1',
    '^@reducers(.*)$': '<rootDir>/src/reducers$1',
    '^@sagas(.*)$': '<rootDir>/src/sagas$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },
};
